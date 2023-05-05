import React, { useEffect, useState } from 'react';
import PrimaryBtn from '../Shared/PrimaryBtn';
import Subheader from '../Shared/Subheader';
import TeamCard from './TeamCard';
import shape1 from '../../assets/images/shape1.png';

const Team = () => {
    const [members, setMembers] = useState([]);
    useEffect( ()=>{
        fetch("team.json")
        .then(res => res.json())
        .then(data => setMembers(data))
    },[])
    console.log(members);
    return (
        <div className='container mx-auto py-24 relative'>
            <img className='-z-10 absolute top-56 right-48' src={shape1} alt="" />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20'>
                <div className='w-auto lg:w-2/4'>
                    <Subheader>OUR TEAM</Subheader>
                    <h2 className='text-4xl font-bold'>Meet Experience Team Member</h2>
                </div>
                <div className='w-auto lg:w-3/4'>
                    <p className='mb-8'>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give.</p>
                    <PrimaryBtn>JOIN WITH US</PrimaryBtn>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-10'>
            {members.map(member => <TeamCard 
                    key={member.name}
                    member={member}
                    />)}
            </div>
        </div>
    );
};

export default Team;