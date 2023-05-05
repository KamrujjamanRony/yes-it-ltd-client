import React from 'react';
import WhiteBtn from '../Shared/WhiteBtn';
import bg2 from '../../assets/images/bg-2.jpg';
import { FaPhone, FaLongArrowAltRight } from 'react-icons/fa';
const JoinWithUs = () => {
    return (
        <div style={{ backgroundImage: `url(${bg2})` }}>
            <div className='container mx-auto'>
                <div className='py-32 sm:text-center lg:flex justify-between items-center' >
                    <div>
                        <h2 className='text-5xl text-white font-bold'>Let's Talk About Business <br />
                            Solutions With Us</h2>
                    </div>
                    <div className='lg:flex justify-center items-center sm:m-8'>
                        <WhiteBtn>Join With Us <FaLongArrowAltRight className='inline text-sm' /></WhiteBtn>
                        <p className='text-white lg:ml-8 sm:m-2 '><FaPhone className='inline' /> +88 01763 137836</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default JoinWithUs;