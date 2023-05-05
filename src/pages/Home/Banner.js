import React from 'react';
import play from '../../assets/images/play.png';
import banner from '../../assets/images/banner.jpg';
import PrimaryBtn from '../Shared/PrimaryBtn';
import SecondaryBtn from '../Shared/SecondaryBtn';

const Banner = () => {
    return (
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }} >
                <div className="hero-overlay bg-black bg-opacity-50"></div>
                <div className="hero-content min-w-full flex-col lg:flex-row-reverse">
                    <img src={play} alt='' className="w-24 mr-2 lg:mr-96 hidden lg:block" />
                    <div className='mx-12 lg:mx-72 text-white'>
                        <h1 className="text-7xl font-bold">Perfect IT Solutions For Your Business</h1>
                        <p className="text-lg py-6 text-justify">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus excepturi eveniet cum corrupti dolorum eum
                        </p>
                        <PrimaryBtn>LEARN MORE</PrimaryBtn>
                        <SecondaryBtn>How it work?</SecondaryBtn>
                    </div>
                </div>
            </div>
    );
};

export default Banner;