"use client";
import React from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import Link from 'next/link';
import { BsEnvelope, BsLock, BsGoogle, BsFacebook } from 'react-icons/bs';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

// Demo user data — swap this out for a real API call later
const DEMO_USER = {
    id: 'demo-001',
    name: 'John Demo',
    email: 'john@example.com',
    role: 'user' as const,
    isVerified: true,
    isBlocked: false,
    avatar: undefined,
    address: '123 Demo Street, City',
};

const LoginForm = () => {
    const [form] = Form.useForm();
    const router = useRouter();
    const { login } = useAuth();

    const onFinish = (values: any) => {
        // Using demo data — replace with real API call to get token & user
        const demoToken = 'demo-token-' + Date.now();
        login(demoToken, DEMO_USER);
        router.push('/');
    };

    return (
        <div className="w-full">
            {/* Social Login Section */}
            <div className="flex flex-col gap-4 mb-8">
                <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all font-semibold text-gray-700 shadow-xs active:scale-95">
                        <BsGoogle className="text-red-500 text-lg" />
                        <span className="text-sm">Google</span>
                    </button>
                    <button className="flex items-center justify-center gap-3 py-3 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all font-semibold text-gray-700 shadow-xs active:scale-95">
                        <BsFacebook className="text-blue-600 text-lg" />
                        <span className="text-sm">Facebook</span>
                    </button>
                </div>
                <div className="relative flex items-center justify-center my-2">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-100"></div>
                    </div>
                    <span className="relative px-4 bg-white text-xs font-semibold text-gray-400 uppercase tracking-widest">
                        Or continue with
                    </span>
                </div>
            </div>

            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
                requiredMark={false}
                className="w-full space-y-2"
            >
                {/* Email */}
                <Form.Item
                    name="email"
                    label={<span className="text-sm font-bold text-gray-700 ml-1">Email address</span>}
                    rules={[{ required: true, message: 'Please enter your email' }, { type: 'email' }]}
                    className="mb-6"
                >
                    <Input 
                        prefix={<BsEnvelope className="text-gray-400 mr-2" />}
                        placeholder="john@example.com"
                        className="h-13 bg-gray-50 border-transparent hover:border-blue-200 focus:border-blue-600 focus:bg-white rounded-2xl px-4 text-base transition-all font-medium placeholder:text-gray-300"
                    />
                </Form.Item>

                {/* Password */}
                <Form.Item
                    name="password"
                    label={<span className="text-sm font-bold text-gray-700 ml-1">Password</span>}
                    rules={[{ required: true, message: 'Please enter your password' }]}
                    className="mb-4"
                >
                    <Input.Password
                        prefix={<BsLock className="text-gray-400 mr-2" />}
                        placeholder="••••••••"
                        className="h-13 bg-gray-50 border-transparent hover:border-blue-200 focus:border-blue-600 focus:bg-white rounded-2xl px-4 text-base transition-all font-medium placeholder:text-gray-300 custom-password"
                    />
                </Form.Item>

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between py-2 mb-6">
                    <Form.Item name="remember" valuePropName="checked" className="m-0">
                        <Checkbox className="text-sm font-semibold text-gray-600">
                            Remember me
                        </Checkbox>
                    </Form.Item>
                    <Link href="/forgot-password" className="text-sm font-bold text-blue-600 hover:text-blue-700 mb-4">
                        Forgot password?
                    </Link>
                </div>

                {/* Submit */}
                <Form.Item className="mb-6">
                    <Button 
                        type="primary" 
                        htmlType="submit" 
                        className="w-full h-14 bg-[#0041FF] hover:bg-[#0036d6]! border-none rounded-2xl text-lg font-bold shadow-xl shadow-blue-600/20 active:scale-98 transition-all"
                    >
                        Sign In
                    </Button>
                </Form.Item>

                {/* Footer Link */}
                <div className="text-center pb-2">
                    <span className="text-gray-500 font-medium">New member?</span>
                    <Link href="/register" className="ml-1.5 font-bold text-red-500 hover:text-red-600 transition-colors">
                        Create an account
                    </Link>
                </div>
            </Form>

            <style jsx global>{`
                .h-13 { height: 52px; }
                .ant-input-affix-wrapper:focus, .ant-input-affix-wrapper-focused {
                    box-shadow: 0 0 0 2px rgba(0, 65, 255, 0.1) !important;
                }
                .ant-checkbox-checked .ant-checkbox-inner {
                    background-color: #0041FF !important;
                    border-color: #0041FF !important;
                }
                .ant-form-item-explain-error {
                    font-weight: 600 !important;
                    padding-left: 4px !important;
                    font-size: 13px !important;
                }
            `}</style>
        </div>
    );
};

export default LoginForm;
