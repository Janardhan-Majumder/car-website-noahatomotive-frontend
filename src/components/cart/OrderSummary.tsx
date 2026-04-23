"use client";

import React from 'react';
import Image from 'next/image';
import { Radio } from 'antd';
import { cn } from '@/lib/utils/cn';

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

const OrderSummary = ({ items, onPlaceOrder }: { items: CartItem[], onPlaceOrder?: () => void }) => {
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = 10.00;
    const total = subtotal + shipping;

    return (
        <div className="bg-white rounded-[24px] p-6 lg:p-8 border border-gray-100 shadow-sm space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Pricing</h2>
            
            <div className="space-y-6">
                {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                                <Image 
                                    src={item.image} 
                                    alt={item.name} 
                                    fill 
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-gray-900 font-semibold">{item.name}</span>
                                <span className="text-gray-500 text-sm font-medium">Qty: {item.quantity}</span>
                            </div>
                        </div>
                        <span className="text-gray-900 font-bold">$ {item.price.toFixed(2)}</span>
                    </div>
                ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-gray-100">
                <div className="flex justify-between items-center text-gray-600 font-medium">
                    <span>Subtotal</span>
                    <span className="text-gray-900 font-bold">$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-gray-600 font-medium">
                    <span>Shipping cost</span>
                    <span className="text-gray-900 font-bold">$ {shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-xl font-bold text-gray-900">Total</span>
                    <span className="text-xl font-bold text-gray-900">$ {total.toFixed(2)}</span>
                </div>
            </div>

            <div className="space-y-6 pt-6">
                <h3 className="text-xl font-bold text-gray-900">Payment by</h3>
                <Radio.Group className="w-full flex flex-col gap-4">
                    <div className={cn(
                        "flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer",
                        "hover:border-blue-200 border-gray-100"
                    )}>
                        <Radio value="bank" className="text-gray-900 font-bold text-lg">Bank</Radio>
                        <div className="flex items-center gap-2">
                            <div className="min-w-8 h-6 px-2 bg-gray-50 rounded flex items-center justify-center">
                                <span className="text-[10px] font-black text-blue-800">VISA</span>
                            </div>
                            <div className="min-w-8 h-6 px-2 bg-gray-50 rounded flex items-center justify-center">
                                <span className="text-[10px] font-black text-red-500">MasterCard</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className={cn(
                        "flex items-center p-4 rounded-2xl border transition-all cursor-pointer",
                        "hover:border-blue-200 border-gray-100"
                    )}>
                        <Radio value="cod" className="text-gray-900 font-bold text-lg">Cash on delivery</Radio>
                    </div>
                </Radio.Group>
            </div>

            <button 
                onClick={onPlaceOrder}
                className="w-full h-14 bg-[#0047FF] text-white font-bold text-lg rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 active:scale-[0.98]"
            >
                Place Order
            </button>
        </div>
    );
};

export default OrderSummary;
