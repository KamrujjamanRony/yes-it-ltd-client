import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from 'react-icons/fa';

const TeamCard = ({member}) => {
    const {name, image, designation, facebook, twitter, instagram, linkedin} = member;
    return (
        <div className="card bg-base-100 border-2 rounded-none">
            <figure><img src={image} alt="Album" className='min-w-full' /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{name}</h2>
                <p className='text-neutral'>{designation}</p>
                <div className="card-actions text-neutral">
                    <a href={facebook} className='hover:text-primary' target="blank"><FaFacebookF /></a>
                    <a href={twitter} className='hover:text-primary' target="blank"><FaTwitter /></a>
                    <a href={instagram} className='hover:text-primary' target="blank"><FaInstagram /></a>
                    <a href={linkedin} className='hover:text-primary' target="blank"><FaLinkedinIn /></a>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;