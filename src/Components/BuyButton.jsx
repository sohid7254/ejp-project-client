"use client";
import React from "react";
import Swal from "sweetalert2";

const BuyButton = ({product}) => {
    const handleBuy = async () => {
        console.log("button clicked")
        const res = await fetch("https://ejp-project-server.vercel.app/buy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: product.title,
                price: product.price,
            }),
        });

        if (res.ok) {
            Swal.fire({
                title: "You Have bought your product",
                icon: "success",
                draggable: true,
            });
        } else {
            alert("Failed to buy product");
        }
    };
    return (
        <div>
            <button onClick={ handleBuy} className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
                Buy Now
            </button>
        </div>
    );
};

export default BuyButton;
