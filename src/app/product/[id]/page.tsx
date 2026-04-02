"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";
export default function ProductDetailPage() {
  const { id } = useParams(); 
  const { products, addToCart, addToWishlist } = useCart();
  const shoe = products.find((item: any) => item.id === Number(id));
  if (!shoe) {
    return (
      <div className="p-20 text-center">
        <h2 className="text-2xl font-bold">Shoe not found!</h2>
      </div>
    );
  }
  return (
    <div className="max-w-4xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="bg-gray-100 rounded-2xl p-10 flex items-center justify-center relative h-[400px]">
        <Image 
          src={shoe.image} 
          alt={shoe.name} 
          fill 
          className="object-contain p-4" 
        />
      </div>
      <div className="flex flex-col md:flex-row gap-8justify-center">
        <h1 className="text-3xl font-bold text-gray-900">{shoe.name}</h1>
        <p className="text-sky-600 font-semibold mt-2">{shoe.category || "Premium Footwear"}</p>
        <p className="text-2xl font-bold mt-4">${shoe.price}</p>
        <p className="text-gray-600 mt-6 leading-relaxed">
          {(shoe as any).description || "A high-performance shoe designed for everyday comfort and style. Built with premium materials for a long-lasting experience."}
        </p>
        <div className="mt-10 space-y-4">
          <button 
            onClick={() => addToCart(shoe)}
            className="w-full bg-sky-500 text-white py-4 rounded-full font-bold hover:bg-sky-600 transition"
          >
            Add to Cart
          </button>
          <button 
            onClick={() => addToWishlist(shoe)}
            className="w-full border border-gray-300 py-4 rounded-full font-bold hover:bg-gray-50 transition"
          >
            Save to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}