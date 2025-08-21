"use client";

import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-white text-xl font-bold mb-2">MyStore</h3>
          <p className="text-gray-400">
            Your one-stop shop for amazing products. Quality and service
            guaranteed.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <ul>
            <li className="mb-1 hover:text-white transition">
              <a href="/">Home</a>
            </li>
            <li className="mb-1 hover:text-white transition">
              <a href="/products">Products</a>
            </li>
            <li className="mb-1 hover:text-white transition">
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <p>Email: alisojib295@gmail.com</p>
          <p>Phone: 01743191397</p>
          <div className="flex space-x-4 mt-3 text-xl">
            <a
              href="https://www.linkedin.com/in/md-sojib-ali/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/sojib-web"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/sojib.ahmed.71271466"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MyStore. All rights reserved.
      </div>
    </footer>
  );
}
