import React from 'react';
import { Form, Input, Checkbox, FormInstance } from 'antd';

interface BillingFormProps {
    form: FormInstance;
    onFinish: (values: any) => void;
}

const BillingForm = ({ form, onFinish }: BillingFormProps) => {
    return (
        <div className="bg-white rounded-[24px] p-6 lg:p-10 border border-gray-100 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Billing Details</h2>
            
            <Form 
                form={form} 
                onFinish={onFinish}
                layout="vertical" 
                className="space-y-4"
            >
                <Form.Item 
                    label={<span className="text-base font-semibold text-gray-700">Your Name<span className="text-red-500 ml-1">*</span></span>}
                    name="name"
                    rules={[{ required: true, message: 'Please enter your name' }]}
                >
                    <Input placeholder="Write your name here" className="h-12 rounded-xl border-gray-200" />
                </Form.Item>

                <Form.Item 
                    label={<span className="text-base font-semibold text-gray-700">Email address<span className="text-red-500 ml-1">*</span></span>}
                    name="email"
                    rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
                >
                    <Input placeholder="Write your email here" className="h-12 rounded-xl border-gray-200" />
                </Form.Item>

                <Form.Item 
                    label={<span className="text-base font-semibold text-gray-700">Phone no<span className="text-red-500 ml-1">*</span></span>}
                    name="phone"
                    rules={[{ required: true, message: 'Please enter your phone number' }]}
                >
                    <Input placeholder="Write your phone number here" className="h-12 rounded-xl border-gray-200" />
                </Form.Item>

                <Form.Item 
                    label={<span className="text-base font-semibold text-gray-700">Town/city<span className="text-red-500 ml-1">*</span></span>}
                    name="city"
                    rules={[{ required: true, message: 'Please enter your town/city' }]}
                >
                    <Input placeholder="Write your town/city here" className="h-12 rounded-xl border-gray-200" />
                </Form.Item>

                <Form.Item 
                    label={<span className="text-base font-semibold text-gray-700">Street address<span className="text-red-500 ml-1">*</span></span>}
                    name="street"
                    rules={[{ required: true, message: 'Please enter your street address' }]}
                >
                    <Input placeholder="Write your street address here" className="h-12 rounded-xl border-gray-200" />
                </Form.Item>

                <Form.Item 
                    label={<span className="text-base font-semibold text-gray-700">House address<span className="text-red-500 ml-1">*</span></span>}
                    name="house"
                    rules={[{ required: true, message: 'Please enter your house address' }]}
                >
                    <Input placeholder="Write your house address here" className="h-12 rounded-xl border-gray-200" />
                </Form.Item>

                <Form.Item 
                    label={<span className="text-base font-semibold text-gray-700">Apartment, floor<span className="text-red-500 ml-1">*</span></span>}
                    name="apartment"
                    rules={[{ required: true, message: 'Please enter your apartment/floor' }]}
                >
                    <Input placeholder="Write your apartment or floor here" className="h-12 rounded-xl border-gray-200" />
                </Form.Item>

                <div className="pt-4">
                    <Checkbox className="text-gray-600 font-medium text-sm">
                        Save this information for faster check-out next time
                    </Checkbox>
                </div>
            </Form>
        </div>
    );
};

export default BillingForm;
