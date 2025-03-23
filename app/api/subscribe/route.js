import { NextResponse } from "next/server";
import MailerLite from "@mailerlite/mailerlite-nodejs";

// Replace with your MailerLite API Key
const mailerLite = new MailerLite({
  api_key: process.env.MAILERLITE_API_KEY,
});

export async function POST(req) {
  try {
    const { email, name, country, city, groupId } = await req.json();
    if (!email || !groupId) {
      return NextResponse.json(
        { error: "Email and groupId are required" },
        { status: 400 }
      );
    }

    const response = await mailerLite.subscribers.createOrUpdate({
      email,
      fields: {
        name,
        country,
        city,
      },
      groups: [groupId],
    });
    return NextResponse.json(
      { message: "Subscribed successfully", data: response.data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
