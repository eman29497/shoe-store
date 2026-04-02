"use client";
import React from "react";
import { useCart } from "../context/CartContext";
import Image from "next/image";
export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  if (cart.length === 0) {
    return <h2 className="text-center p-20 text-2xl font-bold">Aapka Cart Khali Hai! 🛒</h2>;
  }
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-contain bg-gray-100 p-2 rounded" />
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-gray-600">${item.price}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-100 px-3 py-1 rounded-full">
              <button onClick={() => updateQuantity(item.id, "minus")} className="font-bold text-xl">-</button>
              <span className="font-medium">{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, "plus")} className="font-bold text-xl">+</button>
            </div>
            <button 
              onClick={() => removeFromCart(item.id)} 
              className="text-red-500 font-semibold hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-10 p-6 bg-gray-50 rounded-xl flex justify-between items-center text-xl font-bold">
        <span>Grand Total:</span>
        <span className="text-sky-600">${total}</span>
      </div>
      <button className="w-full mt-6 bg-sky-500 text-white py-4 rounded-lg font-bold hover:opacity-90">
        Checkout Now
      </button>
    </div>
  );
}