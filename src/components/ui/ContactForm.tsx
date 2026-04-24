"use client";

import { Form, Input, Button, message } from "antd";
import { useState } from "react";
import { FiUser, FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

export default function ContactForm({ type = "support" }: { type?: string }) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    message: string;
  }) => {
    setLoading(true);
    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          type, // Pass the category (support/general/etc.)
        }),
      });
      const data = await res.json();
      
      if (data.success) {
        message.success("Thank you! Your message has been sent successfully.");
        form.resetFields();
      } else {
        message.error(data.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      message.error("Something went wrong. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      form={form}
      name="get_in_touch"
      layout="vertical"
      className="w-full max-w-4xl mx-auto p-6 md:p-10 bg-white animate-scale-in opacity-0-start shadow-2xl shadow-blue-50/50"
      onFinish={onFinish}
      requiredMark={false}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        message: '',
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Form.Item
          name="firstName"
          label={<span className="font-bold text-gray-700 text-xs uppercase tracking-widest ml-1">First Name</span>}
          rules={[{ required: true, message: "First name is required" }]}
          className="animate-fade-in-up opacity-0-start"
          style={{ animationDelay: "0.1s" }}
        >
          <Input 
            size="large" 
            placeholder="John" 
            prefix={<FiUser className="text-gray-400 mr-2" />}
            className="h-14 rounded-2xl transition-all duration-300 focus:shadow-md border-slate-200 bg-slate-50/50" 
          />
        </Form.Item>

        <Form.Item
          name="lastName"
          label={<span className="font-bold text-gray-700 text-xs uppercase tracking-widest ml-1">Last Name</span>}
          rules={[{ required: true, message: "Last name is required" }]}
          className="animate-fade-in-up opacity-0-start"
          style={{ animationDelay: "0.15s" }}
        >
          <Input 
            size="large" 
            placeholder="Doe" 
            prefix={<FiUser className="text-gray-400 mr-2" />}
            className="h-14 rounded-2xl transition-all duration-300 focus:shadow-md border-slate-200 bg-slate-50/50" 
          />
        </Form.Item>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Form.Item
          name="email"
          label={<span className="font-bold text-gray-700 text-xs uppercase tracking-widest ml-1">Email Address</span>}
          rules={[
            { required: true, message: "Email address is required" },
            { type: "email", message: "Enter a valid email address" },
          ]}
          className="animate-fade-in-up opacity-0-start"
          style={{ animationDelay: "0.2s" }}
        >
          <Input 
            size="large" 
            placeholder="john@example.com" 
            prefix={<FiMail className="text-gray-400 mr-2" />}
            className="h-14 rounded-2xl transition-all duration-300 focus:shadow-md border-slate-200 bg-slate-50/50" 
          />
        </Form.Item>

        <Form.Item
          name="phoneNumber"
          label={<span className="font-bold text-gray-700 text-xs uppercase tracking-widest ml-1">Phone Number</span>}
          rules={[{ required: true, message: "Phone number is required" }]}
          className="animate-fade-in-up opacity-0-start"
          style={{ animationDelay: "0.25s" }}
        >
          <Input 
            size="large" 
            placeholder="+1 (555) 000-0000" 
            prefix={<FiPhone className="text-gray-400 mr-2" />}
            className="h-14 rounded-2xl transition-all duration-300 focus:shadow-md border-slate-200 bg-slate-50/50" 
          />
        </Form.Item>
      </div>

      <Form.Item
        name="address"
        label={<span className="font-bold text-gray-700 text-xs uppercase tracking-widest ml-1">Physical Address (Optional)</span>}
        className="animate-fade-in-up opacity-0-start"
        style={{ animationDelay: "0.3s" }}
      >
        <Input 
          size="large" 
          placeholder="New York, USA" 
          prefix={<FiMapPin className="text-gray-400 mr-2" />}
          className="h-14 rounded-2xl transition-all duration-300 focus:shadow-md border-slate-200 bg-slate-50/50" 
        />
      </Form.Item>

      <Form.Item
        name="message"
        label={<span className="font-bold text-gray-700 text-xs uppercase tracking-widest ml-1">Your Detailed Message</span>}
        rules={[{ required: true, message: "Message is required" }]}
        className="animate-fade-in-up opacity-0-start"
        style={{ animationDelay: "0.35s" }}
      >
        <Input.TextArea 
          rows={5} 
          size="large" 
          placeholder="How can we help you today?" 
          className="rounded-2xl transition-all duration-300 focus:shadow-md border-slate-200 bg-slate-50/50 p-4" 
        />
      </Form.Item>

      <Form.Item
        className="animate-fade-in-up opacity-0-start mb-0 mt-4"
        style={{ animationDelay: "0.4s" }}
      >
        <Button 
          type="primary" 
          htmlType="submit" 
          size="large" 
          loading={loading}
          icon={<FiSend className="mb-[-2px] mr-1" />}
          className="w-full h-16 rounded-2xl transition-all duration-300 hover:shadow-xl bg-linear-to-r from-[#0041FF] to-[#4D7CFF] font-black text-xl border-none shadow-blue-100"
        >
          Launch Inquiry
        </Button>
      </Form.Item>
    </Form>
  );
}