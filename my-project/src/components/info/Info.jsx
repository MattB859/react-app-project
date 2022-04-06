import React from 'react'

import { CheckIcon } from '@heroicons/react/outline';

const Info = () => {
  return (
    <div name='platforms' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl font-bold text-center'>All-In-One Platform</h2>
        <p className='text-2xl py-8 text-gray-500 text-center'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
            ab. Officia sunt nulla aspernatur culpa, eaque tenetur excepturi
            nostrum tempore.
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
            <div className='flex'>
                <div>
                    <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Cloud management</h3>
                    <p className='text-lg pt-2 pb-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores maxime deserunt voluptatibus consequatur similique
                    voluptates!
                    </p>
                </div>
                </div>
                <div className='flex'>
                <div>
                    <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Cloud security</h3>
                    <p className='text-lg pt-2 pb-4'>
                    With over 20 years experience, eCloud is proud to be the 
                    UK's largest private cloud provider. We're passionate about helping our 
                    customers reach their business outcomes.
                    </p>
                </div>
                </div>
                <div className='flex'>
                <div>
                    <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Web Server Hosting</h3>
                    <p className='text-lg pt-2 pb-4'>
                    We make web server hosting simple. With eCloud, 
                    total control is at your fingertips. From eCloud 
                    you can monitor and manage each element of your web server hosting. 
                 
                    </p>
                </div>
                </div>
                <div className='flex'>
                <div>
                    <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Penetration testing</h3>
                    <p className='text-lg pt-2 pb-4'>
                    Conducting penetration testing is an essential part in keeping 
                    your business protected against the latest attacks, in safeguarding
                    your critical assets. 
                    </p>
                </div>
                </div>
                <div className='flex'>
                <div>
                    <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>eCommerce hosting</h3>
                    <p className='text-lg pt-2 pb-4'>
                    eCommerce hosting is the backbone of any eCommerce business. 
                    eCloud is the right hosting provider that can provide 
                    you with expertise and reliable service as standard.
                    </p>
                </div>
                </div>
                <div className='flex'>
                <div>
                    <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Database hosting</h3>
                    <p className='text-lg pt-2 pb-4'>
                    When your business is critically dependant on data, we know 
                    that having a secure, reliable database server solution in 
                    place to host and safeguard your data is paramount.
                    </p>
                </div>
                </div>
                <div className='flex'>
                <div>
                    <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Exchange server hosting</h3>
                    <p className='text-lg pt-2 pb-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores maxime deserunt voluptatibus consequatur similique
                    voluptates!
                    </p>
                </div>
                </div>
                <div className='flex'>
                <div>
                    <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Exchange server hosting</h3>
                    <p className='text-lg pt-2 pb-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores maxime deserunt voluptatibus consequatur similique
                    voluptates!
                    </p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info