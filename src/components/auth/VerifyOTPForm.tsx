"use client";
import React from 'react';
import { Form, Input, Button } from 'antd';
import { useRouter } from 'next/navigation';

const VerifyOTPForm = () => {
    const [form] = Form.useForm();
    const router = useRouter(); 

    const onFinish = (values: any) => {
        const otp = Object.values(values).join('');
        console.log('OTP verification:', otp);
        router.push('/reset-password');
    };

    return (
        <div className="w-full">
            <p className="text-gray-500 font-medium mb-10 leading-relaxed text-center">
                We've sent a 6-digit verification code to your <br /> email. Please enter it below.
            </p>

            <Form
                form={form}
                onFinish={onFinish}
                autoComplete="off"
                className="w-full flex flex-col items-center"
            >
                <div className="flex justify-between gap-2 sm:gap-4 mb-12 w-full">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <Form.Item
                            key={index}
                            name={`digit${index}`}
                            className="m-0"
                            rules={[{ required: true, message: '' }]}
                        >
                            <Input
                                maxLength={1}
                                className="w-10 h-12 sm:w-14 sm:h-16 text-center bg-gray-50 border-transparent focus:border-blue-600 focus:bg-white text-gray-900 text-xl font-extrabold rounded-2xl p-0 flex items-center justify-center transition-all shadow-sm"
                                onInput={(e) => {
                                    const target = e.target as HTMLInputElement;
                                    if (target.value && index < 5) {
                                        const next = target.closest('.ant-form-item')?.nextElementSibling?.querySelector('input');
                                        next?.focus();
                                    }
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Backspace' && !form.getFieldValue(`digit${index}`) && index > 0) {
                                        const prev = (e.target as HTMLInputElement).closest('.ant-form-item')?.previousElementSibling?.querySelector('input');
                                        prev?.focus();
                                    }
                                }}
                            />
                        </Form.Item>
                    ))}
                </div>

                <div className="w-full space-y-4">
                    <Form.Item className="mb-0 w-full">
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="w-full h-14 bg-[#0041FF] hover:bg-[#0036d6]! border-none rounded-2xl text-lg font-bold shadow-xl shadow-blue-600/20 active:scale-98 transition-all"
                        >
                            Verify & Continue
                        </Button>
                    </Form.Item>

                    <div className="text-center">
                        <span className="text-gray-500 font-medium">Didn't receive the code?</span>
                        <button type="button" className="ml-1.5 font-bold text-blue-600 hover:text-blue-700 transition-colors">
                            Resend
                        </button>
                    </div>
                </div>
            </Form>

            <style jsx global>{`
                .ant-input {
                    padding: 0 !important;
                }
                .ant-input:focus {
                    box-shadow: 0 4px 12px rgba(0, 65, 255, 0.1) !important;
                }
            `}</style>
        </div>
    );
};

export default VerifyOTPForm;
