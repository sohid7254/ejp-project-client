"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import useAuth from "@/Context/useAuth"; // ✅ Auth context থেকে user ও logOut function আনছি

const Navbar = () => {
    const pathname = usePathname();
    const { user, logOut } = useAuth(); // ✅ context থেকে user ও logOut function
    
    const handleLogout =  () => {
        logOut()
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err.message)
          })
    };

    const links = (
        <>
            <li>
                <Link href="/" className={pathname === "/" ? "underline text-gray-600 px-4 py-1 font-bold" : "text-gray-700 px-4 py-1 font-bold"}>
                    Home
                </Link>
            </li>
            <li>
                <Link href="/about" className={pathname === "/about" ? "underline text-gray-600 px-4 py-1 font-bold" : "text-gray-700 px-4 py-1 font-bold"}>
                    About
                </Link>
            </li>
            <li>
                <Link href="/contact" className={pathname === "/contact" ? "underline text-gray-600 px-4 py-1 font-bold" : "text-gray-700 px-4 py-1 font-bold"}>
                    Contact
                </Link>
            </li>
            <li>
                <Link href="/products" className={pathname === "/products" ? "underline text-gray-600 px-4 py-1 font-bold" : "text-gray-700 px-4 py-1 font-bold"}>
                    All Products
                </Link>
            </li>
            <li>
                <Link href="/addProduct" className={pathname === "/addProduct" ? "underline text-gray-600 px-4 py-1 font-bold" : "text-gray-700 px-4 py-1 font-bold"}>
                    Add Products
                </Link>
            </li>
        </>
    );

    return (
        <div className="sticky top-0 z-50 bg-base-100 shadow-sm">
            <div className="max-w-7xl mx-auto">
                <div className="navbar">
                    {/* Left: Logo + Mobile Dropdown */}
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
                                {links}
                            </ul>
                        </div>

                        {/* Logo */}
                        <div className="ml-3">
                            <Link href={"/"} className="text-xl font-bold bg-linear-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                                NextBazar
                            </Link>
                        </div>
                    </div>

                    {/* Center: Desktop Links */}
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">{links}</ul>
                    </div>

                    {/* Right: Action Buttons */}
                    <div className="navbar-end gap-2">
                        {user ? (
                            <button onClick={handleLogout} className="btn btn-outline btn-error rounded-full px-4 sm:px-6">
                                Log Out
                            </button>
                        ) : (
                            <>
                                <Link href="/login" className="btn btn-outline btn-primary rounded-full px-4 sm:px-6">
                                    Log In
                                </Link>
                                <Link href="/register" className="btn btn-primary rounded-full px-4 sm:px-6 text-white">
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
