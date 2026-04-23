"use client";

import Image from 'next/image';
import { cn } from '@/lib/utils/cn';
import { Tag, Modal, Form, Input, Rate } from 'antd';
import { useState } from 'react';

type OrderStatus = 'In progress' | 'Packed' | 'Handover' | 'Complete';

interface OrderItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
    status: OrderStatus;
}

const statusConfig: Record<OrderStatus, { color: string; tagColor: string }> = {
    'In progress': { color: 'text-orange-500', tagColor: 'orange' },
    'Packed': { color: 'text-blue-500', tagColor: 'blue' },
    'Handover': { color: 'text-purple-500', tagColor: 'purple' },
    'Complete': { color: 'text-green-600', tagColor: 'green' },
};

const FeedbackModal = ({
    open,
    onClose,
    productName,
}: {
    open: boolean;
    onClose: () => void;
    productName: string;
}) => {
    const [form] = Form.useForm();

    const handleSubmit = (values: any) => {
        console.log('Feedback submitted:', { product: productName, ...values });
        form.resetFields();
        onClose();
    };

    const handleCancel = () => {
        form.resetFields();
        onClose();
    };

    return (
        <Modal
            open={open}
            onCancel={handleCancel}
            footer={null}
            centered
            width={480}
            className="feedback-modal"
            closable={false}
        >
            <div className="py-4 px-2">
                {/* Header */}
                <div className="text-center mb-6 space-y-2">
                    <h2 className="text-2xl font-bold text-gray-900">Feedback</h2>
                    <p className="text-gray-500 text-sm">Every insight you share makes us stronger.</p>
                </div>

                {/* Star Rating & Form */}
                <Form form={form} onFinish={handleSubmit} layout="vertical" className="w-full space-y-4">
                    <Form.Item name="rating" initialValue={4} className="!mb-4">
                        <div className="flex justify-center">
                            <Rate style={{ fontSize: 40 }} className="text-yellow-400" />
                        </div>
                    </Form.Item>

                        <Form.Item
                            label={<span className="text-sm font-semibold text-gray-700">Your Name</span>}
                            name="name"
                            rules={[{ required: true, message: 'Please enter your name' }]}
                        >
                            <Input
                                placeholder="Write your name here"
                                className="h-11 rounded-xl border-gray-200"
                            />
                        </Form.Item>

                        <Form.Item
                            label={<span className="text-sm font-semibold text-gray-700">Email address</span>}
                            name="email"
                            rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
                        >
                            <Input
                                placeholder="Write your email here"
                                className="h-11 rounded-xl border-gray-200"
                            />
                        </Form.Item>

                        <Form.Item
                            label={<span className="text-sm font-semibold text-gray-700">Write your comments</span>}
                            name="comment"
                            rules={[{ required: true, message: 'Please write your comments' }]}
                        >
                            <Input.TextArea
                                placeholder="Write your name here"
                                rows={5}
                                className="rounded-xl border-gray-200 resize-none"
                            />
                        </Form.Item>

                        {/* Buttons */}
                        <div className="flex gap-4 pt-2">
                            <button
                                type="submit"
                                className="flex-1 h-11 bg-[#00B96B] text-white font-bold rounded-xl hover:bg-green-600 transition-all active:scale-[0.98]"
                            >
                                Submit
                            </button>
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="flex-1 h-11 border-2 border-red-400 text-red-500 font-bold rounded-xl hover:bg-red-50 transition-all active:scale-[0.98]"
                            >
                                Cancel
                            </button>
                        </div>
                    </Form>
            </div>
        </Modal>
    );
};

const OrderProgressList = ({ orders }: { orders: OrderItem[] }) => {
    const [feedbackOpen, setFeedbackOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState('');

    const handleAccept = (productName: string) => {
        setSelectedProduct(productName);
        setFeedbackOpen(true);
    };

    return (
        <div className="max-w-full overflow-x-auto">
            {/* Column Headers */}
            <div className="grid grid-cols-[2fr_1fr_auto_1.5fr_auto] gap-4 pb-4 border-b border-gray-200 text-sm font-semibold text-gray-500 uppercase tracking-wide min-w-[520px]">
                <span>Product</span>
                <span>Price</span>
                <span className="min-w-[60px]">Quantity</span>
                <span>Status</span>
                <span className="min-w-[100px] text-right">Action</span>
            </div>

            {/* Order Rows */}
            <div className="space-y-3 pt-3 min-w-[520px]">
                {orders.map((order) => {
                    const isComplete = order.status === 'Complete';
                    const { tagColor } = statusConfig[order.status];
                    return (
                        <div
                            key={order.id}
                            className="grid grid-cols-[2fr_1fr_auto_1.5fr_auto] gap-4 items-center p-4 rounded-2xl border border-gray-100 bg-white hover:shadow-sm transition-shadow"
                        >
                            {/* Product */}
                            <div className="flex items-center gap-3">
                                <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                                    <Image src={order.image} alt={order.name} fill className="object-cover" />
                                </div>
                                <span className="text-gray-800 font-semibold text-sm sm:text-base line-clamp-2">
                                    {order.name}
                                </span>
                            </div>

                            {/* Price */}
                            <span className="text-gray-700 font-medium text-sm sm:text-base">
                                $ {order.price.toFixed(2)}
                            </span>

                            {/* Quantity */}
                            <span className="text-gray-700 font-medium text-sm sm:text-base min-w-[60px]">
                                {String(order.quantity).padStart(2, '0')}
                            </span>

                            {/* Status */}
                            <div className='text-center'>
                                <Tag color={tagColor} className="font-semibold text-sm px-3 py-1 rounded-full w-fit">
                                    {order.status}
                                </Tag>
                            </div>

                            {/* Accept Button */}
                            <button
                                disabled={!isComplete}
                                onClick={() => isComplete && handleAccept(order.name)}
                                className={cn(
                                    "min-w-[100px] h-10 rounded-xl text-sm font-bold transition-all px-4",
                                    isComplete
                                        ? "bg-[#00B96B] text-white hover:bg-green-600 shadow-sm shadow-green-100 active:scale-[0.98] cursor-pointer"
                                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                )}
                            >
                                Accept
                            </button>
                        </div>
                    );
                })}
            </div>

            {/* Feedback Modal */}
            <FeedbackModal
                open={feedbackOpen}
                onClose={() => setFeedbackOpen(false)}
                productName={selectedProduct}
            />
        </div>
    );
};

export default OrderProgressList;
