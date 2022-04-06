import React from 'react'

const Hero = () => {
  return (
    <div name='home' className='w-full h-[700px] bg-zinc-200 flex flex-col justify-between'>

      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <div className='w-full h-full object-cover mix-blend-overlay bg-hero'></div>
      </div>

        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto z-10'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
    
                <h1 className='py-3 text-4xl text-center lg:text-left lg:text-5xl text-white md:text-6xl font-medium'>Secure & Scalable Private Cloud Management</h1>
                <p className='text-1xl text-center xl:text-left text-slate-100 my-2'>Whatever your cloud computing needs, our team 
                of experts can  help you cost effectively and quickly transform your business.</p>
                <button className='font-bold py-4 px-6 sm:w-[60%] my-4'>Get Started</button>
            </div>
            <div>
                <div className='w-full hero-img'></div>
            </div>
        </div>
    </div>
  )
}

export default Hero