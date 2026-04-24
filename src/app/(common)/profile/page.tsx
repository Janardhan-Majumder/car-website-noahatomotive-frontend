"use client";

import { useAuth } from "@/context/AuthContext";
import Container from "@/components/Container";
import ProfileUpdate from "@/components/ui/ProfileUpdate";
import ChangePassword from "@/components/ui/ChangePassword";
import { useState } from "react";
import { Dropdown, Modal, message } from "antd";
import type { MenuProps } from "antd";
import { FiEdit3, FiLock, FiMoreVertical, FiTrash2, FiAlertTriangle } from "react-icons/fi";

export default function ProfilePage() {
    const [modal, contextHolder] = Modal.useModal();
    const { user, logout, token } = useAuth();
    const [changePassOpen, setChangePassOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);

    const menuItems: MenuProps['items'] = [
        {
            key: 'edit',
            icon: <FiEdit3 className="w-4 h-4" />,
            label: 'Edit Profile',
            onClick: () => setEditMode(true),
        },
        {
            key: 'password',
            icon: <FiLock className="w-4 h-4" />,
            label: 'Change Password',
            onClick: () => setChangePassOpen(true),
        },
    ];

    const handleDeleteAccount = () => {
        modal.confirm({
            title: 'Delete Account?',
            icon: <FiAlertTriangle className="text-red-500 text-2xl mr-2" />,
            content: 'Are you sure you want to delete your account? This action is permanent and cannot be undone.',
            okText: 'Delete',
            okType: 'danger',
            cancelText: 'Cancel',
            centered: true,
            okButtonProps: { 
                className: "bg-red-500 hover:bg-red-600 border-none h-10 px-6 rounded-lg font-semibold" 
            },
            cancelButtonProps: { 
                className: "h-10 px-6 rounded-lg font-medium" 
            },
            onOk: async () => {
                try {
                    const res = await fetch("/api/auth/me", {
                        method: "DELETE",
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    const data = await res.json();
                    if (data.success) {
                        message.success("Account deleted successfully");
                        logout();
                    } else {
                        message.error(data.message || "Failed to delete account");
                    }
                } catch (err) {
                    message.error("Failed to delete account");
                }
            },
        });
    };

    return (
        <div className="min-h-screen bg-gray-50/40">
            {contextHolder}
            <Container mClassName="pt-12 pb-24 lg:pt-32 xl:pt-28">
                {/* Content Card */}
                <div className="max-w-3xl mx-auto bg-white rounded-[28px] border border-gray-100 shadow-sm p-8 lg:p-12">
                    {/* Section Label */}
                    <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#0047FF]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900">Profile Details</h2>
                                <p className="text-sm text-gray-400 font-medium">Manage your personal information</p>
                            </div>
                        </div>

                        {/* Three-dot Menu */}
                        <Dropdown
                            menu={{ items: menuItems }}
                            trigger={['click']}
                            placement="bottomRight"
                        >
                            <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-100 hover:border-gray-300 hover:bg-gray-50 text-gray-500 transition-all">
                                <FiMoreVertical className="text-lg" />
                            </button>
                        </Dropdown>
                    </div>

                    {/* Profile Form */}
                    <ProfileUpdate user={user} editMode={editMode} onEditDone={() => setEditMode(false)} />

                   
                </div>
                 {/* Quick Actions - Only visible when NOT editing */}
                    {!editMode && (
                        <div className="max-w-3xl mx-auto mt-12 pt-10 border-t border-gray-100">
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                                Account Settings
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <button 
                                    onClick={() => setChangePassOpen(true)}
                                    className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-blue-50/50 border border-blue-100 text-[#0047FF] font-bold transition-all hover:bg-blue-50 hover:shadow-sm hover:shadow-blue-100 group cursor-pointer"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                        <FiLock className="text-lg" />
                                    </div>
                                    Change Password
                                </button>
                                <button 
                                    onClick={handleDeleteAccount}
                                    className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-red-50/50 border border-red-100 text-red-600 font-bold transition-all hover:bg-red-50 hover:shadow-sm hover:shadow-red-100 group cursor-pointer"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                        <FiTrash2 className="text-lg" />
                                    </div>
                                    Delete Account
                                </button>
                            </div>
                        </div>
                    )}
            </Container>

            {/* Change Password Modal */}
            <ChangePassword
                isModalOpen={changePassOpen}
                setIsModalOpen={setChangePassOpen}
            />
        </div>
    );
}