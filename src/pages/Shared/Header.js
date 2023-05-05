import React from 'react';

const Header = ({ children }) => {
    return (
        <div className='text-primary flex justify-center items-center'>
            <div className='w-12 h-1 bg-primary mt-1 mr-6'></div>
            <p className='font-bold mt-1'>{children}</p>
            <div className='w-12 h-1 bg-primary mt-1 ml-6'></div>
        </div>
    );
};

export default Header;