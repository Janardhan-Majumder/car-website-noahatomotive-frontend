"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

interface CartListProps {
    items: CartItem[];
    onItemsChange: (items: CartItem[]) => void;
}

const CartList = ({ items, onItemsChange }: CartListProps) => {
    const handleQuantity = (id: number, type: 'inc' | 'dec') => {
        onItemsChange(
            items.map((item) => {
                if (item.id !== id) return item;
                const newQty = type === 'inc' ? item.quantity + 1 : Math.max(1, item.quantity - 1);
                return { ...item, quantity: newQty };
            })
        );
    };

    const handleDelete = (id: number) => {
        onItemsChange(items.filter((item) => item.id !== id));
    };

    return (
        <div className="flex-1 max-w-full overflow-x-auto">
            {/* Column Headers — visible at all sizes */}
            <div className="grid grid-cols-[2fr_1fr_auto_1fr_auto] gap-3 pb-4 border-b border-gray-200 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Subtotal</span>
                <span className="w-10" />
            </div>

            {/* Product Rows */}
            <div className="divide-y divide-gray-100">
                {items.length === 0 && (
                    <div className="py-20 text-center text-gray-400 text-lg font-medium">
                        Your cart is empty.
                    </div>
                )}
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="grid grid-cols-[2fr_1fr_auto_1fr_auto] gap-3 items-center py-5"
                    >
                        {/* Product Info */}
                        <div className="flex items-center gap-3">
                            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                            </div>
                            <span className="text-gray-800 font-semibold text-sm sm:text-base line-clamp-2 min-w-0">
                                {item.name}
                            </span>
                        </div>

                        {/* Price */}
                        <span className="text-gray-700 font-medium text-sm sm:text-base">
                            ${item.price.toFixed(2)}
                        </span>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-1 sm:gap-2">
                            <button
                                onClick={() => handleQuantity(item.id, 'dec')}
                                className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 text-gray-500 transition-all text-xs sm:text-sm shrink-0"
                            >
                                <FiMinus />
                            </button>
                            <span className="w-5 sm:w-6 text-center font-bold text-gray-800 text-sm sm:text-base">
                                {item.quantity}
                            </span>
                            <button
                                onClick={() => handleQuantity(item.id, 'inc')}
                                className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 text-gray-500 transition-all text-xs sm:text-sm shrink-0"
                            >
                                <FiPlus />
                            </button>
                        </div>

                        {/* Subtotal */}
                        <span className="text-gray-800 font-semibold text-sm sm:text-base">
                            ${(item.price * item.quantity).toFixed(2)}
                        </span>

                        {/* Delete */}
                        <button
                            onClick={() => handleDelete(item.id)}
                            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-2 border-red-200 text-red-400 hover:border-red-500 hover:text-red-600 hover:bg-red-50 transition-all shrink-0"
                        >
                            <FiTrash2 className="text-sm sm:text-base" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CartList;
