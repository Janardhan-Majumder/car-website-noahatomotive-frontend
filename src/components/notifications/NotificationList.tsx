"use client";

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { LuBell, LuInfo, } from 'react-icons/lu';
import { BiCheckCircle } from 'react-icons/bi';
import { FiAlertTriangle } from 'react-icons/fi';

export interface Notification {
    id: string;
    title: string;
    message: string;
    type: 'success' | 'info' | 'warning';
    isRead: boolean;
    timestamp: string;
}

const notifications: Notification[] = [
    {
        id: '1',
        title: 'Order Completed',
        message: 'Your order #12345 has been successfully delivered and accepted.',
        type: 'success',
        isRead: false,
        timestamp: '2 mins ago',
    },
    {
        id: '2',
        title: 'New Message',
        message: 'You have a new message from the dealer regarding the Tesla Model 3.',
        type: 'info',
        isRead: false,
        timestamp: '1 hour ago',
    },
    {
        id: '3',
        title: 'System Update',
        message: 'Our systems will be undergoing scheduled maintenance tonight at 2 AM.',
        type: 'warning',
        isRead: true,
        timestamp: '5 hours ago',
    },
    {
        id: '4',
        title: 'Profile Updated',
        message: 'Your profile information was updated successfully.',
        type: 'success',
        isRead: true,
        timestamp: '1 day ago',
    },
];

const NotificationList = () => {
    return (
        <div className="space-y-4">
            {notifications.map((notif) => (
                <Link key={notif.id} href={`/notifications/${notif.id}`}>
                    <div className={cn(
                        "group p-5 rounded-2xl border transition-all duration-300 mb-4",
                        notif.isRead 
                            ? "bg-white border-gray-100 hover:border-blue-100" 
                            : "bg-blue-50/30 border-blue-100/50 hover:border-blue-200"
                    )}>
                        <div className="flex gap-4">
                            {/* Icon */}
                            <div className={cn(
                                "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                                notif.type === 'success' && "bg-green-50 text-green-600",
                                notif.type === 'info' && "bg-blue-50 text-blue-600",
                                notif.type === 'warning' && "bg-orange-50 text-orange-600",
                            )}>
                                {notif.type === 'success' && <BiCheckCircle className="w-6 h-6" />}
                                {notif.type === 'info' && <LuInfo className="w-6 h-6" />}
                                {notif.type === 'warning' && <FiAlertTriangle className="w-6 h-6" />}
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2 mb-1">
                                    <h3 className={cn(
                                        "text-base font-bold truncate",
                                        notif.isRead ? "text-gray-900" : "text-blue-900"
                                    )}>
                                        {notif.title}
                                    </h3>
                                    <span className="text-xs font-medium text-gray-400 whitespace-nowrap">
                                        {notif.timestamp}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                                    {notif.message}
                                </p>
                            </div>

                            {/* Status Dot */}
                            {!notif.isRead && (
                                <div className="mt-2 w-2 h-2 rounded-full bg-blue-600 shrink-0 shadow-sm shadow-blue-200" />
                            )}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default NotificationList;
