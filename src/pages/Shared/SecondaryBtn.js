import React from 'react';

const SecondaryBtn = ({children}) => {
    return (<button className='btn btn-link text-white hover:text-primary ml-8'>{children}</button>);
};

export default SecondaryBtn;