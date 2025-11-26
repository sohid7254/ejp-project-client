"use client";

import ProtectedPage from "@/Hooks/ProtectedPage";
import { useState } from "react";
import { toast } from "react-hot-toast"; // install: npm install react-hot-toast
import Swal from "sweetalert2";

const AddProductForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        short_description: "",
        full_description: "",
        price: "",
        image_url: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("https://ejp-project-server.vercel.app/addProduct", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Product Has saved",
                    showConfirmButton: false,
                    timer: 1500,
                });
                setFormData({
                    title: "",
                    short_description: "",
                    full_description: "",
                    price: "",
                    image_url: "",
                });
            } else {
                toast.error("❌ Failed to add product");
            }
        } catch (err) {
            console.error(err);
            toast.error("❌ Something went wrong");
        }
    };

    return (
        <ProtectedPage>
            <div className="max-w-3xl mx-auto p-6">
                <h2 className="text-2xl font-bold mb-4">Add Product</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="w-full border p-2 rounded" required />
                    <input name="short_description" value={formData.short_description} onChange={handleChange} placeholder="Short description" className="w-full border p-2 rounded" required />
                    <textarea name="full_description" value={formData.full_description} onChange={handleChange} placeholder="Full description" className="w-full border p-2 rounded" required />
                    <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Price" className="w-full border p-2 rounded" required />
                    <input name="image_url" value={formData.image_url} onChange={handleChange} placeholder="Image URL (optional)" className="w-full border p-2 rounded" />

                    <button type="submit" className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
                        Submit
                    </button>
                </form>
            </div>
        </ProtectedPage>
    );
};

export default AddProductForm;
