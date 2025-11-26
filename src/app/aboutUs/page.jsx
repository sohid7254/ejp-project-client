"use client";

import React from "react";

const AboutUsPage = () => {
    return (
        <div className="max-w-6xl mx-auto p-6">
            {/* Hero Section */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">About NextBazar</h1>
                <p className="text-lg text-gray-600">NextBazar is a modern e-commerce platform designed to make online shopping simple, secure, and enjoyable. We focus on delivering high-quality products with a seamless user experience.</p>
            </div>

            {/* Product Section */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="bg-white shadow rounded-lg p-6 text-center">
                        <h3 className="text-lg font-semibold text-orange-500 mb-2">Electronics</h3>
                        <p className="text-gray-600 text-sm">From smartphones to laptops, NextBazar offers the latest gadgets at affordable prices.</p>
                    </div>
                    <div className="bg-white shadow rounded-lg p-6 text-center">
                        <h3 className="text-lg font-semibold text-orange-500 mb-2">Fashion</h3>
                        <p className="text-gray-600 text-sm">Trendy clothing and accessories that bring style and comfort together for every occasion.</p>
                    </div>
                    <div className="bg-white shadow rounded-lg p-6 text-center">
                        <h3 className="text-lg font-semibold text-orange-500 mb-2">Home & Lifestyle</h3>
                        <p className="text-gray-600 text-sm">Quality home essentials and lifestyle products to make your everyday life easier and better.</p>
                    </div>
                </div>
            </div>

            {/* Company Goal Section */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Goal</h2>
                <div className="bg-white shadow rounded-lg p-6">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        At NextBazar, our goal is to empower customers with a reliable and user-friendly shopping experience. We aim to combine technology, design, and trust to create an e-commerce platform that is scalable, secure, and accessible to everyone. Our vision is to become a trusted name
                        in online shopping by offering products that meet customer needs while maintaining clarity, performance, and innovation.
                    </p>
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gray-100 rounded-lg p-6 text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Get in Touch</h2>
                <p className="text-gray-600 mb-4">Want to know more about NextBazar or collaborate with us? Reach out anytime.</p>
                <a href="/contactUs" className="inline-block px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
                    Contact Us
                </a>
            </div>

            
        </div>
    );
};

export default AboutUsPage;
