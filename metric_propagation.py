#!/usr/bin/env python3
"""
metric_propagation.py

Runs geometric activation propagation on the 3D neuron lattice
inside Nebula. Each step:

1) Fetch all neurons: id, x, y, z, activation_num
2) For each active neuron:
   - Find K nearest neighbours in 3D metric space
   - Spread activation with exponential distance decay
   - Retain some activation (leak) on itself
3) Normalize activations
4) Write updated activations back into Nebula
"""

import math
import argparse

from nebula3.gclient.net import ConnectionPool
from nebula3.Config import Config


# -------------------------------
# Nebula helpers
# -------------------------------

def get_session():
    cfg = Config()
    cfg.max_connection_pool_size = 10
    pool = ConnectionPool()
    if not pool.init([("127.0.0.1", 9669)], cfg):
        raise RuntimeError("Failed to init Nebula connection pool")
    # CHANGE PASSWORD HERE IF DIFFERENT
    session = pool.get_session("root", "nebula")
    # we keep pool alive via closure; we’ll not reuse after script end anyway
    return session


def run_query(session, space: str, query: str):
    """Always USE <space> before running the query."""
    use_res = session.execute(f"USE {space};")
    if not use_res.is_succeeded():
        raise RuntimeError(f"USE {space} failed: {use_res.error_msg()}")

    res = session.execute(query)
    if not res.is_succeeded():
        raise RuntimeError(
            f"Query failed: {res.error_msg()}\nQUERY:\n{query}"
        )
    return res


# -------------------------------
# Fetch neurons
# -------------------------------

def fetch_neurons(session, space: str):
    """
    Returns list of dicts:
    {
        "id": <vertex id string>,
        "x": float,
        "y": float,
        "z": float,
        "act": float
    }
    """
    q = """
    LOOKUP ON neuron
    YIELD id(vertex) AS vid,
          neuron.x AS x,
          neuron.y AS y,
          neuron.z AS z,
          neuron.activation_num AS act;
    """
    res = run_query(session, space, q)
    rows = res.rows()
    neurons = []

    for row in rows:
        vals = row.values  # Thrift Value list

        # --- vertex id ---
        vid = None
        try:
            # string id
            vid = vals[0].get_sVal()
            if isinstance(vid, bytes):
                vid = vid.decode("utf-8")
            else:
                vid = str(vid)
        except Exception:
            try:
                # int id
                vid = str(vals[0].get_iVal())
            except Exception:
                vid = str(vals[0])

        # --- coordinates ---
        try:
            x = float(vals[1].get_fVal())
        except Exception:
            x = 0.0

        try:
            y = float(vals[2].get_fVal())
        except Exception:
            y = 0.0

        try:
            z = float(vals[3].get_fVal())
        except Exception:
            z = 0.0

        # --- activation (insanely defensive) ---
        act = 0.0
        # try float
        try:
            act = float(vals[4].get_fVal())
        except Exception:
            # try int
            try:
                act = float(vals[4].get_iVal())
            except Exception:
                # try string
                try:
                    s = vals[4].get_sVal()
                    if isinstance(s, bytes):
                        s = s.decode("utf-8")
                    act = float(s)
                except Exception:
                    act = 0.0

        neurons.append(
            {
                "id": vid,
                "x": x,
                "y": y,
                "z": z,
                "act": act,
            }
        )

    return neurons


# -------------------------------
# Geometry & propagation
# -------------------------------

def euclidean3(a, b):
    """3D Euclidean distance between two (x, y, z) tuples."""
    return math.sqrt(
        (a[0] - b[0]) ** 2 +
        (a[1] - b[1]) ** 2 +
        (a[2] - b[2]) ** 2
    )


def propagate_step(neurons, k_neighbors=12, alpha=1.0, leak=0.9):
    """
    neurons: list of dict {id,x,y,z,act}
    Returns: dict[id] -> new_activation
    """
    ids = [n["id"] for n in neurons]
    pos = {n["id"]: (n["x"], n["y"], n["z"]) for n in neurons}
    act_now = {n["id"]: n["act"] for n in neurons}

    new_act = {nid: 0.0 for nid in ids}

    for nid in ids:
        a = act_now[nid]
        if a <= 0.0:
            continue  # no activation to spread

        src_pos = pos[nid]

        # distances to others
        dists = []
        for other_id in ids:
            if other_id == nid:
                continue
            d = euclidean3(src_pos, pos[other_id])
            dists.append((d, other_id))

        if not dists:
            # isolated, only leak
            new_act[nid] += a * leak
            continue

        dists.sort(key=lambda t: t[0])
        neighbors = dists[:k_neighbors]

        # self leak
        new_act[nid] += a * leak

        # spread to neighbors
        for d, oid in neighbors:
            decay = math.exp(-alpha * d)  # distance decay
            delta = a * decay
            new_act[oid] += delta

    # normalize to [0,1]
    max_a = max(new_act.values()) if new_act else 0.0
    if max_a > 0:
        for nid in new_act:
            new_act[nid] = new_act[nid] / max_a

    return new_act


# -------------------------------
# Write back to Nebula
# -------------------------------

def write_activations(session, space: str, new_act):
    """
    Write activation_num and activation (string) back into Nebula.
    """
    for nid, val in new_act.items():
        q = f'''
        UPSERT VERTEX ON neuron "{nid}"
        SET activation_num = {val},
            activation = "{val}";
        '''
        run_query(session, space, q)


# -------------------------------
# Main
# -------------------------------

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--space", required=True)
    parser.add_argument(
        "--steps",
        type=int,
        default=1,
        help="Number of propagation steps to run",
    )
    parser.add_argument(
        "--k",
        type=int,
        default=12,
        help="Nearest neighbours per neuron",
    )
    parser.add_argument(
        "--alpha",
        type=float,
        default=1.0,
        help="Distance decay rate (higher = faster decay)",
    )
    parser.add_argument(
        "--leak",
        type=float,
        default=0.9,
        help="Self-retention factor for each neuron",
    )
    args = parser.parse_args()

    session = get_session()

    for step in range(args.steps):
        print(f"\n[STEP {step + 1}/{args.steps}] Fetching neurons...")
        neurons = fetch_neurons(session, args.space)
        print(f"[INFO] Neurons fetched: {len(neurons)}")

        new_act = propagate_step(
            neurons,
            k_neighbors=args.k,
            alpha=args.alpha,
            leak=args.leak,
        )
        print("[INFO] Writing new activations back to Nebula...")
        write_activations(session, args.space, new_act)
        print(f"[DONE] Step {step + 1}")

    print("\n[FINISHED] Metric propagation complete.")


if __name__ == "__main__":
    main()
