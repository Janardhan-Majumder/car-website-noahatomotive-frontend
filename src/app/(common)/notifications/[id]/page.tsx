"use client";

import React from 'react';
import Container from '@/components/Container';
import PageHeading from '@/components/ui/PageHeading';
import NotificationDetails from '@/components/notifications/NotificationDetails';
import { useParams } from 'next/navigation';

const mockNotification = {
    id: '1',
    title: 'Order Completed',
    message: 'Your order #12345 has been successfully delivered and accepted. You can now leave a feedback for the product to help other buyers.',
    type: 'success' as const,
    timestamp: '2 mins ago',
    detailedContent: 'Thank you for choosing Noah Automotive. Your transaction has been verified and the shipping status has been updated to "Delivered". If you have any questions regarding this order, please contact our support team.'
};

const NotificationDetailPage = () => {
    const params = useParams();
    const id = params?.id;

    // In a real app, you would fetch notification by ID
    // For now, we use the mock data
    const notification = mockNotification;

    return (
        <div className="min-h-screen bg-gray-50/30">
            <Container mClassName='pt-12 pb-24 lg:pt-32 xl:pt-28'>
                {/* Header */}
                <div className="mb-10">
                    <PageHeading title="Notification Details" backPath="/notifications" />
                </div>

                {/* Details Content */}
                <div className="max-w-4xl mx-auto">
                    <NotificationDetails notification={notification} />
                </div>
            </Container>
        </div>
    );
};

export default NotificationDetailPage;
