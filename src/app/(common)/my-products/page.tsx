"use client";

import React from 'react';
import Container from '@/components/Container';
import MyProductList from '@/components/products/MyProductList';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import PageHeading from '@/components/ui/PageHeading';
import { FiPlus } from 'react-icons/fi';

const MyProductsPage = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-50/30">
            <Container mClassName='pt-12 pb-24 lg:pt-32 xl:pt-28'>
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 lg:mb-10 gap-4">
                    <PageHeading title="My Products" backPath="/" />
                    <Link href="/my-products/add" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto h-11 lg:h-12 px-6 lg:px-8 rounded-full border-2 border-[#0047FF] text-[#0047FF] font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                            <FiPlus className="sm:hidden" />
                            <span>Add products</span>
                        </button>
                    </Link>
                </div>
                {/* List Table */}
                <MyProductList />
            </Container>
        </div>
    );
};

export default MyProductsPage;