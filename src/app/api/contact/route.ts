import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory IP rate limiter
const ipMessageCounts = new Map<string, { count: number; last: number }>();
const MESSAGE_LIMIT = 2;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour window

interface Body {
  name?: string;
  email?: string;
  message?: string;
}

function validate(body: Body) {
  if (!body.name || body.name.trim().length === 0) return "Name is required";
  if (!body.email || !/^([^\s@]+)@([^\s@]+)\.[^\s@]+$/.test(body.email))
    return "Valid email is required";
  if (!body.message || body.message.trim().length < 10)
    return "Message must be at least 10 characters";
  return null;
}

export async function POST(req: Request) {
  try {
    // Get IP address from headers (works for Vercel/Next.js API routes)
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    // Rate limit logic
    const now = Date.now();
    const entry = ipMessageCounts.get(ip);
    if (entry) {
      // Reset count if window expired
      if (now - entry.last > WINDOW_MS) {
        ipMessageCounts.set(ip, { count: 1, last: now });
      } else if (entry.count >= MESSAGE_LIMIT) {
        return NextResponse.json(
          {
            error:
              "You have reached the message limit. Please try again later.",
          },
          { status: 429 },
        );
      } else {
        ipMessageCounts.set(ip, { count: entry.count + 1, last: now });
      }
    } else {
      ipMessageCounts.set(ip, { count: 1, last: now });
    }

    const body: Body = await req.json();
    const error = validate(body);
    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    const {
      CONTACT_SMTP_HOST,
      CONTACT_SMTP_PORT,
      CONTACT_SMTP_USER,
      CONTACT_SMTP_PASS,
      CONTACT_TO,
      CONTACT_FROM,
    } = process.env;

    if (
      !CONTACT_SMTP_HOST ||
      !CONTACT_SMTP_PORT ||
      !CONTACT_SMTP_USER ||
      !CONTACT_SMTP_PASS ||
      !CONTACT_TO
    ) {
      return NextResponse.json(
        { error: "Server email configuration missing" },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: CONTACT_SMTP_HOST,
      port: Number(CONTACT_SMTP_PORT),
      // secure: Number(CONTACT_SMTP_PORT) === 465,
      auth: {
        user: CONTACT_SMTP_USER,
        pass: CONTACT_SMTP_PASS,
      },
    });

    const from = CONTACT_SMTP_USER;

    const message = {
      from,
      to: body.email || CONTACT_TO,
      replyTo: body.email,
      subject: `Portfolio Contact: ${body.name}`,
      text: body.message,
      html: `<p><strong>Name:</strong> ${
        body.name
      }</p><p><strong>Email:</strong> ${
        body.email
      }</p><p>${body.message?.replace(/\n/g, "<br/>")}</p>`,
    };

    await transporter.sendMail(message);

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
