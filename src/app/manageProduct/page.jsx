"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import ProtectedPage from "@/Hooks/ProtectedPage";
import Link from "next/link";

const ManageProductsPage = () => {
    const [products, setProducts] = useState([]);
    const router = useRouter();

    // ✅ Fetch products from backend
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("https://ejp-project-server.vercel.app/allproducts");
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchProducts();
    }, []);

    // ✅ Delete product
    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this product?")) return;

        try {
            const res = await fetch(`https://ejp-project-server.vercel.app/product/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                setProducts(products.filter((p) => p._id !== id));
                toast.success("Product deleted successfully!");
            } else {
                toast.error("Failed to delete product");
            }
        } catch (err) {
            console.error(err);
            toast.error("Error deleting product");
        }
    };

    return (
        <ProtectedPage>
            <div className="max-w-6xl mx-auto p-6">
                <h2 className="text-2xl font-bold mb-6">Manage Products</h2>

                {/* ✅ Desktop Table */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="min-w-full border border-gray-200 rounded-lg">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left">Title</th>
                                <th className="px-4 py-2 text-left">Price</th>
                                <th className="px-4 py-2 text-left">Date</th>
                                <th className="px-4 py-2 text-left">Priority</th>
                                <th className="px-4 py-2 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product._id} className="border-t hover:bg-gray-50 transition">
                                    <td className="px-4 py-2">{product.title}</td>
                                    <td className="px-4 py-2">${product.price}</td>
                                    <td className="px-4 py-2">{product.date || "N/A"}</td>
                                    <td className="px-4 py-2">{product.priority || "Normal"}</td>
                                    <td className="px-4 py-2 text-center space-x-2">
                                        <Link href={`/products/${product._id}`} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                                            View
                                        </Link>
                                        <button onClick={() => handleDelete(product._id)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* ✅ Mobile Card Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
                    {products.map((product) => (
                        <div key={product._id} className="border rounded-lg p-4 shadow-sm bg-white">
                            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                            <p className="text-gray-600 mb-1">💰 Price: ${product.price}</p>
                            <p className="text-gray-600 mb-1">📅 Date: {product.date || "N/A"}</p>
                            <p className="text-gray-600 mb-3">⚡ Priority: {product.priority || "Normal"}</p>
                            <div className="flex gap-2">
                                <Link href={`/products/${product._id}`} className="flex-1 text-center px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                                    View
                                </Link>
                                <button onClick={() => handleDelete(product._id)} className="flex-1 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ProtectedPage>
    );
};

export default ManageProductsPage;
