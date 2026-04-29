import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.warn("Supabase credentials not found in .env.local. Simulating success for testing.");
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return NextResponse.json(
        { message: "Feedback received successfully. We'll get back to you soon!" },
        { status: 200 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase
      .from('contacts')
      .insert([
        { name, email, subject, message }
      ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { message: "Failed to send message to database." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Feedback received successfully. We'll get back to you soon!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
