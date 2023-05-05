import React from 'react';
import Header from '../Shared/Header';
import case1 from '../../assets/images/case1.jpg';
import case2 from '../../assets/images/case2.jpg';
import case3 from '../../assets/images/case3.jpg';

const CaseStudies = () => {
    return (
        <div className='container mx-auto py-32'>
            <Header>CASE STUDIES</Header>
            <h1 className='text-4xl font-bold w-96 mx-auto text-center'>Our Latest Case Studies</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16'>
                    <img src={case1} alt="" />
                    <img src={case2} alt="" />
                    <img src={case3} alt="" />
                </div>
        </div>
    );
};

export default CaseStudies;