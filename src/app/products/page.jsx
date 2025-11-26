"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState("");
    console.log(products)
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`http://localhost:4000/allproducts?search=${query}`);
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                console.error("Error fetching products:", err);
            }
        };

        fetchProducts();
    }, [query]); // query change হলে আবার fetch হবে

    return (
        <div className="max-w-7xl mx-auto p-6">
            {/* Heading */}
            <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">All Products</h2>

            {/* Search Input */}
            <div className="mb-6 flex justify-center">
                <input type="text" placeholder="Search products by title..." value={query} onChange={(e) => setQuery(e.target.value)} className="w-full md:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300">
                            {/* Product Image */}
                            <div className="w-full h-48 flex items-center justify-center ">
                                <img src={product.image_url} alt={product.title} className="h-full object-cover" />
                            </div>

                            {/* Product Content */}
                            <div className="p-4 flex flex-col justify-between">
                                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">{product.title}</h3>
                                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.short_description}</p>

                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-orange-500 font-extrabold text-lg">${product.price}</span>
                                    <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                                        <Link href={`/products/${product._id}`}>View Details</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No products found...</p>
                )}
            </div>
        </div>
    );
};

export default Page;
