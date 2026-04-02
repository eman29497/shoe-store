'use client';
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
export default function Admin() {
  const {addProduct} = useCart();
  const router = useRouter();
  const [name,setName] = useState('');
  const [price,setPrice] = useState('');
  const [category,setCategory] = useState('');
  const [image,setImage] = useState('');
  const handleSubmit = (e:React.FormEvent) =>{
    e.preventDefault();
    const newShoe = {
      id:Date.now(),
      name,
      price:Number(price),
      category,
      image,
    };
    addProduct(newShoe);
    alert('Shoe added successfully!');
    router.push('/');
  };
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-lg mt-10">
        <h2 className="text-3xl font-bold text-black mb-2">Add New Product</h2>
        <p className="text-gray-500 mb-8">Fill in the detail to list a new shoes.</p>
        <form 
        onSubmit={handleSubmit}
        className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className='font-bold text-gray-700'>Product Name</label>
            <input 
              type='text'
              value={name}
              onChange={(e)=>setName(e.target.value)}
              placeholder='Nike Air Shoes'
              className="border-2 border-blue-300 p-3 rounded-xl focus:border-blue-400 outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-gray-700">Product Price</label>
            <input 
              type='number'
              value={price}
              onChange={(e)=>setPrice(e.target.value)}
              placeholder='e.g 150' 
              className='border-2 border-blue-300 p-3 rounded-xl focus:border-blue-400 outline-none'
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-gray-700">Product Description</label>
            <input
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
              placeholder="Write some details about products..." 
              className="border-2 border-blue-300 p-3 rounded-xl  focus:border-blue-500 outline-none"
            />
            <input
            type="text"
            value={image}
            onChange={(e)=>setImage(e.target.value)}
            placeholder="/shoe.png"
            className="border-2 border-blue-300 p-3 rounded-xl  focus:border-blue-500 outline-none "
            />
          </div>
          <button 
          type="submit"
          className="bg-sky-500 text-xl text-black p-4 rounded-xl font-bold hover:bg-sky-600 transition mt-4">
            Publish Product
          </button>
        </form>
      </div>
    </div>
  );
}