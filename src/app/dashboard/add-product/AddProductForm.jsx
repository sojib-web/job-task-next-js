"use client";

import { useState } from "react";

export default function AddProductForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description, price, image }),
      });

      if (res.ok) {
        setToast({
          show: true,
          message: "Product added successfully!",
          type: "success",
        });
        setName("");
        setDescription("");
        setPrice("");
        setImage("");
      } else {
        setToast({
          show: true,
          message: "Failed to add product.",
          type: "error",
        });
      }
    } catch (err) {
      setToast({ show: true, message: "Something went wrong.", type: "error" });
    }

    setLoading(false);

    // Hide toast after 3 seconds
    setTimeout(() => setToast({ ...toast, show: false }), 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 p-4 relative">
      {/* Toast Notification */}
      {toast.show && (
        <div
          className={`absolute top-6 right-6 px-4 py-3 rounded-lg shadow-lg text-white font-semibold transition-all ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {toast.message}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-lg flex flex-col gap-5 transform transition hover:scale-[1.02]"
      >
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-4">
          Add New Product
        </h2>

        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition"
          required
        />

        <textarea
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition"
          rows={4}
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition"
          required
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-xl shadow-lg hover:from-purple-600 hover:to-blue-500 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
        >
          {loading && (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          )}
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
