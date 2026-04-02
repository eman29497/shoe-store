"use client";
import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        <h1 className="text-3xl font-bold text-black mb-2 text-center">Welcome Back</h1>
        <p className="text-gray-500 text-center mb-8 text-sm">Please enter your details to log in</p>
        <form className="space-y-5">
          <div>
            <label className='block text-xl font-semibold mb-2 text-black'>Email Address</label>
            <input 
              type="email" 
              placeholder="Type Email Here..."
              className="w-full p-3 border border-blue-500 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
          </div>
          <div>
            <label className="block text-xl font-semibold mb-2 text-black">Password</label>
            <input 
            type='password'
            placeholder='Type Password Here...'
              className="w-full p-3 border border-blue-500 rounded-xl outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
          </div>
          <button className="w-full bg-sky-500 text-xl text-white py-4 rounded-xl font-bold hover:bg-sky-600 transition mt-4">
            Log In
          </button>
        </form>
        <p className="text-center mt-6 text-gray-600 text-sm">
          Do not have an account?
          <Link href="/signup" className="text-black font-bold hover:underline">
            Sign up for free
          </Link>
        </p>
      </div>
    </div>
  );
}