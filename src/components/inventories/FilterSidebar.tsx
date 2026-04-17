"use client";
import React from 'react';
import { Checkbox, Slider } from 'antd';

const FilterSidebar = () => {
    return (
        <div className="w-full flex flex-col gap-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            {/* Filter Header */}
            <div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-4 tracking-wide pb-4 border-b border-gray-200">
                    Filter
                </h3>
            </div>

            {/* Car categories */}
            <div className="flex flex-col gap-4">
                <h4 className="text-[1.1rem] font-bold text-gray-800 select-none">Car categories</h4>
                <div className="flex flex-col gap-3">
                    <Checkbox className="text-base text-gray-700 font-medium">All</Checkbox>
                    <Checkbox className="text-base text-gray-700 font-medium">Category 1</Checkbox>
                    <Checkbox className="text-base text-gray-700 font-medium">Category 2</Checkbox>
                </div>
            </div>

            {/* Brand name */}
            <div className="flex flex-col gap-4 mt-2">
                <h4 className="text-[1.1rem] font-bold text-gray-800 select-none">Brand name</h4>
                <div className="flex flex-col gap-3">
                    <Checkbox className="text-base text-gray-700 font-medium">All</Checkbox>
                    <Checkbox className="text-base text-gray-700 font-medium">Brand 1</Checkbox>
                    <Checkbox className="text-base text-gray-700 font-medium">Brand 2</Checkbox>
                </div>
            </div>

            {/* Price range */}
            <div className="flex flex-col gap-5 mt-2">
                <h4 className="text-[1.1rem] font-bold text-gray-800 select-none">Price range</h4>
                <div className="px-1 mt-2">
                    <Slider 
                        range 
                        defaultValue={[0, 10000]} 
                        max={20000}
                        tooltip={{ formatter: (val) => `$${val}` }}
                    />
                </div>
                {/* Min Max Displays */}
                <div className="flex items-center justify-between gap-4 w-full">
                    <div className="flex-1 bg-gray-100/80 rounded-xl py-2.5 px-3 text-center text-sm font-semibold text-gray-800 border border-gray-200/50">
                        0
                    </div>
                    <div className="flex-1 bg-gray-100/80 rounded-xl py-2.5 px-3 text-center text-sm font-semibold text-gray-800 border border-gray-200/50">
                        10,000
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;
