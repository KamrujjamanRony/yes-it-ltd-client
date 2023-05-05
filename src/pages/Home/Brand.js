import React from 'react';
import brand1 from '../../assets/images/brand1.png';
import brand2 from '../../assets/images/brand2.png';
import brand3 from '../../assets/images/brand3.png';
import brand4 from '../../assets/images/brand4.png';
import brand5 from '../../assets/images/brand5.png';

const Brand = () => {
    return (
        <div className='container mx-auto px-40'>
            <div className='grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-40 py-4 lg:py-20 items-center'>
                <img src={brand1} className='h-fit' alt="" />
                <img src={brand2} className='h-fit' alt="" />
                <img src={brand3} className='h-fit' alt="" />
                <img src={brand4} className='h-fit' alt="" />
                <img src={brand5} className='h-fit' alt="" />
            </div>
        </div>
    );
};

export default Brand;