"use client";

import Container from '@/components/Container'
import BillingForm from '@/components/cart/BillingForm'
import OrderSummary from '@/components/cart/OrderSummary'
import { Form } from 'antd'

const BillingPage = () => {
    const [form] = Form.useForm();

    // Mock cart data
    const cartItems = [
        {
            id: 1,
            name: "Products name",
            price: 550.00,
            quantity: 2,
            image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000"
        },
        {
            id: 2,
            name: "Products name",
            price: 320.00,
            quantity: 1,
            image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1000"
        }
    ];

    const onFinish = (values: any) => {
        const orderData = {
            billingDetails: values,
            items: cartItems,
            total: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) + 10.00 // + shipping
        };
        console.log('Final Order Data:', orderData);
        alert('Order placed successfully! Check console for data.');
    };

    return (
        <div className="min-h-screen bg-gray-50/30">
            <Container mClassName='pt-12 pb-24 lg:pt-32 xl:pt-28'>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    {/* Left Column: Form */}
                    <div className="w-full lg:w-[65%]">
                        <BillingForm form={form} onFinish={onFinish} />
                    </div>

                    {/* Right Column: Summary */}
                    <div className="w-full lg:w-[35%] lg:sticky lg:top-28">
                        <OrderSummary 
                            items={cartItems} 
                            onPlaceOrder={() => form.submit()} 
                        />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default BillingPage;