import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import nodemailer from "nodemailer";
import { waitlistEmailHtml } from "@/app/lib/email-template";

const client = new MongoClient(process.env.MONGODB_URI as string);

const transporter = nodemailer.createTransport({
  host: "mail.privateemail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ message: "Invalid email." }, { status: 400 });
    }

    await client.connect();
    const db = client.db();
    const collection = db.collection("waitlist");

    const existing = await collection.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { message: "You're already on the waitlist!" },
        { status: 409 }
      );
    }

    await collection.insertOne({ email, createdAt: new Date() });

    await transporter.sendMail({
      from: `"Mehdi @ Tripma" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "You're on the Tripma waitlist 🎉",
      html: waitlistEmailHtml(email),
    });

    return NextResponse.json({ message: "Success" }, { status: 201 });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ message: "Server error." }, { status: 500 });
  } finally {
    await client.close();
  }
}