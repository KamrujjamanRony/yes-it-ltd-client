import React from 'react';
import signature from '../../assets/images/signature.png';
import who from '../../assets/images/who.jpg';
import Subheader from '../Shared/Subheader';

const WhoWeAre = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 container mx-auto py-32'>
            <div className='px-8'>
                <Subheader>WHO WE ARE</Subheader>
                <div>
                    <h1 className='text-5xl font-semibold leading-snug'>More than 23+ years we provide <span className='text-primary'>IT solutions</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, eos. Quaerat, ipsum eligendi.</p>
                    <button className='btn btn-link text-secondary hover:text-primary p-0 normal-case'>Our Services</button>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <img src={who} alt="" />
            </div>
            <div className='px-8'>
                <p className='leading-relaxed text-justify'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete acount of the system, and expound the actual teacings of the great explorer of the truth, titer-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter</p>
                <p className=''>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete acount of the system, and expound the actual teacings of the great explorer of the truth, titer-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter</p>
                <img src={signature} alt="" />
            </div>
        </div>
    );
};

export default WhoWeAre;