export const runtime = "nodejs";

import { NextResponse } from "next/server";
// @ts-ignore — nodemailer has no types in prod build, this is intentional
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // minimal sanity check
    if (!data.email && !data.phone) {
      return NextResponse.json(
        { success: false, error: "Missing contact details" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER!, // non-null assertion for TS
        pass: process.env.MAIL_PASS!,
      },
    });

    const message = `
NEW ENQUIRY RECEIVED
-------------------

Email    : ${data.email || "-"}
Phone    : ${data.phone || "-"}
Company  : ${data.company || "-"}
Quantity : ${data.quantity || "-"}
Country  : ${data.country || "-"}
Source   : ${data.source || "website"}

Remarks:
${data.remarks || "-"}
    `;

    await transporter.sendMail({
      from: `"LeatherBrand Enquiry" <${process.env.MAIL_USER!}>`,
      to: process.env.MAIL_TO!,
      subject: `New Get Quote Enquiry (${data.source || "website"})`,
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("ENQUIRY ERROR:", err);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
