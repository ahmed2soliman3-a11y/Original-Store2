import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, phone, city, address } = await req.json();

    const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    console.log("TOKEN:", TOKEN);
    console.log("CHAT_ID:", CHAT_ID);

    if (!TOKEN || !CHAT_ID) {
      return NextResponse.json(
        { error: "Missing env variables" },
        { status: 500 }
      );
    }

    const message = `
📦 طلب جديد
👤 الاسم: ${name}
📞 الهاتف: ${phone}
🏙️ المحافظة: ${city}
📍 العنوان: ${address}
`;

    const res = await fetch(
      `https://api.telegram.org/bot${TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.error("Telegram error:", data);
      return NextResponse.json(
        { error: "Telegram failed", details: data },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json({ error: "Server failed" }, { status: 500 });
  }
}
