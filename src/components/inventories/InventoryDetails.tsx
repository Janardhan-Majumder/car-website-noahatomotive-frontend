"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FaStar, FaRegStar, FaCalendarAlt, FaCar, FaMapMarkerAlt, FaRoad, FaCheckCircle } from 'react-icons/fa';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { cn } from '@/lib/utils/cn';

import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Link from 'next/link';

const InventoryDetails = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState('White');

    const product = {
        name: "Products name or title",
        category: "Category",
        status: "In stock",
        rating: 4.8,
        reviews: 245,
        description: "Experience exceptional quality with our premium product, crafted with advanced features and a user-friendly design. Built to enhance your daily workflow with efficiency.",
        specs: [
            { label: "Making year", value: "2026", icon: FaCalendarAlt },
            { label: "Mileage", value: "33012 KM", icon: FaRoad },
            { label: "Model", value: "ASX26", icon: FaCar },
            { label: "Location", value: "New York, USA", icon: FaMapMarkerAlt },
        ],
        colors: [
            { name: 'Red', class: 'bg-[#A60B0B]' },
            { name: 'Green', class: 'bg-[#00B96B]' },
            { name: 'Blue', class: 'bg-[#0047FF]' },
            { name: 'Black', class: 'bg-[#4A4A4A]' },
            { name: 'White', class: 'bg-white border border-gray-200' },
        ],
        images: [
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80\u0026w=1000",
            "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80\u0026w=1000",
            "https://i.pinimg.com/736x/44/b7/ea/44b7ea4c2e217ca797cc1f38a0512a53.jpg",
            "https://i.pinimg.com/1200x/a0/05/47/a00547158278ba197c8680321eb9f704.jpg",
        ]
    };

    const handleQuantity = (type: 'inc' | 'dec') => {
        if (type === 'inc') setQuantity(prev => prev + 1);
        else if (quantity > 1) setQuantity(prev => prev - 1);
    };

    const reviewsData = [
        {
            name: "Imad Wasim",
            date: "May 15, 2024",
            rating: 5,
            comment: "Our app uses a clean, modern typography system designed to enhance readability and create a smooth visual flow. Each font size, weight, and spacing is thoughtfully structured to guide users effortlessly through the interface.",
            verified: true
        },
        {
            name: "Imad Wasim",
            date: "May 10, 2024",
            rating: 4,
            comment: "Our app uses a clean, modern typography system designed to enhance readability and create a smooth visual flow. Each font size, weight, and spacing is thoughtfully structured to guide users effortlessly through the interface.",
            verified: true
        }
    ];

    const tabItems: TabsProps['items'] = [
        {
            key: '1',
            label: 'Description',
            children: (
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed max-w-4xl py-6">
                    <p>
                        Our app uses a clean, modern typography system designed to enhance readability and create a smooth visual flow. Each font size, weight, and spacing is thoughtfully structured to guide users effortlessly through the interface. The typeface balances elegance with clarity, ensuring a professional look while maintaining a friendly and accessible feel across all screens. Our app uses a clean, modern typography system designed to enhance readability.
                    </p>
                    <p>
                        Create a smooth visual flow. Each font size, weight, and spacing is thoughtfully structured to guide users effortlessly through the interface. The typeface balances elegance with clarity, ensuring a professional look while maintaining a friendly and accessible feel across all screens.
                    </p>
                </div>
            ),
        },
        {
            key: '2',
            label: 'Additional info',
            children: (
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed max-w-4xl py-6">
                    <p>
                        Our app uses a clean, modern typography system designed to enhance readability and create a smooth visual flow. Each font size, weight, and spacing is thoughtfully structured to guide users effortlessly through the interface. The typeface balances elegance with clarity, ensuring a professional look while maintaining a friendly and accessible feel across all screens.
                    </p>
                    <p>
                        Create a smooth visual flow. Each font size, weight, and spacing is thoughtfully structured to guide users effortlessly through the interface. The typeface balances elegance with clarity, ensuring a professional look while maintaining a friendly and accessible feel across all screens.
                    </p>
                </div>
            ),
        },
        {
            key: '3',
            label: 'Review',
            children: (
                <div className="space-y-12 py-10">
                    {/* Rating Summary Section */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8 lg:gap-24 max-w-5xl">
                        {/* Left: Main Rating */}
                        <div className="flex flex-col items-center md:items-start space-y-4">
                            <div className="flex items-end gap-2">
                                <span className="text-7xl font-bold text-gray-900 leading-none">4.8</span>
                                <span className="text-3xl text-gray-500 font-medium mb-1">/ 5</span>
                            </div>
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4].map((s) => (
                                    <FaStar key={s} className="text-yellow-400 text-3xl" />
                                ))}
                                <FaRegStar className="text-yellow-400 text-3xl" />
                            </div>
                            <p className="text-2xl text-gray-900 font-medium pt-2">245 reviews</p>
                        </div>

                        {/* Right: Detailed Breakdown */}
                        <div className="flex-1 w-full space-y-4 pt-4 md:pt-0">
                            {[
                                { star: 5, count: 20, percentage: 5 },
                                { star: 4, count: 17, percentage: 85 },
                                { star: 3, count: 7, percentage: 70 },
                                { star: 2, count: 3, percentage: 55 },
                                { star: 1, count: 1, percentage: 40 },
                            ].map((row) => (
                                <div key={row.star} className="flex items-center gap-4 group">
                                    <span className="text-lg font-medium text-gray-600 min-w-[12px]">{row.star}</span>
                                    <div className="flex-1 bg-gray-100 h-3 rounded-full overflow-hidden">
                                        <div
                                            className="bg-yellow-400 h-full rounded-full transition-all duration-700 ease-out"
                                            style={{ width: `${row.star === 5 ? 0 : row.percentage}%` }}
                                        />
                                    </div>
                                    <span className="text-lg font-medium text-gray-600 min-w-[40px] text-right">({row.count < 10 ? `0${row.count}` : row.count})</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Review List Section */}
                    <div className="space-y-8 pt-12 border-t border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900">Review List</h3>
                        <div className="space-y-10">
                            {reviewsData.map((review, idx) => (
                                <div key={idx} className="space-y-4 max-w-4xl">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-full bg-gray-200 shrink-0" />
                                        <div className="flex flex-col">
                                            <h4 className="text-lg font-bold text-gray-900">{review.name}</h4>
                                            <div className="flex items-center gap-1.5 text-[#00B96B] font-medium text-sm">
                                                <FaCheckCircle className="text-sm" />
                                                Verified
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h5 className="text-lg font-bold text-gray-900 italic">Review title write here</h5>
                                        <p className="text-gray-600 leading-relaxed text-lg">
                                            {review.comment}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="space-y-16 lg:space-y-24">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                {/* Left: Gallery Section */}
                <div className="flex-1 space-y-6">
                    <div className="relative aspect-4/3 w-full overflow-hidden rounded-[32px] bg-gray-100 shadow-sm">
                        <Image
                            src={product.images[selectedImage]}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {product.images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedImage(idx)}
                                className={cn(
                                    "relative aspect-square overflow-hidden rounded-2xl border-2 transition-all",
                                    selectedImage === idx ? "border-[#0047FF] ring-2 ring-blue-100" : "border-transparent hover:border-gray-300"
                                )}
                            >
                                <Image
                                    src={img}
                                    alt={`Thumbnail ${idx}`}
                                    fill
                                    className="object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right: Info Section */}
                <div className="flex-1 flex flex-col gap-6 lg:py-2">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <span className="px-5 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 uppercase tracking-wide">
                            {product.category}
                        </span>
                        <span className="px-5 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 uppercase tracking-wide">
                            {product.status}
                        </span>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
                            {product.name}
                        </h1>

                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                                <FaStar className="text-yellow-400 text-xl" />
                                <span className="text-lg font-medium text-gray-900">{product.rating}</span>
                            </div>
                            <span className="text-gray-500 font-medium">( {product.reviews} review )</span>
                        </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-base lg:text-lg max-w-xl">
                        {product.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 py-4 border-y border-gray-100">
                        {product.specs.map((spec, idx) => {
                            const Icon = spec.icon;
                            return (
                                <div key={idx} className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0047FF] group-hover:bg-[#0047FF] group-hover:text-white transition-colors duration-300">
                                        <Icon className="text-lg" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm text-gray-500 font-medium">{spec.label}</span>
                                        <span className="text-base font-semibold text-gray-800">{spec.value}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Color Selection */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 tracking-wide">Select color</h3>
                        <div className="flex flex-wrap gap-3">
                            {product.colors.map((color) => (
                                <button
                                    key={color.name}
                                    onClick={() => setSelectedColor(color.name)}
                                    className={cn(
                                        "px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 border-2",
                                        selectedColor === color.name
                                            ? "border-[#0047FF] text-[#0047FF] bg-blue-50/50"
                                            : "border-transparent text-gray-600 hover:bg-gray-50"
                                    )}
                                >
                                    <span className={cn("w-3 h-3 rounded-full", color.class)} />
                                    {color.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity Selection */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900 tracking-wide">Add products quantity</h3>
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-4 bg-gray-50 p-2 rounded-2xl border border-gray-100">
                                <button
                                    onClick={() => handleQuantity('dec')}
                                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-gray-600 hover:text-red-500 hover:shadow-md transition-all border border-gray-100"
                                >
                                    <FiMinus className="text-xl" />
                                </button>
                                <span className="text-xl font-bold text-gray-900 min-w-[20px] text-center">{quantity}</span>
                                <button
                                    onClick={() => handleQuantity('inc')}
                                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white text-gray-600 hover:text-blue-600 hover:shadow-md transition-all border border-gray-100"
                                >
                                    <FiPlus className="text-xl" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                        <Link href={"/my-cart/billing"} className='w-full md:block hidden'>
                            <button className="h-14 w-full rounded-full bg-[#0047FF] text-white font-bold text-lg hover:bg-[#0038cc] hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-[0.98]">
                                Buy now
                            </button>
                        </Link>
                        <button className="h-14 w-full md:block hidden rounded-full border-2 border-[#0047FF] text-[#0047FF] font-bold text-lg hover:bg-blue-50 transition-all active:scale-[0.98]">
                            Add to cart
                        </button>
                        <button className="h-14 rounded-full border-2 border-[#0047FF] text-[#0047FF] font-bold text-lg hover:bg-blue-50 transition-all active:scale-[0.98]">
                            Message
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Tabs */}
            <div className=" border-gray-100 pt-12 lg:pt-16 inventory-details-tabs">
                <Tabs
                    defaultActiveKey="1"
                    items={tabItems}
                    className="custom-antd-tabs"
                />
            </div>
        </div>
    );
};

export default InventoryDetails; 