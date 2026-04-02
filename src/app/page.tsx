"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "./context/CartContext"; 
export default function HomePage() {
  const { products, addToCart, addToWishlist } = useCart();

  return (
    <div className="min-h-screen  bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Our Premium Shoe Collection
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((item: any) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col"
            >
              <div className="relative w-full h-48 mb-4 bg-gray-100 rounded-xl overflow-hidden group">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800 truncate">{item.name}</h2>
                <p className="text-sm text-gray-500 mb-2">{item.category || "Footwear"}</p>
                <p className="text-xl font-bold text-sky-600">${item.price}</p>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => addToCart(item)}
                    className="flex-1 bg-sky-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-sky-600 transition"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => addToWishlist(item)}
                    className="px-3 py-2 bg-pink-50 text-pink-500 rounded-lg hover:bg-pink-100 transition border border-pink-100"
                    title="Add to Wishlist"
                  >
                    ❤️
                  </button>
                </div>
                <Link 
                  href={`/product/${item.id}`}
                  className="block text-center w-full py-2 border border-gray-200 text-gray-600 rounded-lg text-sm hover:bg-gray-50 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        {products.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No products found. Add some from Admin panel!</p>
          </div>
        )}
      </div>
    </div>
  );
}