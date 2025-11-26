"use client";

import React, { useEffect, useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            })
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    return (
        <div className="p-6">
            {/* Flash Sell Heading */}
            <div className="space-y-3 mb-5">
                <h2 className="text-5xl font-bold text-center text-orange-600 ">Flash Sell</h2>
                <h2 className="text-center text-2xl font-bold text-gray-400">Chose Your Desire Product Now</h2>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((product, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 transition duration-300">
                        {/* Product Image */}
                        <div className="w-full h-48 flex items-center justify-center">
                            <img src={product.image_url} alt={product.title} className="h-full object-cover" />
                        </div>

                        {/* Product Content */}
                        <div className="p-4 flex flex-col justify-between">
                            <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-1">{product.title}</h3>
                            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.short_description}</p>

                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-orange-500 font-extrabold text-lg">${product.price}</span>
                                <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">View Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
