"use client";
import React from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import { BsEnvelope, BsLock, BsPerson, BsPhone, BsGeoAlt } from 'react-icons/bs';

const RegisterForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Register success:', values);
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
            requiredMark={false}
            className="w-full space-y-1"
        >
            {/* Name */}
            <Form.Item
                name="name"
                label={<span className="text-sm font-bold text-gray-700 ml-1">Full name</span>}
                rules={[{ required: true, message: 'Please enter your name' }]}
                className="mb-4"
            >
                <Input 
                    prefix={<BsPerson className="text-gray-400 mr-2" />}
                    placeholder="John Doe"
                    className="h-12 bg-gray-50 border-transparent hover:border-blue-200 focus:border-blue-600 focus:bg-white rounded-2xl px-4 text-base transition-all font-medium placeholder:text-gray-300"
                />
            </Form.Item>

            {/* Email */}
            <Form.Item
                name="email"
                label={<span className="text-sm font-bold text-gray-700 ml-1">Email address</span>}
                rules={[{ required: true, message: 'Please enter your email' }, { type: 'email' }]}
                className="mb-4"
            >
                <Input 
                    prefix={<BsEnvelope className="text-gray-400 mr-2" />}
                    placeholder="john@example.com"
                    className="h-12 bg-gray-50 border-transparent hover:border-blue-200 focus:border-blue-600 focus:bg-white rounded-2xl px-4 text-base transition-all font-medium placeholder:text-gray-300"
                />
            </Form.Item>

            {/* Phone */}
            <Form.Item
                name="phone"
                label={<span className="text-sm font-bold text-gray-700 ml-1">Phone number</span>}
                rules={[{ required: true, message: 'Please enter your phone number' }]}
                className="mb-4"
            >
                <Input 
                    prefix={<BsPhone className="text-gray-400 mr-2" />}
                    placeholder="+1 (555) 000-0000"
                    className="h-12 bg-gray-50 border-transparent hover:border-blue-200 focus:border-blue-600 focus:bg-white rounded-2xl px-4 text-base transition-all font-medium placeholder:text-gray-300"
                />
            </Form.Item>

            {/* Address */}
            <Form.Item
                name="address"
                label={<span className="text-sm font-bold text-gray-700 ml-1">Address</span>}
                rules={[{ required: true, message: 'Please enter your address' }]}
                className="mb-4"
            >
                <Input 
                    prefix={<BsGeoAlt className="text-gray-400 mr-2" />}
                    placeholder="123 Street, City, Country"
                    className="h-12 bg-gray-50 border-transparent hover:border-blue-200 focus:border-blue-600 focus:bg-white rounded-2xl px-4 text-base transition-all font-medium placeholder:text-gray-300"
                />
            </Form.Item>

            {/* Password */}
            <Form.Item
                name="password"
                label={<span className="text-sm font-bold text-gray-700 ml-1">Password</span>}
                rules={[{ required: true, message: 'Create a password' }]}
                className="mb-8"
            >
                <Input.Password
                    prefix={<BsLock className="text-gray-400 mr-2" />}
                    placeholder="••••••••"
                    className="h-12 bg-gray-50 border-transparent hover:border-blue-200 focus:border-blue-600 focus:bg-white rounded-2xl px-4 text-base transition-all font-medium placeholder:text-gray-300 custom-password"
                />
            </Form.Item>

            {/* Submit */}
            <Form.Item className="mb-6">
                <Button 
                    type="primary" 
                    htmlType="submit" 
                    className="w-full h-14 bg-[#0041FF] hover:bg-[#0036d6]! border-none rounded-2xl text-lg font-bold shadow-xl shadow-blue-600/20 active:scale-98 transition-all"
                >
                    Create Account
                </Button>
            </Form.Item>

            {/* Footer Link */}
            <div className="text-center pt-2 pb-2">
                <span className="text-gray-500 font-medium">Already a member?</span>
                <Link href="/login" className="ml-1.5 font-bold text-red-500 hover:text-red-600 transition-colors border-b-2 border-transparent hover:border-red-600 pb-0.5">
                    Sign In
                </Link>
            </div>

            <style jsx global>{`
                .ant-input-affix-wrapper:focus, .ant-input-affix-wrapper-focused {
                    box-shadow: 0 0 0 2px rgba(0, 65, 255, 0.1) !important;
                }
                .ant-form-item-explain-error {
                    font-weight: 600 !important;
                    padding-left: 4px !important;
                    font-size: 13px !important;
                }
            `}</style>
        </Form>
    );
};

export default RegisterForm;
