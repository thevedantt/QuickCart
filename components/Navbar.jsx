"use client"
import React from "react";
import { assets, HomeIcon, BoxIcon, BagIcon } from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton, useAuth } from "@clerk/nextjs";

const Navbar = () => {
  const { isSeller, router, user } = useAppContext();
  const { openSignIn } = useClerk();
  const { isSignedIn } = useAuth();

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push('/')}
        src={assets.logo}
        alt="logo"
      />
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-900 transition">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-gray-900 transition">
          Shop
        </Link>
        <Link href="/" className="hover:text-gray-900 transition">
          About Us
        </Link>
        <Link href="/" className="hover:text-gray-900 transition">
          Contact
        </Link>

        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}
      </div>

      <ul className="hidden md:flex items-center gap-4 ">
        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
        {isSignedIn ? (
          <div className="flex items-center gap-4">
            <button onClick={() => router.push('/cart')} className="relative">
              <Image src={assets.cart_icon} alt="cart icon" className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action 
                  label="Home" 
                  labelIcon={<HomeIcon />} 
                  onClick={() => router.push('/')} 
                />
                <UserButton.Action 
                  label="Products" 
                  labelIcon={<BoxIcon />} 
                  onClick={() => router.push('/all-products')} 
                />
                <UserButton.Action 
                  label="My Orders" 
                  labelIcon={<BagIcon />} 
                  onClick={() => router.push('/my-orders')} 
                />
              </UserButton.MenuItems>
            </UserButton>
          </div>
        ) : (
          <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>
        )}
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}
        {isSignedIn ? (
          <div className="flex items-center gap-4">
            <button onClick={() => router.push('/cart')} className="relative">
              <Image src={assets.cart_icon} alt="cart icon" className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Action 
                  label="Home" 
                  labelIcon={<HomeIcon />} 
                  onClick={() => router.push('/')} 
                />
                <UserButton.Action 
                  label="Products" 
                  labelIcon={<BoxIcon />} 
                  onClick={() => router.push('/all-products')} 
                />
                <UserButton.Action 
                  label="My Orders" 
                  labelIcon={<BagIcon />} 
                  onClick={() => router.push('/my-orders')} 
                />
              </UserButton.MenuItems>
            </UserButton>
          </div>
        ) : (
          <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;