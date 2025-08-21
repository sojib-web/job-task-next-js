"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { ModeToggle } from "./ModeToggle";
import { useState } from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-blue-500 to-purple-600 dark:bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="text-white dark:text-gray-200 font-bold text-xl hover:text-gray-300 transition"
            >
              MyStore
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/products"
              className="text-white dark:text-gray-200 hover:text-gray-300 transition"
            >
              Products
            </Link>
            {session && (
              <Link
                href="/dashboard/add-product"
                className="text-white dark:text-gray-200 hover:text-gray-300 transition"
              >
                Dashboard
              </Link>
            )}

            <ModeToggle />

            {session ? (
              <>
                <span className="text-white dark:text-gray-200 font-medium">
                  Hi, {session.user.name}
                </span>
                <button
                  onClick={() => signOut()}
                  className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-500 to-purple-600 dark:bg-gray-900 px-4 pt-4 pb-6 space-y-3">
          <Link
            href="/products"
            className="block text-white dark:text-gray-200 hover:text-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          {session && (
            <Link
              href="/dashboard/add-product"
              className="block text-white dark:text-gray-200 hover:text-gray-300 transition"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
          )}

          {session ? (
            <>
              <span className="block text-white dark:text-gray-200 font-medium">
                Hi, {session.user.name}
              </span>
              <button
                onClick={() => signOut()}
                className="w-full px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="block w-full px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          )}

          <div className="pt-2">
            <ModeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
