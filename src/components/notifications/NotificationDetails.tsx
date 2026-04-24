"use client";

import React from 'react';
import { cn } from '@/lib/utils/cn';
import { LuInfo, LuClock, LuChevronLeft } from 'react-icons/lu';
import { BiCheckCircle } from 'react-icons/bi';
import { FiAlertTriangle } from 'react-icons/fi';
import Link from 'next/link';

interface NotificationDetailsProps {
    notification: {
        id: string;
        title: string;
        message: string;
        type: 'success' | 'info' | 'warning';
        timestamp: string;
        detailedContent?: string;
    }
}

const NotificationDetails = ({ notification }: NotificationDetailsProps) => {
    return (
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 lg:p-12 overflow-hidden relative">
            {/* Background Accent */}
            <div className={cn(
                "absolute top-0 left-0 w-full h-2",
                notification.type === 'success' && "bg-green-500",
                notification.type === 'info' && "bg-blue-500",
                notification.type === 'warning' && "bg-orange-500",
            )} />

            {/* Content Container */}
            <div className="max-w-2xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-10">
                    <div className={cn(
                        "w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg",
                        notification.type === 'success' && "bg-green-50 text-green-600 shadow-green-100",
                        notification.type === 'info' && "bg-blue-50 text-blue-600 shadow-blue-100",
                        notification.type === 'warning' && "bg-orange-50 text-orange-600 shadow-orange-100",
                    )}>
                        {notification.type === 'success' && <BiCheckCircle className="w-10 h-10" />}
                        {notification.type === 'info' && <LuInfo className="w-10 h-10" />}
                        {notification.type === 'warning' && <FiAlertTriangle className="w-10 h-10" />}
                    </div>

                    <h1 className="text-2xl lg:text-3xl font-black text-gray-900 mb-3">
                        {notification.title}
                    </h1>
                    
                    <div className="flex items-center gap-2 text-gray-400 font-medium text-sm">
                        <LuClock className="w-4 h-4" />
                        <span>{notification.timestamp}</span>
                    </div>
                </div>

                {/* Message Body */}
                <div className="prose prose-blue max-w-none">
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        {notification.message}
                    </p>
                    
                    {notification.detailedContent && (
                        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 text-gray-700 leading-relaxed italic">
                            {notification.detailedContent}
                        </div>
                    )}
                </div>

                {/* Footer Action */}
                <div className="mt-12 pt-8 border-t border-gray-100 flex justify-center">
                    <Link href="/notifications">
                        <button className="flex items-center gap-2 text-[#0041FF] font-bold hover:gap-3 transition-all">
                            <LuChevronLeft className="w-5 h-5" />
                            Back to all notifications
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotificationDetails;
