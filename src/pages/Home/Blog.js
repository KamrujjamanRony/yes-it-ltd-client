import React from 'react';
import PrimaryBtn from '../Shared/PrimaryBtn';
import Subheader from '../Shared/Subheader';
import blog1 from '../../assets/images/blog1.jpg';
import blog2 from '../../assets/images/blog2.jpg';
import blog3 from '../../assets/images/blog3.jpg';
import { HiOutlineUser, HiOutlineChatAlt2 } from "react-icons/hi";
import { AiOutlineCalendar } from "react-icons/ai";

const Blog = () => {
    return (
        <div className='container mx-auto px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 py-20'>
                <div className='w-auto lg:w-2/3'>
                    <Subheader>OUR BLOG</Subheader>
                    <h2 className='text-5xl font-bold mt-8'>Reads Our Latest News & Blog</h2>
                </div>
                <div className='w-auto lg:w-3/4 flex justify-end items-end'>
                    <PrimaryBtn>VIEW ALL NEWS</PrimaryBtn>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                <div className="w-full card ">
                    <img src={blog1} alt="blog"  className='h-fit lg:h-72'/>
                    <h2 className="text-2xl font-bold my-8">Monthly Web Development To Update React Hooks Cons</h2>
                    <p className='mb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                    <div>
                        <PrimaryBtn>READ MORE</PrimaryBtn>
                    </div>
                </div>
                <div className='grid col-span-2 gap-2'>
                    <div className="card lg:card-side border rounded-none">
                        <img src={blog2} alt="blog" className='h-fit lg:h-72' />
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <div className='flex items-center'>
                                    <HiOutlineUser className='text-primary mr-2' /><p className='text-slate-400 text-sm'>Rony</p>
                                </div>
                                <div className='flex items-center'>
                                    <HiOutlineChatAlt2 className='text-primary mr-2' /><p className='text-slate-400 text-sm'>Nov 25, 2022</p>
                                </div>
                                <div className='flex items-center'>
                                    <AiOutlineCalendar className='text-primary mr-2' /><p className='text-slate-400 text-sm'>(0)</p>
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold my-4">Exploring Latest Web Design Together With Theme</h2>
                            <p className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                        </div>
                    </div>
                    <div className="card lg:card-side border rounded-none">
                        <img src={blog3} alt="blog" className='h-fit lg:h-72' />
                        <div className="card-body">
                            <div className='flex justify-between'>
                                <div className='flex items-center'>
                                    <HiOutlineUser className='text-primary mr-2' /><p className='text-slate-400 text-sm'>Rony</p>
                                </div>
                                <div className='flex items-center'>
                                    <HiOutlineChatAlt2 className='text-primary mr-2' /><p className='text-slate-400 text-sm'>Nov 25, 2022</p>
                                </div>
                                <div className='flex items-center'>
                                    <AiOutlineCalendar className='text-primary mr-2' /><p className='text-slate-400 text-sm'>(0)</p>
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold my-4">Detailed Comparison Between WordPress & October CMS</h2>
                            <p className='mb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;