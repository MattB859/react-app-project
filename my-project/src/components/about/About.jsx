import React from 'react'

import { BsClouds } from "react-icons/bs";
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
                <div className='py-5' >
                <ImUpload3 className='w-20 h-20 m-auto text-blue-800 mb-5'/>
                    <p className='text-3xl font-bold text-gray-800'>Network Availability</p>
                    <p className='text-gray-800 px-5 font-medium lg:px-20 my-3'>100% Network uptime achieve the highest standards of security.</p>
                    <button className='font-bold py-3 px-6 lg:w-[40%] sm:w-[100%] my-4'>Learn more</button>
                </div>
                <div  className='py-5' >
                <FaRegHandshake className='w-20 h-20 m-auto text-blue-800 mb-5'/>
                    <p className='text-3xl font-bold text-gray-800'>24/7 Call Support</p>
                    <p className='text-gray-800 px-5 font-medium lg:px-20 my-3'>Our specialist experts are qualified in all major platforms.</p>
                    <button className='font-bold py-3 px-6 lg:w-[40%] sm:w-[100%] my-4'>Learn more</button>
                </div>
                <div className='py-5' >
                 <BsClouds className='w-20 h-20 m-auto text-blue-800 mb-5'/>
                    <p className='text-3xl font-bold text-gray-800'>Private Cloud</p>
                    <p className='text-gray-800 font-medium px-5 lg:px-20 my-3'>Harness the power of multiple 
                    private cloud providers.</p>
                    <button className='font-bold py-3 px-6 lg:w-[40%] sm:w-[100%] my-4'>Learn more</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About