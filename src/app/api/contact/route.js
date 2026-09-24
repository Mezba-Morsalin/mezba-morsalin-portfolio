import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function GET() {
  return Response.json({
    message: "API Working",
  });
}

export async function POST(request) {
  console.log("EMAIL_USER:", process.env.EMAIL_USER);
  console.log("EMAIL_PASS length:", process.env.EMAIL_PASS?.length);

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
  background-color: #070d17;
  font-family: Arial, Helvetica, sans-serif;
  color: #e5e7eb;
">

  <div style="
    width: 100%;
    padding: 40px 15px;
    box-sizing: border-box;
    background-color: #070d17;
  ">

    <!-- Main Container -->
    <div style="
      max-width: 650px;
      margin: 0 auto;
      background-color: #0b1422;
      border: 1px solid #164e78;
      border-radius: 20px;
      overflow: hidden;
    ">

      <!-- Header -->
      <div style="
        padding: 30px 35px;
        border-bottom: 1px solid #18324d;
        background: linear-gradient(135deg, #0b1422, #0d1b2d);
      ">

        <div style="
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -0.5px;
        ">
          <span style="color: #ffffff;">Mezba</span>
          <span style="
            background: linear-gradient(90deg, #0ea5e9, #06b6d4);
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
          ">
            .Morsalin
          </span>
        </div>

        <div style="
          margin-top: 6px;
          color: #38bdf8;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
        ">
          FRONTEND DEVELOPER
        </div>

      </div>


      <!-- Content -->
      <div style="padding: 35px;">

        <!-- Title -->
        <div style=" display: inline-block; padding: 7px 13px; border-radius: 999px; background-color: #08263a; border: 1px solid #075985; color: #38bdf8; font-size: 11px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase;
        ">
          ● New Portfolio Contact
        </div>


        <h1 style="
          margin: 20px 0 8px;
          font-size: 28px;
          line-height: 1.3;
          color: #ffffff;
        ">
          You received a new message
        </h1>

        <p style="
          margin: 0 0 30px;
          font-size: 15px;
          line-height: 1.7;
          color: #94a3b8;
        ">
          Someone has reached out through your portfolio website.
        </p>


        <!-- Contact Information -->
        <div style=" background-color: #0e1b2c; border: 1px solid #1e3a56; border-radius: 15px; padding: 22px;
        ">

          <!-- Name -->
          <div style="margin-bottom: 20px;">

            <div style=" color: #38bdf8; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;
            ">
              Name
            </div>

            <div style="
              color: #f8fafc;
              font-size: 16px;
              font-weight: 600;
            ">
              ${name}
            </div>

          </div>


          <!-- Email -->
          <div style="margin-bottom: 20px;">

            <div style=" color: #38bdf8; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;
            ">
              Email
            </div>

            <div style=" color: #f8fafc; font-size: 16px; font-weight: 600; word-break: break-word;
            ">
              ${email}
            </div>

          </div>


          <!-- Subject -->
          <div>

            <div style=" color: #38bdf8; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px;
            ">
              Subject
            </div>

            <div style="
              color: #f8fafc;
              font-size: 16px;
              font-weight: 600;
            ">
              ${subject}
            </div>

          </div>

        </div>


        <!-- Message -->
        <div style="margin-top: 28px;">

          <div style=" color: #38bdf8; font-size: 13px; font-weight: 600; margin-bottom: 10px;
          ">
            MESSAGE
          </div>

          <div style=" background-color: #0e1b2c; border: 1px solid #1e3a56; border-radius: 15px; padding: 22px; color: #cbd5e1; font-size: 15px; line-height: 1.8; white-space: pre-line;
          ">
            ${message}
          </div>

        </div>


        <!-- Reply Button -->
        <div style="
          margin-top: 30px;
          text-align: center;
        ">

          <a
            href="mailto:${email}"
            style=" display: inline-block; padding: 13px 25px; border-radius: 10px; background: linear-gradient(90deg, #2563eb, #06b6d4); color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600;
            "
          >
            Reply to ${name}
          </a>

        </div>

      </div>

      <!-- Footer -->
      <div style=" padding: 25px 35px; border-top: 1px solid #18324d; text-align: center; background-color: #09111d;
      ">

        <div style="
          color: #64748b;
          font-size: 12px;
          line-height: 1.6;
        ">
          This message was sent from
          <span style="color: #38bdf8;">
            Mezba Morsalin's Portfolio
          </span>
          contact form.
        </div>

        <div style="
          margin-top: 12px;
          color: #475569;
          font-size: 11px;
        ">
          © ${new Date().getFullYear()} Mezba Morsalin
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
        message: error.message || "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}