"use client";

import Container from '@/components/Container';
import CartList from '@/components/cart/CartList';
import CartSummary from '@/components/cart/CartSummary';
import PageHeading from '@/components/ui/PageHeading';
import { useState } from 'react';

const initialCartItems = [
    {
        id: 1,
        name: "Products name",
        price: 550.00,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000"
    },
    {
        id: 2,
        name: "Products name",
        price: 320.00,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1000"
    },
    {
        id: 3,
        name: "Products name",
        price: 480.00,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000"
    },
    {
        id: 4,
        name: "Products name",
        price: 275.00,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1000"
    },
];

const CartPage = () => {
    const [cartItems, setCartItems] = useState(initialCartItems);

    return (
        <div className="min-h-screen bg-white">
            <Container mClassName='pt-12 pb-24 lg:pt-32 xl:pt-28'>
                {/* Header */}
                <div className="mb-10">
                    <PageHeading title="Purchased products or car" backPath="/" />
                </div>

                {/* Content */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    {/* Left: Product List */}
                    <div className="flex-1 w-full min-w-0">
                        <CartList items={cartItems} onItemsChange={setCartItems} />
                    </div>

                    {/* Right: Summary */}
                    <div className="w-full lg:min-w-xs xl:min-w-md lg:w-auto lg:sticky lg:top-28">
                        <CartSummary items={cartItems} />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CartPage;