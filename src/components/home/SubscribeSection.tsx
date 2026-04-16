"use client"
import React from 'react';
import Container from '../Container';
import { Form, message } from 'antd';

const SubscribeSection = () => {
  const [form] = Form.useForm();

  const onFinish = (values: { email: string }) => {
    console.log('Success:', values);
    message.success('Successfully subscribed to the newsletter!');
    form.resetFields();
  };

  return (
    <section className="bg-white py-16 lg:py-24 w-full">
      <Container>
        <div className="w-full max-w-[1000px] mx-auto bg-[#3B71FF] rounded-[40px] px-6 py-16 sm:p-16 md:p-20 flex flex-col items-center justify-center text-center shadow-lg shadow-blue-500/10">

          <h2 className="text-[1.75rem] sm:text-3xl lg:text-4xl font-extrabold text-white uppercase mb-5 tracking-wide leading-tight">
            Stay ahead of the <br className="hidden sm:block md:hidden" /> collection
          </h2>

          <p className="text-white/95 text-[15px] sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Join 15,000+ automotive enthusiasts receiving early access <br className="hidden md:block" />
            to rare stock and market insights.
          </p>

          <Form
            form={form}
            onFinish={onFinish}
            className="w-full max-w-[500px] flex flex-col sm:flex-row gap-3 sm:gap-4 relative"
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please enter your email address' },
                { type: 'email', message: 'Please enter a valid email address' }
              ]}
              className="flex-1 mb-0"
            >
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full bg-[#5A87FF] border border-[#7D9FFF] text-white placeholder-white/80 rounded-full px-6 py-4 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-[15px] sm:text-base outline-none"
              />
            </Form.Item>
            <Form.Item className="mb-0">
              <button
                type="submit"
                className="w-full bg-white text-[#3B71FF] font-bold rounded-full px-8 py-4 sm:h-[58px] hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all shadow-sm text-[15px] sm:text-base whitespace-nowrap"
              >
                Subscribe
              </button>
            </Form.Item>
          </Form>

        </div>
      </Container>
    </section>
  );
};

export default SubscribeSection;
