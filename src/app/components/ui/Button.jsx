"use client";

export function Button({ children, ...props }) {
  return (
    <button
      className="px-3 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition"
      {...props}
    >
      {children}
    </button>
  );
}
