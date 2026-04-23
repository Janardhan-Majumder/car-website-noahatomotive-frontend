"use client";

import React from 'react';
import Link from 'next/link';

interface CartItem {
    id: number;
    price: number;
    quantity: number;
}

const CartSummary = ({ items }: { items: CartItem[] }) => {
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const delivery = items.length > 0 ? 10.00 : 0;
    const processingFee = items.length > 0 ? 2.50 : 0;
    const total = subtotal;
    const grandTotal = subtotal + delivery + processingFee;

    return (
        <div className="bg-white rounded-[24px] border border-gray-100 shadow-sm p-6 lg:p-8 space-y-6 min-w-[280px]">
            <h2 className="text-xl font-bold text-gray-900">Summary</h2>

            <div className="space-y-4 py-4 border-y border-gray-100">
                <div className="flex justify-between items-center text-gray-600 font-medium">
                    <span>Subtotal</span>
                    <span className="text-gray-900 font-semibold">$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-gray-600 font-medium">
                    <span>Delivery charge</span>
                    <span className="text-gray-900 font-semibold">$ {delivery.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-gray-600 font-medium">
                    <span>Other processing fee</span>
                    <span className="text-gray-900 font-semibold">$ {processingFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-gray-600 font-medium">
                    <span>Total</span>
                    <span className="text-gray-900 font-semibold">$ {total.toFixed(2)}</span>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">Grand total</span>
                <span className="text-2xl font-bold text-gray-900">$ {grandTotal.toFixed(2)}</span>
            </div>

            <Link href="/my-cart/billing" className="block">
                <button className="w-full h-12 bg-[#0047FF] text-white font-bold text-base rounded-full hover:bg-blue-700 transition-all shadow-md shadow-blue-100 active:scale-[0.98]">
                    Proceed to checkout
                </button>
            </Link>
        </div>
    );
};

export default CartSummary;
