import { NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";

// GET: সব প্রোডাক্ট ফেচ করার জন্য
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("nextjs-shop");
    const products = await db.collection("products").find({}).toArray();

    // ObjectId কে string এ convert করলে safer হয়
    const formatted = products.map((p) => ({
      id: p._id.toString(),
      name: p.name,
      description: p.description,
      price: p.price,
      image: p.image,
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

// POST: নতুন প্রোডাক্ট add করার জন্য
export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("nextjs-shop");

    const newProduct = {
      ...body,
      createdAt: new Date(),
    };

    const result = await db.collection("products").insertOne(newProduct);

    return NextResponse.json(
      { message: "Product added", productId: result.insertedId.toString() },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to add product" },
      { status: 500 }
    );
  }
}
