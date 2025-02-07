import React from "react";

export function Button({ children, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-pink-500 text-white rounded-lg flex items-center justify-center hover:bg-pink-600 transition ${className}`}
    >
      {children}
    </button>
  );
}
