import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI as string);

export async function GET() {
  try {
    await client.connect();
    const db = client.db();
    const count = await db.collection("waitlist").countDocuments();
    return NextResponse.json({ count }, { status: 200 });
  } catch (err) {
    console.error("Count error:", err);
    return NextResponse.json({ count: 0 }, { status: 500 });
  } finally {
    await client.close();
  }
}