import React from 'react';

const Subheader = ({children}) => {
    return (
        <div className='text-primary flex'>
            <div className='w-4 h-1 bg-primary mt-4 mr-2'></div>
            <div className='w-12 h-1 bg-primary mt-4 mr-6'></div>
            <p className='font-bold mt-1'>{children}</p>
        </div>
    );
};

export default Subheader;