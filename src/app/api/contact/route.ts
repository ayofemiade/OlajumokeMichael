import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, organization, message, website } = body;

    // 1. Basic Spam Protection: Honeypot check
    // Hidden field 'website' must be empty for genuine human submissions.
    if (website && website.trim() !== "") {
      return NextResponse.json({ success: true, message: "Accepted" }, { status: 200 });
    }

    // 2. Data Validation
    if (!name || typeof name !== "string" || name.trim() === "") {
      return NextResponse.json(
        { success: false, error: "Please provide your name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim() === "") {
      return NextResponse.json(
        { success: false, error: "Please write a message." },
        { status: 400 }
      );
    }

    const recipientEmail = "omichael@ethnoirconsulting.com";
    const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpUser = process.env.SMTP_USER || "omichael@ethnoirconsulting.com";
    const smtpPass = process.env.SMTP_PASS;

    // 3. Dispatch email via Hostinger Native SMTP (or fallback if pass not yet set)
    if (smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465, // true for port 465, false for 587
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"Olajumoke Michael Portfolio" <${smtpUser}>`,
        to: recipientEmail,
        replyTo: email,
        subject: `New Portfolio Message from ${name}${organization ? ` (${organization})` : ""}`,
        text: `Name: ${name}\nEmail: ${email}\nOrganization: ${organization || "N/A"}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #24252B; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #D8D2CA; background-color: #FAF8F4;">
            <h2 style="color: #503847; margin-top: 0;">New Portfolio Inquiry</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Organization:</strong> ${organization || "N/A"}</p>
            <hr style="border: none; border-top: 1px solid #D8D2CA; margin: 20px 0;" />
            <p style="white-space: pre-wrap;"><strong>Message:</strong><br/>${message}</p>
          </div>
        `,
      });
    } else {
      // Local dev fallback logging
      console.log(`[HOSTINGER SMTP DISPATCH] Target: ${recipientEmail}`, {
        name,
        email,
        organization,
        message,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      { success: true, message: "Message dispatched successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("[HOSTINGER SMTP ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        error: "There was a problem sending your message. Please try again or email omichael@ethnoirconsulting.com directly.",
      },
      { status: 500 }
    );
  }
}
