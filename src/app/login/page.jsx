"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-blue-200 to-pink-100 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl w-full max-w-md p-10 flex flex-col items-center">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6 text-center">
          Welcome Back!
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
          Sign in to continue to <span className="font-semibold">MyStore</span>
        </p>

        {/* Google Sign-In Button */}
        <button
          onClick={() => signIn("google")}
          className="flex items-center justify-center gap-3 w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M21.35 11.1H12v2.8h5.35c-.25 1.5-1.5 4.4-5.35 4.4-3.2 0-5.8-2.65-5.8-5.9s2.6-5.9 5.8-5.9c1.85 0 3.1.8 3.8 1.5l2.6-2.5C17.9 3.05 15.2 2 12 2 6.5 2 2 6.5 2 12s4.5 10 10 10c5.8 0 9.65-4.05 9.95-9.25z"
            />
          </svg>
          Sign in with Google
        </button>

        {/* Footer */}
        <p className="mt-6 text-gray-500 dark:text-gray-400 text-sm text-center">
          By signing in, you agree to our{" "}
          <span className="underline cursor-pointer">Terms</span> &{" "}
          <span className="underline cursor-pointer">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}
