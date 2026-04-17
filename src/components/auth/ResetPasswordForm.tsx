"use client";
import React from 'react';
import { Form, Input, Button } from 'antd';
import { BsLock } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

const ResetPasswordForm = () => {
    const [form] = Form.useForm();
    const router = useRouter();

    const onFinish = (values: any) => {
        console.log('Reset Password success:', values);
        router.push('/login');
    };

    return (
        <div className="w-full">
            <p className="text-gray-500 font-medium mb-8 leading-relaxed">
                Choose a strong password to secure your account.
            </p>

            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
                requiredMark={false}
                className="w-full"
            >
                {/* New Password */}
                <Form.Item
                    name="password"
                    label={<span className="text-sm font-bold text-gray-700 ml-1">New password</span>}
                    rules={[{ required: true, message: 'Please enter a new password' }]}
                    className="mb-6"
                >
                    <Input.Password
                        prefix={<BsLock className="text-gray-400 mr-2" />}
                        placeholder="••••••••"
                        className="h-13 bg-gray-50 border-transparent hover:border-blue-200 focus:border-blue-600 focus:bg-white rounded-2xl px-4 text-base transition-all font-medium placeholder:text-gray-300 custom-password"
                    />
                </Form.Item>

                {/* Confirm Password */}
                <Form.Item
                    name="confirmPassword"
                    label={<span className="text-sm font-bold text-gray-700 ml-1">Confirm new password</span>}
                    dependencies={['password']}
                    rules={[
                        { required: true, message: 'Please confirm your password' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Passwords do not match!'));
                            },
                        }),
                    ]}
                    className="mb-10"
                >
                    <Input.Password
                        prefix={<BsLock className="text-gray-400 mr-2" />}
                        placeholder="••••••••"
                        className="h-13 bg-gray-50 border-transparent hover:border-blue-200 focus:border-blue-600 focus:bg-white rounded-2xl px-4 text-base transition-all font-medium placeholder:text-gray-300 custom-password"
                    />
                </Form.Item>

                <Form.Item className="mb-0">
                    <Button 
                        type="primary" 
                        htmlType="submit" 
                        className="w-full h-14 bg-[#0041FF] hover:bg-[#0036d6]! border-none rounded-2xl text-lg font-bold shadow-xl shadow-blue-600/20 active:scale-98 transition-all"
                    >
                        Confirm New Password
                    </Button>
                </Form.Item>
            </Form>

            <style jsx global>{`
                .h-13 { height: 52px; }
                .ant-input-affix-wrapper:focus, .ant-input-affix-wrapper-focused {
                    box-shadow: 0 0 0 2px rgba(0, 65, 255, 0.1) !important;
                }
            `}</style>
        </div>
    );
};

export default ResetPasswordForm;
