"use client";

import React, { useState } from "react";

const ContactUsPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="max-w-5xl mx-auto p-6">
            {/* Hero Section */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
                <p className="text-lg text-gray-600">Have questions or want to collaborate? We’d love to hear from you.</p>
            </div>

            {/* Contact Form & Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition">
                        Send Message
                    </button>
                </form>

                {/* Company Info */}
                <div className="bg-gray-100 rounded-lg p-6 space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Information</h2>
                    <p className="text-gray-600">📍 Address: Dhaka, Bangladesh</p>
                    <p className="text-gray-600">📞 Phone: +880 1234 567890</p>
                    <p className="text-gray-600">✉️ Email: support@nextbazar.com</p>
                    <p className="text-gray-600">🕒 Working Hours: Sat–Thu, 9:00 AM – 6:00 PM</p>
                </div>
            </div>

            
        </div>
    );
};

export default ContactUsPage;
