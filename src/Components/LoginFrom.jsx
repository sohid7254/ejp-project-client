"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import useAuth from "@/Context/useAuth";
import SocialAuth from "@/Components/SocialAuth";

const LoginForm = () => {
    const { signInUser } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();
    const searchParams = useSearchParams();
    const redirectPath = searchParams.get("redirect") || "/";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const result = await signInUser(email, password);
            router.push(redirectPath);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
            <p className="text-gray-500 mb-6">Log in to continue</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button type="submit" disabled={loading} className="w-full bg-orange-400 text-white py-2 rounded-md font-semibold hover:bg-orange-500 transition disabled:opacity-50">
                    {loading ? "Logging in..." : "Log In"}
                </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-6">
                Don’t have an account?{" "}
                <Link href="/register" className="text-orange-500 font-medium hover:underline">
                    Register
                </Link>
            </p>
            <div className="mt-4">
                <SocialAuth />
            </div>
        </div>
    );
};

export default LoginForm;
