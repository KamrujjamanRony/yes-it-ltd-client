import React from 'react';
import testimonial from '../../assets/images/testimonial.png'
import bg3 from '../../assets/images/bg-3.png'
import Subheader from '../Shared/Subheader';
import { HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi';

const Testimonials = () => {
    return (
        <div className='pb-32 container mx-auto'>
            <div className="">
            <div className="flex justify-between flex-col lg:flex-row-reverse ">
                <img src={testimonial} className="lg:max-w-lg" alt="" />
                <div className='w-full lg:w-1/2 bg-no-repeat bg-center' style={{ backgroundImage: `url(${bg3})` }} >
                    <Subheader>TESTIMONIALS</Subheader>
                    <h1 className="text-5xl font-bold py-4">What Our Client’s Say About us</h1>
                    <p className="py-6">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantie totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi artectbeatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sipernatur aut odit aut fugit sed quia consequunture</p>
                    <h3 className="text-2xl font-bold pt-4">Kane Williamson</h3>
                    <p className="font-bold text-primary pb-12">WEB DEVELOPER</p>
                    <button className="btn bg-slate-300 border-none rounded-full font-bold text-black hover:btn-primary mr-2"><HiArrowNarrowLeft /></button>
                    <button className="btn bg-slate-300 border-none rounded-full font-bold text-black hover:btn-primary"><HiArrowNarrowRight /></button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Testimonials;