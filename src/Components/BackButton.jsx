"use client";


import { useRouter } from 'next/navigation';
import React from 'react';

const BackButton = () => {
    const router = useRouter()
    // const previousPath = usePreviousRoute()
   
    return (
        <div>
            <button onClick={() => router.back()} className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">← Back</button>
            
        </div>
    );
};

export default BackButton;