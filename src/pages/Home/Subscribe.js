import React from 'react';
import bg5 from '../../assets/images/bg-5.jpg'
import PrimaryBtn from '../Shared/PrimaryBtn';

const Subscribe = () => {
    return (
        <div style={{ backgroundImage: `url(${bg5})` }}>
            <div className='container mx-auto'>
                <div className='py-32 sm:text-center lg:flex justify-between items-center' >
                    <div>
                        <h2 className='text-5xl text-white font-bold'>Subscribe Our Newsletter <br /> To Get More Update</h2>
                    </div>
                    <div className='lg:flex justify-center items-center  w-full lg:w-2/5 sm:m-8 bg-white p-6'>
                        <input type="text" placeholder="Enter Your Email:" className="input w-full max-w-sm bg-slate-100 rounded-none mr-2 focus:outline-none" />
                        <PrimaryBtn>Subscribe</PrimaryBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;