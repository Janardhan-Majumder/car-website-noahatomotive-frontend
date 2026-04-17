"use client";
import React from 'react';
import { Form, Input, Button } from 'antd';
import { BsEnvelope } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

const ForgotPasswordForm = () => {
    const [form] = Form.useForm();
    const router = useRouter();

    const onFinish = (values: any) => {
        console.log('Forgot Password request:', values);
        router.push('/verify-otp');
    };

    return (
        <div className="w-full">
            <p className="text-gray-500 font-medium mb-8 leading-relaxed">
                Enter your email address below and we'll send you an OTP code to reset your password.
            </p>

            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
                requiredMark={false}
                className="w-full"
            >
                <Form.Item
                    name="email"
                    label={<span className="text-sm font-bold text-gray-700 ml-1">Email address</span>}
                    rules={[
                        { required: true, message: 'Please enter your email' },
                        { type: 'email', message: 'Please enter a valid email address' }
                    ]}
                    className="mb-10"
                >
                    <Input
                        prefix={<BsEnvelope className="text-gray-400 mr-2" />}
                        placeholder="john@example.com"
                        className="h-13 bg-gray-50 border-transparent hover:border-blue-200 focus:border-blue-600 focus:bg-white rounded-2xl px-4 text-base transition-all font-medium placeholder:text-gray-300"
                    />
                </Form.Item>

                <Form.Item className="mb-0">
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full h-14 bg-[#0041FF] hover:bg-[#0036d6]! border-none rounded-2xl text-lg font-bold shadow-xl shadow-blue-600/20 active:scale-98 transition-all"
                    >
                        Send OTP
                    </Button>
                </Form.Item>
            </Form>

            <style jsx global>{`
                .h-13 { height: 52px; }
            `}</style>
        </div>
    );
};

export default ForgotPasswordForm;
