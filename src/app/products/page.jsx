import Link from "next/link";
import { getProducts } from "../lib/products";

export default async function ProductHighlights() {
  const products = await getProducts();
  //? console.log(products);

  return (
    <section className="py-16 px-4  bg-gradient-to-br from-purple-200 via-blue-200 to-pink-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900 dark:text-white">
          Product Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col"
            >
              {/* Product Image */}
              <div className="w-full aspect-[4/3] relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Product Content */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm md:text-base">
                    {product.description}
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    ${product.price}
                  </p>
                  <Link
                    href={`/products/${product.id}`}
                    className="w-full block text-center px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white rounded-xl font-semibold transition-all duration-300 shadow"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
