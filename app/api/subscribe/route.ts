import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const email = String(form.get("email") || "").trim();

    // Basic validation
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      const url = new URL("/thanks?confirmed=0", req.url);
      return NextResponse.redirect(url, 303); // <-- switch to GET
    }

    const API_KEY = process.env.BEEHIIV_API_KEY!;
    const PUB_ID  = process.env.BEEHIIV_PUBLICATION_ID!;

    const resp = await fetch(
      `https://api.beehiiv.com/v2/publications/${PUB_ID}/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: true,
        }),
      }
    );

    if (!resp.ok) {
      // Optional logging for debugging non-2xx from Beehiiv
      try { console.error("[beehiiv subscribe] status", resp.status, await resp.text()); }
      catch {}
    }

    const url = new URL("/thanks", req.url);
    return NextResponse.redirect(url, 303); // <-- switch to GET
  } catch (e) {
    try { console.error("[subscribe] error", e); } catch {}
    const url = new URL("/thanks?confirmed=0", req.url);
    return NextResponse.redirect(url, 303); // <-- switch to GET
  }
}

// (Optional) Reject non-POST quickly to avoid 405 noise on this route
export async function GET() {
  return new NextResponse("Method Not Allowed", { status: 405 });
}
