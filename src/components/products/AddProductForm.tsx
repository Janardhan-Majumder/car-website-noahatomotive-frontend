"use client";

import React, { useState } from 'react';
import { Form, Input, Radio, Switch, Button, Upload, Select } from 'antd';
import { FiPlus, FiArrowRight, FiRotateCw, FiX } from 'react-icons/fi';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';

const { TextArea } = Input;

const AddProductForm = () => {
    const [form] = Form.useForm();
    const [stockStatus, setStockStatus] = useState('Unlimited');

    return (
        <Form form={form} layout="vertical" className="space-y-8">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Left Column: Form Details */}
                <div className="w-full lg:w-[60%] space-y-8">
                    {/* Basic Details Section */}
                    <div className="bg-white rounded-[24px] p-6 lg:p-8 border border-gray-100 shadow-sm space-y-6">
                        <h2 className="text-xl font-bold text-gray-900">Basic Details</h2>
                        <Form.Item label={<span className="font-semibold text-gray-700">Product Name</span>} name="name">
                            <Input placeholder="Products name here..." className="h-12 rounded-xl bg-gray-50/50 border-gray-100" />
                        </Form.Item>
                    </div>

                    {/* Pricing Section */}
                    <div className="bg-white rounded-[24px] p-6 lg:p-8 border border-gray-100 shadow-sm space-y-6">
                        <h2 className="text-xl font-bold text-gray-900">Pricing</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Form.Item label={<span className="font-semibold text-gray-700">Product Price</span>} name="price">
                                <Input placeholder="$999.89" className="h-12 rounded-xl bg-gray-50/50 border-gray-100" />
                            </Form.Item>
                            <Form.Item label={<span className="font-semibold text-gray-700">Discount</span>} name="discount">
                                <Input placeholder="% 10" className="h-12 rounded-xl bg-gray-50/50 border-gray-100" />
                            </Form.Item>
                        </div>
                        <Form.Item label={<span className="font-semibold text-gray-700">Tax Included</span>} name="tax">
                            <Radio.Group className="flex gap-8">
                                <Radio value="yes" className="font-semibold">Yes</Radio>
                                <Radio value="no" className="font-semibold">No</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </div>

                    {/* Inventory Section */}
                    <div className="bg-white rounded-[24px] p-6 lg:p-8 border border-gray-100 shadow-sm space-y-6">
                        <h2 className="text-xl font-bold text-gray-900">Inventory</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Form.Item label={<span className="font-semibold text-gray-700">Stock Quantity</span>} name="quantity">
                                <Input placeholder="eg : 02" className="h-12 rounded-xl bg-gray-50/50 border-gray-100" />
                            </Form.Item>
                            <Form.Item label={<span className="font-semibold text-gray-700">Stock Status</span>} name="status">
                                <div className="h-12 px-4 rounded-xl bg-gray-50/50 border border-gray-100 flex items-center justify-between">
                                    <span className="font-semibold text-gray-700">{stockStatus}</span>
                                    <Switch 
                                        defaultChecked 
                                        onChange={(checked) => setStockStatus(checked ? 'Unlimited' : 'Limited')}
                                        className="bg-gray-300 ant-switch-checked:bg-blue-600"
                                    />
                                </div>
                            </Form.Item>
                        </div>
                    </div>

                    {/* Description Section */}
                    <div className="bg-white rounded-[24px] p-6 lg:p-8 border border-gray-100 shadow-sm space-y-6">
                        <h2 className="text-xl font-bold text-gray-900">Product Description</h2>
                        <Form.Item name="description">
                            <TextArea 
                                rows={6} 
                                placeholder="The iPhone 15 delivers cutting-edge performance..." 
                                className="rounded-2xl bg-gray-50/50 border-gray-100 p-4"
                            />
                        </Form.Item>
                    </div>
                </div>

                {/* Right Column: Images & Categories */}
                <div className="w-full lg:w-[40%] space-y-8">
                    {/* Image Upload Section */}
                    <div className="bg-white rounded-[24px] p-6 lg:p-8 border border-gray-100 shadow-sm space-y-6">
                        <h2 className="text-xl font-bold text-gray-900">Upload Product Image</h2>
                        
                        {/* Main Preview */}
                        <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-gray-100 border-2 border-dashed border-gray-200 flex items-center justify-center group">
                            <div className="w-32 h-32 bg-gray-200 rounded-2xl" />
                            <button className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 flex items-center gap-2 font-bold text-sm hover:bg-gray-50 transition-all">
                                <FiRotateCw /> Replace
                            </button>
                        </div>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 group">
                                    <div className="w-full h-full bg-gray-200" />
                                    <button className="absolute top-1.5 right-1.5 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-400 hover:text-red-500 transition-all">
                                        <FiX size={14} />
                                    </button>
                                </div>
                            ))}
                            <div className="aspect-square rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-gray-50 transition-all">
                                <div className="w-7 h-7 lg:w-8 lg:h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                                    <FiPlus />
                                </div>
                                <span className="text-[10px] font-bold text-gray-400">Add Image</span>
                            </div>
                        </div>
                    </div>

                    {/* Categories Section */}
                    <div className="bg-white rounded-[24px] p-6 lg:p-8 border border-gray-100 shadow-sm space-y-6">
                        <h2 className="text-xl font-bold text-gray-900">Categories</h2>
                        <Form.Item label={<span className="font-semibold text-gray-700">Product Categories</span>} name="category">
                            <Select 
                                placeholder="Select your product" 
                                size="large"
                                className="w-full rounded-xl custom-select"
                                suffixIcon={<FiArrowRight className="rotate-90 text-gray-400" />}
                            />
                        </Form.Item>
                    </div>
                </div>
            </div>
            
            <style jsx global>{`
                .custom-select .ant-select-selector {
                    height: 48px !important;
                    border-radius: 12px !important;
                    background-color: #f9fafb !important;
                    border: 1px solid #f3f4f6 !important;
                    display: flex !important;
                    align-items: center !important;
                }
                .ant-radio-wrapper {
                    font-size: 16px !important;
                }
                .ant-switch-checked {
                    background-color: #0047FF !important;
                }
            `}</style>
        </Form>
    );
};

export default AddProductForm;
