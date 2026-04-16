import React from 'react'
import Container from '../Container'
import Link from 'next/link'
import { Button } from 'antd'
import ProductCard from '../ui/ProductCard'

const CarSection = () => {
    return (
        <Container mClassName='pb-2! lg:pb-4! xl:pb-4!'>
            <div className='flex justify-between items-center'>
                <h2 className='text-2xl lg:text-3xl font-bold'>Best selling cars</h2>
                <Link href="/inventories"><Button color="default" variant="filled" shape='round' className='pb-0.5!'>
                    See all
                </Button>
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
                {Array.from({ length: 5 }).map((_, index) => (
                    <ProductCard data={{ images: [] }} key={index} />
                ))}
            </div>
        </Container>
    )
}

export default CarSection