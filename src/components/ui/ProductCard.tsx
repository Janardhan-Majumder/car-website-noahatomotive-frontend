import React from 'react';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ data }: { data: { images?: string[] } }) => {
    return (
        <div className="w-full bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group p-3 pb-2">
            {/* Image Section */}
            <div className="relative w-full aspect-5/4 bg-gray-100 overflow-hidden rounded-[20px]">
                {/* Badge */}
                <div className="absolute top-3 left-3 z-10 bg-[#85AAFF] text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-sm backdrop-blur-md">
                    50 % Off
                </div>

                {/* Placeholder Car Image matching reference */}
                <img
                    src={data.images?.[0] ?? "/images/car.png"}
                    alt="Product Car"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
            </div>

            {/* Content Section */}
            <div className="px-4 pt-4 pb-3 flex flex-col gap-2.5">
                {/* Category & Rating */}
                <div className="flex justify-between items-center">
                    <span className="text-[1.1rem] font-medium text-gray-700">Category</span>
                    <div className="flex items-center gap-2">
                        <FaStar className="text-[#FF9F29] text-lg mb-1" />
                        <span className="text-[1.05rem] font-semibold text-gray-700">4.8</span>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-gray-800 line-clamp-1 mt-0.5">
                    Learn the name or title here and make sure it is not too long to break the design
                </h3>

                {/* Price */}
                <div className="flex items-center gap-4 mt-2">
                    <span className="text-2xl font-medium text-gray-700">$ 0.00</span>
                    <span className="text-[1.35rem] font-medium text-gray-600 line-through pb-0.5 relative">
                        $ 0.00
                    </span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 mt-4">
                    <button className="flex-1 bg-[#0047FF] hover:bg-[#0038cc] text-white font-medium py-3 rounded-full transition-colors text-base shadow-sm">
                        Buy Now
                    </button>
                    <button className="flex-1 bg-transparent hover:bg-blue-50 border-[1.5px] border-[#0047FF] text-[#0047FF] font-medium py-3 rounded-full transition-colors text-base">
                        Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;