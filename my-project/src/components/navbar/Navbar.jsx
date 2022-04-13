import React, {useState} from 'react'
import { Link, animateScroll as scroll, } from 'react-scroll'
import { AiOutlineCloudUpload } from 'react-icons/ai';
import {MenuIcon, XIcon} from '@heroicons/react/outline'

const Navbar = () => {
const [nav, setNav] = useState(false)
const toggleMenuIcon = () => setNav(!nav)
const handleClose = () => setNav(!nav)

return (
    <div className='w-screen h-[80px] z-50 bg-zinc-100 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <nav className='flex items-center '>
                <h1 className='text-3xl font-bold sm:text-4xl logo'><span>e</span>CLOUD </h1>
                <ul className='hidden md:flex'>
                    <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                    <li><Link to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
                    <li><Link to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
                    <li><Link to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
                </ul>
            </nav>
            <div className='hidden md:flex pr-4'>
                <button className='border-none px-8 font-bold bg-transparent text-black mr-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button>
            </div>
            <div className='md:hidden' onClick={toggleMenuIcon}>
                {!nav ? <MenuIcon className='w-9'/> : <XIcon className='w-9'/>}
            </div>
        </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full h-[500px] py-16 px-8'}>
            <li className='border-b-2 border-zinc-300 w-full text-2xl py-2'><Link onClick={handleClose} to="home" smooth={true} duration={500}>Home</Link></li>
            <li className='border-b-2 border-zinc-300 w-full text-2xl py-2'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
            <li className='border-b-2 border-zinc-300 w-full text-2xl py-2'><Link onClick={handleClose} to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
            <li className='border-b-2 border-zinc-300 w-full text-2xl py-2'><Link onClick={handleClose} to="platforms" smooth={true} offset={-50} duration={500}>Platforms</Link></li>
            <li className='border-b-2 border-zinc-300 w-full text-2xl py-2'><Link onClick={handleClose} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
            <div className='flex flex-col my-4'>
                <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button>
            </div>
        </ul>
    </div>
  );
};

export default Navbar