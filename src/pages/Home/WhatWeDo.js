import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import bg1 from '../../assets/images/bg-1.jpg';
import Header from '../Shared/Header';

const WhatWeDo = () => {
    const [services, setServices] = useState([]);
    useEffect( ()=>{
        fetch("service.json")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div style={{ backgroundImage: `url(${bg1})` }} >
            <div className='container mx-auto py-32'>
                <Header>WHAT WE DO</Header>
                <h1 className='text-5xl font-semibold leading-snug text-center'>We provide exclusive services <br/> for your business</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-20 mt-16'>
                    {services.map(service => <ServiceCard 
                    key={service.name}
                    service={service}
                    />)}
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;