"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category?: string;
  quantity: number; 
}
interface CartContextType {
  products: Product[];
  cart: Product[];
  wishlist: Product[];
  isLoggedIn: boolean;
  addProduct:(name: string,price:number,category:string,image:string)=>void;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, type: "plus" | "minus") => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: number) => void;
  login: (name: string, email: string) => void;
}
const CartContext = createContext<CartContextType | undefined>(undefined);
export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([
      {
    id: 1,
    name: "Nike Air Max Pulse",
    price: 15000,
    category: "Running",
    image: "/shoe.png", // Apni image ka sahi path check kar lein
    quantity: 1
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: 22000,
    category: "Sports",
    image: "/shoe1.png",
    quantity: 1
  },
  {
    id: 3,
    name: "Puma Classic",
    price: 10000,
    category: "Casual",
    image: "/shoe3.png",
    quantity: 1
  },
  {
    id: 4,
    name: "Nike Air Max",
    price: 11000,
    category: "Running",
    image: "/shoe5.png",
    quantity: 1
  }
]);

  const [cart, setCart] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = (name: string, email: string) => {
    setIsLoggedIn(true);
  };
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const isExist = prev.find((item) => item.id === product.id);
      if (isExist) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    alert("Added to Cart! 🛒");
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, type: "plus" | "minus") => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = type === "plus" ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: newQty > 0 ? newQty : 1 };
        }
        return item;
      })
    );
  };
  const addToWishlist = (product: Product) => {
    setWishlist((prev) => {
      if (!prev.find((item) => item.id === product.id)) {
        return [...prev, product];
      }
      return prev;
    });
    alert("Added to Wishlist! ❤️");
  };
  const removeFromWishlist = (id: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };
  const addProduct = (name:string,price:number,category:string,image:string)=>{
    const newProduct = {
        id:Date.now(),
        name,
        price,
        category,
        image,
        quantity:1
    };
    setProducts((prev) => [...prev,newProduct]);
  }
  return (
    <CartContext.Provider
      value={{
        products, cart, wishlist, isLoggedIn,
        addToCart,addProduct, removeFromCart, updateQuantity,
        addToWishlist, removeFromWishlist, login
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};