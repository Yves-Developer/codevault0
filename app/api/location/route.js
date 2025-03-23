import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const response = await fetch("https://ipapi.co/json/");

    // Check for rate limit (status 429)
    if (response.status === 429) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Try again later." },
        { status: 429 }
      );
    }

    // Log the response status and content type
    console.log("Response Status:", response.status);
    console.log("Response Content-Type:", response.headers.get("Content-Type"));

    // Check if the response is JSON
    const contentType = response.headers.get("Content-Type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      console.error("Unexpected response:", text);
      throw new Error(`Expected JSON, but got: ${text}`);
    }

    const data = await response.json(); // If it's valid JSON, parse it
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching location:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
