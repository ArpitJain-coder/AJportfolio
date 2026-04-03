import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Use environment variables for real email configuration
    // To make this work, the user needs to set EMAIL_USER and EMAIL_PASS in their .env file
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "arpitjain1402@gmail.com",
        replyTo: email,
        subject: `[Portfolio Contact] ${subject || "New Message from " + name}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    };

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await transporter.sendMail(mailOptions);
        console.log("Email forwarded successfully to arpitjain1402@gmail.com");
    } else {
        console.warn("EMAIL_USER or EMAIL_PASS is not set in your .env file. Skipping actual email send.");
        console.log("Mock Email payload:", mailOptions);
        
        // Simulate network delay for UI behavior even when avoiding send
        await new Promise((resolve) => setTimeout(resolve, 1500));
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
