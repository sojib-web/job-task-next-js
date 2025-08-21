// lib/products.js

import clientPromise from "./mongodb";

export async function getProducts() {
  const client = await clientPromise;
  const db = client.db("nextjs-shop");
  const products = await db.collection("products").find({}).toArray();

  return products.map((p) => ({
    id: p._id.toString(),
    name: p.name,
    description: p.description,
    price: p.price,
    image: p.image,
  }));
}
