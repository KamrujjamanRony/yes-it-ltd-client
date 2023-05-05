import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logos/logo.png';
import CustomLink from './CustomLink';
import PrimaryBtn from './PrimaryBtn';

const Navbar = () => {
    const menuItems = (
        <>
            <li>
                <CustomLink to="/">Home</CustomLink>
            </li>
            <li>
                <CustomLink to="/about">About</CustomLink>
            </li>
            <li>
                <CustomLink to="/services">Services</CustomLink>
            </li>
            <li>
                <CustomLink to="/blogs">Blogs</CustomLink>
            </li>
        </>
    );
    return (
        <div className='sticky top-0 bg-white z-40'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/"><img src={logo} className="w-48" alt="brand-logo" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <PrimaryBtn>Get started</PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default Navbar;