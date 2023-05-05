import PrimaryBtn from '../Shared/PrimaryBtn';

const ServiceCard = (service) => {
    const {name, image, description} = service.service;
    console.log(name, image, description);
    return (
        <div className='flex flex-col items-center leading-loose p-12 bg-white rounded'>
            <img src={image} className='my-8' width='72' alt="" />
            <h2 className='text-2xl font-bold'>{name}</h2>
            <p className='text-center my-6'>{description}</p>
            <PrimaryBtn>READ MORE</PrimaryBtn>
        </div>
    );
};

export default ServiceCard;