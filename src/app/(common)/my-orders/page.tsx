import Container from '@/components/Container';
import OrderProgressList from '@/components/cart/OrderProgressList';

const ordersData = [
    {
        id: 1,
        name: "Products name",
        price: 550.00,
        quantity: 1,
        status: "In progress" as const,
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000",
    },
    {
        id: 2,
        name: "Products name",
        price: 320.00,
        quantity: 0,
        status: "Packed" as const,
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1000",
    },
    {
        id: 3,
        name: "Products name",
        price: 480.00,
        quantity: 0,
        status: "Handover" as const,
        image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000",
    },
    {
        id: 4,
        name: "Products name",
        price: 275.00,
        quantity: 0,
        status: "Complete" as const,
        image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1000",
    },
];

const MyOrdersPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <Container mClassName="pt-12 pb-24 lg:pt-32 xl:pt-28">
                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-2xl lg:text-3xl font-bold">
                        <span className="text-gray-400 font-normal">My cart / </span>
                        <span className="text-[#0047FF]">Purchased products or car</span>
                    </h1>
                </div>

                {/* Order List */}
                <OrderProgressList orders={ordersData} />
            </Container>
        </div>
    );
};

export default MyOrdersPage;
