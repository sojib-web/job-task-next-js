import { notFound } from "next/navigation";
import { getProducts } from "../../lib/products";

export default async function ProductDetails({ params }) {
  const { id } = params;
  const products = await getProducts();
  const product = products.find((p) => p.id === id);

  if (!product) notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-blue-200 to-pink-100 dark:bg-gray-900 flex justify-center items-center px-4 py-10">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 max-w-2xl w-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold mt-6 text-gray-900 dark:text-white">
          {product.name}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          {product.description}
        </p>
        <p className="text-2xl font-semibold text-blue-600 mt-6">
          ${product.price}
        </p>
      </div>
    </div>
  );
}
