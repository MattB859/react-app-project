import React from 'react'
import './partners.css';

const Partners = () => {
  return (
     <div name='partners' className='w-full'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center px-4'>
                <h2 className='text-4xl text-gray-500 font-normal partners'>Inspired by <span>exceptional partners</span></h2>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-1 px-2  mt-10 '>
                <div className='brand-img1 '></div>
                <div className='brand-img2'></div>
                <div className='brand-img3'></div>
                <div className='brand-img4'></div>      
            </div>
        </div>
    </div>
  )
}

export default Partners