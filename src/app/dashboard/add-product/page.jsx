// app/dashboard/add-product/page.jsx
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import AddProductForm from "./AddProductForm";

export default async function AddProductPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    // Redirect to login if not authenticated
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold">
          You must be logged in to add products
        </h2>
        <a
          href="/login"
          className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Go to Login
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <AddProductForm />
    </div>
  );
}
