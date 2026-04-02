import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-sky-500 text-gray-700 py-8 px-6 mt-8 border-t">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold tracking-tighter uppercase">
          Shoe Store
        </div>
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-sky-500 transition">Home</Link>
          <Link href="/cart" className="hover:text-sky-500 transition">Cart</Link>
          <Link href="/wishlist" className="hover:text-sky-500 transition">Wishlist</Link>
          <Link href="/admin" className="hover:text-sky-500 transition">Admin</Link>
        </div>
        <div className="text-xs text-gray-500">
          © 2026 Shoe Store. Built with ❤️
        </div>
      </div>
    </footer>
  );
}