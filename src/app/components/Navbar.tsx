import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="flex flex-wrap justify-between items-center px-4 py-3 bg-sky-500">
            <div className="text-3xl font-bold text-black  ">ShoeStore</div>
            <div className="flex gap-6 font-medium text-black text-2xl">
                <Link href='/' className="hover:text-white transition hover:underline">Home</Link>
                <Link href='/cart' className="hover:text-white transition hover:underline">Cart</Link>
                <Link href='/wishlist' className="hover:text-white transition hover:underline">WishList</Link>
                <Link href='/admin' className="hover:text-white transition hover:underline">Admin</Link>
            </div>
            <Link href='/login' className="bg-white w-30 text-black px-10 hover:bg-gray-400 py-2 rounded-full font-semibold transition">Login</Link>
            </nav>
        
    )
}