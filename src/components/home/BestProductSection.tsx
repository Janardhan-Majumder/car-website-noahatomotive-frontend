import React from 'react'
import Container from '../Container'
import { Button } from 'antd'
import ProductCard from '../ui/ProductCard'
import Link from 'next/link'

const BestProductSection = () => {
    return (
        <Container>
            <div className='flex justify-between items-center'>
                <h2 className='text-2xl lg:text-3xl font-bold'>Best selling products</h2>
                <Link href="/inventories"><Button color="default" variant="filled" shape='round' className='pb-0.5!'>
                    See all
                </Button></Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
                {Array.from({ length: 5 }).map((_, index) => (
                    <ProductCard data={{ images: ["https://i.pinimg.com/736x/10/66/fd/1066fd19301e0f76d75779766b565055.jpg"] }} key={index} />
                ))}
            </div>
        </Container>
    )
}

export default BestProductSection