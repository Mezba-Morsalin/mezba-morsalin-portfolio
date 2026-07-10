import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function GET() {
  return Response.json({
    message: "API Working",
  });
}

export async function POST(request) {
  console.log("EMAIL_USER:", process.env.EMAIL_USER);
  console.log("EMAIL_PASS:", process.env.EMAIL_PASS?.length);

  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        {
          status: 400,
        }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Mezba Morsalin Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📩 ${subject}`,
      html: `
      <div style="font-family:Arial,sans-serif;padding:30px;background:#f5f5f5;">
        <div style="max-width:600px;margin:auto;background:#fff;padding:25px;border-radius:12px;box-shadow:0 0 15px rgba(0,0,0,.08);">

          <h2 style="color:#2563eb;">
            📩 New Portfolio Contact
          </h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Subject:</strong> ${subject}</p>

          <hr style="margin:20px 0">

          <p>${message}</p>

        </div>
      </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}