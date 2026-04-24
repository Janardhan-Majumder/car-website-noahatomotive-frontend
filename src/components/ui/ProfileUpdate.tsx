"use client";

import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useAuth } from "@/context/AuthContext";
import { FiUser, FiPhone, FiMapPin, FiMail, FiEdit3, FiCamera } from "react-icons/fi";
import { cn } from "@/lib/utils/cn";

const ProfileUpdate = ({ 
    user, 
    editMode = false, 
    onEditDone 
}: { 
    user: any; 
    editMode?: boolean; 
    onEditDone?: () => void;
}) => {
    const { token, refreshUser } = useAuth();
    const [loading, setLoading] = useState(false);
    const [avatar, setAvatar] = useState(user?.avatar || "");

    const onFinish = async (values: any) => {
        setLoading(true);
        try {
            const res = await fetch("/api/auth/me", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ ...values, avatar }),
            });
            const data = await res.json();
            if (data.success) {
                message.success("Profile updated successfully!");
                refreshUser();
                onEditDone?.();
            } else {
                message.error(data.message || "Update failed");
            }
        } catch (err) {
            message.error("Failed to update profile");
        } finally {
            setLoading(false);
        }
    };

    const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!editMode) return;
        const file = e.target.files?.[0];
        if (!file) return;
        if (file.size > 2 * 1024 * 1024) {
            return message.error("Image must be smaller than 2MB");
        }
        const reader = new FileReader();
        reader.onloadend = () => {
            setAvatar(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    return (
        <Form
            layout="vertical"
            initialValues={{
                name: user?.name,
                email: user?.email,
                phone: user?.phone,
                address: user?.address,
            }}
            onFinish={onFinish}
        >
            {/* Avatar Upload */}
            <div className="flex flex-col items-center mb-10">
                <div className={cn("relative group", editMode ? "cursor-pointer" : "cursor-default")}>
                    <div className={cn(
                        "w-28 h-28 rounded-full overflow-hidden border-4 border-gray-100 shadow-md transition-all",
                        editMode && "group-hover:border-[#0047FF]/30"
                    )}>
                        {avatar ? (
                            <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full bg-blue-50 flex items-center justify-center text-4xl font-bold text-[#0047FF]">
                                {user?.name?.[0]?.toUpperCase() || <FiUser />}
                            </div>
                        )}
                    </div>
                    {/* Hover Overlay */}
                    {editMode && (
                        <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <FiCamera className="text-white text-2xl" />
                        </div>
                    )}
                    {/* Hidden File Input */}
                    {editMode && (
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarUpload}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer rounded-full"
                        />
                    )}
                </div>
                {editMode && <p className="text-gray-400 text-sm font-medium mt-3">Click to update photo</p>}
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <Form.Item
                    name="name"
                    label={<span className="text-sm font-semibold text-gray-700">Display Name</span>}
                    rules={[{ required: true, message: "Please enter your name" }]}
                >
                    <Input
                        size="large"
                        disabled={!editMode}
                        prefix={<FiUser className="text-gray-400 mr-1" />}
                        placeholder="Your full name"
                        className={cn("h-12 rounded-xl", !editMode ? "border-transparent bg-gray-50/50" : "border-gray-200")}
                    />
                </Form.Item>

                <Form.Item
                    name="email"
                    label={<span className="text-sm font-semibold text-gray-700">Email Address</span>}
                >
                    <Input
                        size="large"
                        disabled
                        prefix={<FiMail className="text-gray-400 mr-1" />}
                        className="h-12 rounded-xl border-transparent bg-gray-50/50 opacity-70"
                    />
                </Form.Item>

                <Form.Item
                    name="phone"
                    label={<span className="text-sm font-semibold text-gray-700">Contact Phone</span>}
                >
                    <Input
                        size="large"
                        disabled={!editMode}
                        prefix={<FiPhone className="text-gray-400 mr-1" />}
                        placeholder="Your phone number"
                        className={cn("h-12 rounded-xl", !editMode ? "border-transparent bg-gray-50/50" : "border-gray-200")}
                    />
                </Form.Item>

                <Form.Item
                    name="address"
                    label={<span className="text-sm font-semibold text-gray-700">Address / Location</span>}
                >
                    <Input
                        size="large"
                        disabled={!editMode}
                        prefix={<FiMapPin className="text-gray-400 mr-1" />}
                        placeholder="Your address"
                        className={cn("h-12 rounded-xl", !editMode ? "border-transparent bg-gray-50/50" : "border-gray-200")}
                    />
                </Form.Item>
            </div>

            {/* Submit */}
            {editMode && (
                <div className="pt-6 mt-2 border-t border-gray-100">
                    <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        block
                        loading={loading}
                        className="h-12 rounded-full bg-[#0047FF] border-none font-bold text-base shadow-md shadow-blue-100 hover:bg-blue-700 transition-all"
                    >
                        Save Changes
                    </Button>
                </div>
            )}
        </Form>
    );
};

export default ProfileUpdate;
