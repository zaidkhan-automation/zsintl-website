import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const message = `
New Enquiry Received

Name: ${data.name || "-"}
Email: ${data.email || "-"}
Phone: ${data.phone || "-"}
Company: ${data.company || "-"}
Quantity: ${data.quantity || "-"}
Country: ${data.country || "-"}
Source: ${data.source || "unknown"}

Message:
${data.remarks || "-"}
    `;

    await transporter.sendMail({
      from: `"LeatherBrand Enquiry" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      subject: "New Get Quote Enquiry",
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("ENQUIRY ERROR", err);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}
