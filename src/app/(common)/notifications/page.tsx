"use client";

import React from 'react';
import Container from '@/components/Container';
import PageHeading from '@/components/ui/PageHeading';
import NotificationList from '@/components/notifications/NotificationList';

const NotificationsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50/30">
            <Container mClassName='pt-12 pb-24 lg:pt-32 xl:pt-28'>
                {/* Header */}
                <div className="mb-10">
                    <PageHeading title="Notifications" backPath="/" />
                </div>

                {/* Notifications List */}
                    {/* <div className="flex items-center justify-between mb-6 px-2">
                        <h2 className="text-xl font-bold text-gray-900">Recent Updates</h2>
                        <button className="text-sm font-semibold text-[#0041FF] hover:underline transition-all">
                            Mark all as read
                        </button>
                    </div> */}

                    <NotificationList />
            </Container>
        </div>
    );
};

export default NotificationsPage;
