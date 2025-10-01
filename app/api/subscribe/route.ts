import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const email = String(form.get("email") || "").trim();

    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.redirect(new URL("/thanks?confirmed=0", req.url));
    }

    const API_KEY = process.env.BEEHIIV_API_KEY!;
    const PUB_ID  = process.env.BEEHIIV_PUBLICATION_ID!;

    // Call Beehiiv API to create/activate subscription
    const resp = await fetch(`https://api.beehiiv.com/v2/publications/${PUB_ID}/subscriptions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        email,
        reactivate_existing: true,
        send_welcome_email: true
      }),
    });

    // Redirect to thank-you on our site no matter what (we don’t show errors here)
    // The confirmation flow happens inside Beehiiv email.
    if (!resp.ok) {
      // Optional: log for debugging
      console.error("[beehiiv subscribe] failed", await resp.text());
    }

    return NextResponse.redirect(new URL("/thanks", req.url));
  } catch (e) {
    console.error("[subscribe] error", e);
    return NextResponse.redirect(new URL("/thanks?confirmed=0", req.url));
  }
}
