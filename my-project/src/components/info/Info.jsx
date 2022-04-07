import React from 'react'

import { CheckIcon } from '@heroicons/react/outline';

const Info = () => {
  return (
    <div name='platforms' className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto px-4'>
        <h2 className='text-4xl lg:text-5xl text-gray-500 font-normal text-center cloud-header'>Your dedicated cloud, <span>your way</span></h2>
        <p className='text-2xl py-8 text-gray-500 text-center'>
            eCloud® Private platform allows you to tailor 
            your cloud solution to meet your exact needs. Dedicated 
            compute resource guarantees performance, and the choice 
            of storage options makes it easy to configure your bespoke 
            private cloud solution.
        </p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
            <div className='flex'>
                <div>
                    <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Cloud management</h3>
                    <p className='text-lg pt-2 pb-4'>
                    UKFast’s eCloud® Private platform allows you to tailor 
                    your cloud solution to meet your exact needs. Dedicated 
                    compute resource guarantees performance.
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
                    We offer a range of dedicated Microsoft Exchange servers, 
                    which are available on a number of different plans and servers 
                    to match your business needs.
                    </p>
                </div>
                </div>
                <div className='flex'>
                <div>
                    <CheckIcon className='w-7 mr-4 text-green-600' />
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Encryption Solutions</h3>
                    <p className='text-lg pt-2 pb-4'>
                    Cluster encryption uses HyTrust Data Control, encryption software 
                    originally built for the department of defence, designed to military 
                    standards.
                    </p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info