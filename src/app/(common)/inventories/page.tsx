"use client";
import React, { useState } from 'react';
import Container from '@/components/Container';
import FilterSidebar from '@/components/inventories/FilterSidebar';
import ProductCard from '@/components/ui/ProductCard';
import { Select, Drawer, Button, Breadcrumb } from 'antd';
import { BsSliders } from 'react-icons/bs';
import { GoHome } from 'react-icons/go';
import Link from 'next/link';

const InventoriesPage = () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white">
            {/* The Navbar from layout covers the absolute top, so layout handles it. 
                We add slight top padding to space out the content nicely below navigation. */}
            <Container mClassName='pt-8 lg:pt-32 xl:pt-24'>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

                    {/* Left Sidebar (Desktop Only) */}
                    <div className="hidden lg:block w-full lg:w-[280px] xl:w-[320px] shrink-0 sticky top-28">
                        <FilterSidebar />
                    </div>

                    {/* Mobile Filter Drawer */}
                    <Drawer
                        title={<span className="font-bold text-gray-800 text-lg">Filters</span>}
                        placement="left"
                        onClose={() => setMobileFiltersOpen(false)}
                        open={mobileFiltersOpen}
                        className="lg:hidden"
                        width={320}
                        styles={{ body: { padding: '1rem' } }}
                    >
                        <FilterSidebar />
                    </Drawer>

                    {/* Right Content */}
                    <div className="flex-1 flex flex-col w-full">
                        {/* Header Section */}
                        <div className="flex flex-col gap-5 mb-8">
                            <div className="flex justify-between">
                                <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">Products</h1>

                                {/* Breadcrumb Navigation */}
                                <Breadcrumb
                                    className="mb-6 text-sm hidden lg:block"
                                    items={[
                                        {
                                            title: <Link href={'/'}><span className="flex items-center gap-1.5"><GoHome className="text-base" /> Home</span></Link>,
                                        },
                                        {
                                            title: 'Inventories',
                                        },
                                    ]}
                                />
                                {/* Mobile Filter Toggle Button */}
                                <Button
                                    type="default"
                                    icon={<BsSliders className="text-base" />}
                                    className="lg:hidden! flex items-center justify-center font-medium rounded-full px-5 py-5 border-gray-300"
                                    onClick={() => setMobileFiltersOpen(true)}
                                >
                                    Filters
                                </Button>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-6 justify-between w-full">
                                {/* Search Bar */}
                                <div className="relative w-full md:max-w-[500px]">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <svg className="w-[1.1rem] h-[1.1rem] text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Search content here"
                                        className="w-full pl-11 pr-5 py-3 bg-white border border-[#A6C0FE] rounded-full focus:outline-none focus:border-[#739BFE] focus:ring-1 focus:ring-[#739BFE] shadow-sm text-gray-800 transition-colors placeholder-gray-400 font-medium"
                                    />
                                </div>

                                {/* Controls */}
                                <div className="flex items-center gap-6 sm:gap-8 w-full md:w-auto justify-between md:justify-end bg-white">
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-semibold text-gray-700">Show</span>
                                        <Select
                                            defaultValue="20"
                                            options={[{ value: '10', label: '10' }, { value: '20', label: '20' }, { value: '50', label: '50' }]}
                                            className="w-20"
                                            size="large"
                                        />
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm font-semibold text-gray-700">Sort by</span>
                                        <Select
                                            defaultValue="Default"
                                            options={[{ value: 'Default', label: 'Default' }, { value: 'Price', label: 'Price' }, { value: 'Latest', label: 'Latest' }]}
                                            className="w-[120px]"
                                            size="large"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
                            {Array.from({ length: 12 }).map((_, index) => (
                                <ProductCard data={{ images: ["https://i.pinimg.com/736x/10/66/fd/1066fd19301e0f76d75779766b565055.jpg"] }} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default InventoriesPage;