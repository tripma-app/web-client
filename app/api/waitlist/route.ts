import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI as string);

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

    await collection.insertOne({
      email,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Success" }, { status: 201 });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ message: "Server error." }, { status: 500 });
  } finally {
    await client.close();
  }
}