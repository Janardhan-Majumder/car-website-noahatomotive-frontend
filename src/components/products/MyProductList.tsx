"use client";

import React from 'react';
import { Table, Button, Checkbox } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import { cn } from '@/lib/utils/cn';

interface ProductItem {
    key: string;
    no: number;
    name: string;
    image: string;
    createdDate: string;
    price: number;
}

const data: ProductItem[] = Array.from({ length: 10 }).map((_, i) => ({
    key: String(i + 1),
    no: i + 1,
    name: "Products name..",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=100",
    createdDate: "01-01-2025",
    price: 25,
}));

const MyProductList = () => {
    const columns: ColumnsType<ProductItem> = [
        {
            title: 'No.',
            dataIndex: 'no',
            key: 'no',
            width: 72,
            fixed: 'left',
            render: (text) => (
                <div className="flex items-center gap-3">
                    <Checkbox />
                    <span className="font-semibold text-gray-700">{text}</span>
                </div>
            ),
        },
        {
            title: 'Product',
            dataIndex: 'name',
            key: 'product',
            minWidth: 200,
            render: (text, record) => (
                <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                        <Image src={record.image} alt={text} fill className="object-cover" />
                    </div>
                    <span className="font-semibold text-gray-800 line-clamp-1">{text}</span>
                </div>
            ),
        },
        {
            title: 'Created Date',
            dataIndex: 'createdDate',
            key: 'createdDate',
            width: 150,
            responsive: ['md'],
            render: (text) => <span className="text-gray-600 font-medium">{text}</span>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            width: 100,
            render: (text) => <span className="text-gray-800 font-bold">$ {text}</span>,
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center',
            width: 160,
            // fixed: 'right',
            render: () => (
                <Button 
                    type="primary" 
                    className="bg-[#0047FF] hover:bg-blue-700 h-9 lg:h-10 px-4 lg:px-6 rounded-full flex items-center gap-2 font-bold transition-all shadow-md shadow-blue-100"
                >
                    <span className="text-xs lg:text-sm">View details</span>
                    <FiArrowRight className="hidden sm:block" />
                </Button>
            ),
        },
    ];

    return (
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden custom-product-table">
            <Table 
                columns={columns} 
                dataSource={data} 
                scroll={{ x: 800 }}
                pagination={{ 
                    pageSize: 10, 
                    position: ['bottomCenter'],
                    className: "pb-6"
                }}
                className="w-full"
            />
            <style jsx global>{`
                .custom-product-table .ant-table-thead > tr > th {
                    background: #C1D1FF !important;
                    color: #4B5563 !important;
                    font-weight: 600 !important;
                    padding: 12px 16px !important;
                    border-bottom: none !important;
                }
                @media (min-width: 1024px) {
                    .custom-product-table .ant-table-thead > tr > th {
                        padding: 16px 24px !important;
                    }
                }
                .custom-product-table .ant-table-tbody > tr > td {
                    padding: 12px 16px !important;
                    border-bottom: 1px solid #F3F4F6 !important;
                }
                @media (min-width: 1024px) {
                    .custom-product-table .ant-table-tbody > tr > td {
                        padding: 16px 24px !important;
                    }
                }
                .custom-product-table .ant-table-tbody > tr:hover > td {
                    background: #F9FAFB !important;
                }
                .custom-product-table .ant-checkbox-inner {
                    border-radius: 4px;
                    border-color: #D1D5DB;
                }
                .custom-product-table .ant-checkbox-checked .ant-checkbox-inner {
                    background-color: #0047FF;
                    border-color: #0047FF;
                }
                .custom-product-table .ant-table {
                    border-radius: 24px !important;
                }
            `}</style>
        </div>
    );
};

export default MyProductList;
