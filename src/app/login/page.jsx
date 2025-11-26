import LoginForm from '@/Components/LoginFrom';
import React, { Suspense } from 'react';

const page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <Suspense fallback={<div>Loading...</div>}>
                <LoginForm />
            </Suspense>
        </div>
    );
};

export default page;