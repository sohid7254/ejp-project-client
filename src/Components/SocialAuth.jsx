"use client";
import useAuth from "@/Context/useAuth";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter, useSearchParams } from "next/navigation"; // ✅ router import

const SocialAuth = () => {
    const { signInGoogle } = useAuth();
    const router = useRouter(); // ✅ router instance
    const searchParams = useSearchParams()
    const redirectPath = searchParams.get("redirect") || "/"

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then((res) => {
                console.log("Google user:", res.user);
                // ✅ login successful হলে home এ redirect
                router.push(redirectPath);
            })
            .catch((err) => {
                console.log("Google login error:", err.message);
            });
    };

    return (
        <div>
            <button onClick={handleGoogleSignIn} type="button" className="w-full border border-gray-300 py-2 rounded-md flex items-center justify-center gap-2 bg-[#ebeef2] hover:bg-gray-50 transition">
                <FcGoogle className="w-5 h-5" />
                <span className="text-sm font-bold text-gray-700">Get Access with Google</span>
            </button>
        </div>
    );
};

export default SocialAuth;
