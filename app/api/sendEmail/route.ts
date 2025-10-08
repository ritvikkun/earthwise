// app/api/sendEmail/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function esc(s: string = "") {
  return s.replace(/[&<>"']/g, (ch) => {
    const map: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[ch];
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const message = typeof body?.message === "string" ? body.message.trim() : "";

    if (!name || !message) {
      return NextResponse.json(
        { ok: false, error: "Please provide your name and a message." },
        { status: 400 }
      );
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const FROM_EMAIL =
      process.env.FROM_EMAIL ?? "EarthWise <onboarding@resend.dev>";
    const TO_EMAIL = process.env.NOTIFY_EMAIL;

    if (!RESEND_API_KEY || !TO_EMAIL) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Server misconfiguration: RESEND_API_KEY or NOTIFY_EMAIL is missing.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    const replyTo =
      email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : undefined;

    const html = `
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#111;">
        <tr>
          <td style="padding:24px;">
            <h2 style="margin:0 0 8px 0;font-size:20px;">New message from ${esc(
              name
            )}</h2>
            <div>Email: ${
              email ? `<a href="mailto:${esc(email)}">${esc(email)}</a>` : "—"
            }</div>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0;" />
            <div style="white-space:pre-wrap;line-height:1.6">${esc(
              message
            )}</div>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 24px;background:#f9fafb;color:#6b7280;font-size:12px;">
            You can reply directly to this email to respond to the sender.
          </td>
        </tr>
      </table>
    `;

    // Build payload and add `reply_to` only if present (cast to any to bypass older typings)
    const payload: any = {
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `New message from ${name} — EarthWise`,
      text: `From: ${name} <${email || "no-email-provided"}>\n\n${message}`,
      html,
    };
    if (replyTo) payload.reply_to = replyTo;

    await resend.emails.send(payload);

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("sendEmail error:", err);
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
