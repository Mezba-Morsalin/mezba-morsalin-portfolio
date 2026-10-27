import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "API Working",
  });
}

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address.",
        },
        { status: 400 }
      );
    }

    // Escape user input before inserting it into HTML
    const escapeHTML = (value) =>
      String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

    const safeName = escapeHTML(name);
    const safeEmail = escapeHTML(email);
    const safeSubject = escapeHTML(subject);
    const safeMessage = escapeHTML(message);

    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error("Email configuration is missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    await transporter.sendMail({
      from: `"Mezba Morsalin Portfolio" <${emailUser}>`,
      to: emailUser,
      replyTo: email,
      subject: `New Portfolio Message: ${String(subject).slice(0, 150)}`,

      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Portfolio Contact</title>
</head>

<body style="
  margin: 0;
  padding: 0;
  background-color: #f3f4f6;
  font-family: Arial, Helvetica, sans-serif;
  color: #171717;
">

  <div style="
    width: 100%;
    padding: 35px 12px;
    box-sizing: border-box;
    background-color: #f3f4f6;
  ">

    <!-- Main Container -->
    <div style="
      max-width: 650px;
      margin: 0 auto;
      background-color: #ffffff;
      border: 1px solid #e5e5e5;
      border-radius: 16px;
      overflow: hidden;
    ">

      <!-- Header -->
      <div style="
        padding: 28px 30px;
        background-color: #111111;
        border-bottom: 1px solid #333333;
      ">

        <div style="
          font-size: 25px;
          font-weight: 700;
          letter-spacing: -0.5px;
          color: #ffffff;
        ">
          Mezba<span style="color: #a3a3a3;">.Morsalin</span>
        </div>

        <div style="
          margin-top: 7px;
          color: #a3a3a3;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
        ">
          FRONTEND DEVELOPER
        </div>

      </div>

      <!-- Content -->
      <div style="padding: 30px;">

        <!-- Badge -->
        <div style="
          display: inline-block;
          padding: 7px 12px;
          border-radius: 999px;
          background-color: #f5f5f5;
          border: 1px solid #e5e5e5;
          color: #404040;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
        ">
          New Portfolio Contact
        </div>

        <h1 style="
          margin: 20px 0 8px;
          font-size: 27px;
          line-height: 1.35;
          color: #171717;
        ">
          You received a new message
        </h1>

        <p style="
          margin: 0 0 28px;
          font-size: 14px;
          line-height: 1.8;
          color: #737373;
        ">
          Someone has reached out through your portfolio website.
          Here are their contact details.
        </p>

        <!-- Contact Information -->
        <div style="
          background-color: #fafafa;
          border: 1px solid #e5e5e5;
          border-radius: 12px;
          padding: 22px;
        ">

          <!-- Name -->
          <div style="margin-bottom: 20px;">
            <div style="
              margin-bottom: 6px;
              color: #737373;
              font-size: 11px;
              font-weight: 700;
              letter-spacing: 1.2px;
              text-transform: uppercase;
            ">
              Name
            </div>

            <div style="
              color: #171717;
              font-size: 15px;
              font-weight: 600;
              overflow-wrap: anywhere;
            ">
              ${safeName}
            </div>
          </div>

          <!-- Email -->
          <div style="margin-bottom: 20px;">
            <div style="
              margin-bottom: 6px;
              color: #737373;
              font-size: 11px;
              font-weight: 700;
              letter-spacing: 1.2px;
              text-transform: uppercase;
            ">
              Email
            </div>

            <div style="
              color: #171717;
              font-size: 15px;
              font-weight: 600;
              overflow-wrap: anywhere;
            ">
              ${safeEmail}
            </div>
          </div>

          <!-- Subject -->
          <div>
            <div style="
              margin-bottom: 6px;
              color: #737373;
              font-size: 11px;
              font-weight: 700;
              letter-spacing: 1.2px;
              text-transform: uppercase;
            ">
              Subject
            </div>

            <div style="
              color: #171717;
              font-size: 15px;
              font-weight: 600;
              overflow-wrap: anywhere;
            ">
              ${safeSubject}
            </div>
          </div>

        </div>

        <!-- Message -->
        <div style="margin-top: 26px;">

          <div style="
            margin-bottom: 10px;
            color: #525252;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 1.5px;
          ">
            MESSAGE
          </div>

          <div style="
            background-color: #fafafa;
            border: 1px solid #e5e5e5;
            border-radius: 12px;
            padding: 20px;
            color: #404040;
            font-size: 14px;
            line-height: 1.8;
            white-space: pre-wrap;
            overflow-wrap: anywhere;
          ">${safeMessage}</div>

        </div>

        <!-- Reply Button -->
        <div style="
          margin-top: 28px;
          text-align: center;
        ">

          <a
            href="mailto:${encodeURIComponent(email)}"
            style="
              display: inline-block;
              padding: 13px 25px;
              border-radius: 999px;
              background-color: #171717;
              color: #ffffff;
              text-decoration: none;
              font-size: 14px;
              font-weight: 600;
            "
          >
            Reply to ${safeName}
          </a>

        </div>

      </div>

      <!-- Footer -->
      <div style="
        padding: 24px 25px;
        border-top: 1px solid #e5e5e5;
        background-color: #fafafa;
        text-align: center;
      ">

        <div style="
          color: #737373;
          font-size: 12px;
          line-height: 1.8;
        ">
          This message was sent from
          <span style="color: #171717; font-weight: 600;">
            Mezba Morsalin's Portfolio
          </span>
          contact form.
        </div>

        <div style="
          margin-top: 10px;
          color: #a3a3a3;
          font-size: 11px;
        ">
          &copy; ${new Date().getFullYear()} Mezba Morsalin
        </div>

      </div>

    </div>

  </div>

</body>
</html>
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
        message: "Unable to send your message. Please try again later.",
      },
      { status: 500 }
    );
  }
}