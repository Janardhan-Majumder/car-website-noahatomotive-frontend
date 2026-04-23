import Container from '@/components/Container'
import InventoryDetails from '@/components/inventories/InventoryDetails'

const page = () => {
    return (
        <div className="min-h-screen bg-white">
            <Container mClassName='pt-8 lg:pt-32 xl:pt-24'>
                <InventoryDetails />
            </Container>
        </div>
    )
}

export default page
