import React from 'react';

const WhiteBtn = ({children}) => {
    return <button className="btn text-sm px-12 border-0 bg-white text-black rounded hover:bg-white">{children}</button>;
};

export default WhiteBtn;