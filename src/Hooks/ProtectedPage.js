"use client";

import { useContext, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AuthContext } from "@/Context/AuthContext";


const ProtectedPage = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const router = useRouter();
    const pathname = usePathname()

    useEffect(() => {
        if (!loading && !user) {
            router.push(`/login?redirect=${pathname}`); 
        }
    }, [user, loading, router, pathname]);

    if (loading) {
        return <p className="text-center mt-10">Checking authentication...</p>;
    }

    if (!user) {
        return null; 
    }

    return <>{children}</>;
};

export default ProtectedPage;
