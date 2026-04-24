"use client";

import React from 'react';
import Container from '@/components/Container';
import AddProductForm from '@/components/products/AddProductForm';
import { useRouter } from 'next/navigation';
import PageHeading from '@/components/ui/PageHeading';

const AddProductPage = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-50/30">
            <Container mClassName='pt-12 pb-24 lg:pt-32 xl:pt-28'>
                {/* Header with Buttons */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
                    <PageHeading title="Add products" backPath="/my-products" />
                    
                    <div className="flex items-center gap-3 lg:gap-4 w-full md:w-auto">
                        <button className="flex-1 md:flex-none h-11 lg:h-12 px-6 lg:px-10 rounded-full bg-[#0047FF] text-white font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 active:scale-[0.98] text-sm lg:text-base">
                            Publish products
                        </button>
                        <button 
                            onClick={() => router.back()}
                            className="flex-1 md:flex-none h-11 lg:h-12 px-6 lg:px-10 rounded-full border border-red-500 text-red-500 font-bold hover:bg-red-50 transition-all active:scale-[0.98] text-sm lg:text-base"
                        >
                            Cancel
                        </button>
                    </div>
                </div>

                {/* Form Content */}
                <AddProductForm />
            </Container>
        </div>
    );
};

export default AddProductPage;
