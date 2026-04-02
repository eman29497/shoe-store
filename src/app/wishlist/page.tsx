"use client";
import Image from "next/image";
import { useCart } from "../context/CartContext";
export default function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart, isLoggedIn } = useCart();
  if (!isLoggedIn) {
    return <h2 className="p-10 text-center text-xl">Please Login to see your Liked Products.</h2>;
  }
  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-10 text-center">My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500">Aapki wishlist khali hai.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg shadow-sm bg-white">
              <div className="relative h-40 w-full mb-4">
                <Image src={item.image} alt={item.name} fill className="object-contain" />
              </div>
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p className="text-blue-600 font-bold">Rs. {item.price}</p>
              <div className="mt-4 flex flex-col gap-2">
                <button 
                  onClick={() => addToCart(item)}
                  className="bg-sky-500 text-white py-2 rounded hover:bg-sky-600"
                >
                  Add to Cart
                </button>
                <button 
                  onClick={() => removeFromWishlist(item.id)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove Item
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}