import clientPromise from "./mongodb";

export async function getProducts() {
  const client = await clientPromise;
  const db = client.db("nextjs-shop");
  const products = await db.collection("products").find({}).toArray();

  return products.map((p, index) => ({
    _id: p._id.toString(), // keep for DB lookup
    serial: index + 1, // 1, 2, 3 ...
    name: p.name,
    description: p.description,
    price: p.price,
    image: p.image,
  }));
}
