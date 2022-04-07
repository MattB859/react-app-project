import React from 'react'

import { HiServer } from "react-icons/hi";
import { ImUpload3 } from "react-icons/im";
import { FaRegHandshake } from "react-icons/fa";

const About = () => {
  return (
    <div name='about' className='w-full my-20'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center px-4'>
                <h2 className='text-4xl lg:text-5xl text-gray-500 font-normal about'>Trusted by professionals <span>across the world</span></h2>
                <p className='text-2xl lg:text-2xl py-6 lg:px-20 text-gray-500'>Reduced upfront costs by buying infrastructure and management as a service.
                Increased flexibility so you can embrace innovation as it emerges.</p>
            </div>

            <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                <div className='py-8' >
                <ImUpload3 className='w-20 h-20 m-auto text-indigo-700 mb-5'/>
                    <p className='text-6xl font-bold text-gray-800'>100%</p>
                    <p className='text-gray-800 px-5 lg:px-20 my-5'>100% Network uptime achieve the highest standards of security and total control with a bespoke, fully managed private cloud solution, architected to meet your unique hosting requirements.</p>
                    <button className='font-bold py-3 px-6 lg:w-[40%] sm:w-[100%] my-4'>Lear more</button>
                </div>
                <div  className='py-8' >
                <FaRegHandshake className='w-20 h-20 m-auto text-indigo-700 mb-5'/>
                    <p className='text-6xl font-bold text-gray-800'>24/7</p>
                    <p className='text-gray-800 px-5 lg:px-20 my-5'>Expert advice Our specialist experts are qualified in all major platforms and have years of experience giving over 5,000 customers sound, useful advice, with 24/7 support 365 days a year.</p>
                    <button className='font-bold py-3 px-6 lg:w-[40%] sm:w-[100%] my-4'>Lear more</button>
                </div>
                <div className='py-8' >
                 <HiServer className='w-20 h-20 m-auto text-indigo-700 mb-5'/>
                    <p className='text-6xl font-bold text-gray-800'>100GB</p>
                    <p className='text-gray-800 px-5 lg:px-20 my-5'>Multi connectivity Harness the power of multiple 
                    public cloud providers. Take advantage of each platform's unique offerings, migrating 
                    each workload to the perfect platform.</p>
                    <button className='font-bold py-3 px-6 lg:w-[40%] sm:w-[100%] my-4'>Lear more</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About