import React from 'react'

import { CheckIcon } from '@heroicons/react/outline';

const paragraph = 'eCloud® Private platform allows you to tailor your cloud solution to meet your exact needs. Dedicated compute resource guarantees performance, and the choice of storage options makes it easy to configure your bespoke private cloud solution.'
                                
const Info = () => {

    const platforms = 
        {
            title_1 : 'Cloud management',
            info_1 : 'eCloud® Private platform allows you to tailor your cloud solution to meet your exact needs. Dedicated compute resource guarantees performance and storage.',
            title_2 : 'Cloud security',
            info_2 : "With over 20 years experience, eCloud is proud to be the UK's largest private cloud provider. We're passionate about helping our customers reach their business outcomes.",
            title_3 : 'Web Server Hosting',
            info_3 : 'We make web server hosting simple. With eCloud, total control is at your fingertips. From eCloud you can monitor and manage each element of your web server hosting.',            
            title_4 : 'Penetration testing',
            info_4 : 'Conducting penetration testing is an essential part in keeping your business protected against the latest attacks, in safeguarding your critical assets.',    
            title_5 : 'eCommerce hosting',
            info_5 : 'eCommerce hosting is the backbone of any eCommerce business. eCloud is the right hosting provider that can provide you with expertise and reliable service as standard.',             
            title_6 : 'Database hosting',
            info_6 : 'When your business is critically dependant on data, we know that having a secure, reliable database server solution in place to host and safeguard your data is paramount.',     
            title_7 : 'Exchange server hosting',
            info_7 : 'We offer a range of dedicated Microsoft Exchange servers, which are available on a number of different plans and servers to match your business needs.',         
            title_8 : 'Encryption Solutions',
            info_8 : 'Cluster encryption uses HyTrust Data Control, encryption software originally built for the department of defence, designed to military standards.',             
        };


    return (
        <div name='platforms' className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto px-4'>
                <h2 className='text-4xl lg:text-5xl text-gray-500 font-normal text-center cloud-header'>Your dedicated cloud, <span>your way</span></h2>
                <p className='text-2xl py-8 text-gray-500 text-center'>{paragraph}</p> 
            </div>
            
            <div className='max-w-[1240px] mx-auto px-4'>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
                    <div className='flex' >
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-600' />
                        </div>
                        <div >
                            <h3 className='font-bold text-lg'>{platforms.title_1}</h3>
                            <p className='text-lg pt-2 pb-4'>{platforms.info_1}</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-600' />
                        </div>
                        <div >
                            <h3 className='font-bold text-lg'>{platforms.title_2}</h3>
                            <p className='text-lg pt-2 pb-4'>{platforms.info_2}</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-600' />
                        </div>
                        <div >
                            <h3 className='font-bold text-lg'>{platforms.title_3}</h3>
                            <p className='text-lg pt-2 pb-4'>{platforms.info_3}</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-600' />
                        </div>
                        <div >
                            <h3 className='font-bold text-lg'>{platforms.title_4}</h3>
                            <p className='text-lg pt-2 pb-4'>{platforms.info_4}</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-600' />
                        </div>
                        <div >
                            <h3 className='font-bold text-lg'>{platforms.title_5}</h3>
                            <p className='text-lg pt-2 pb-4'>{platforms.info_5}</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-600' />
                        </div>
                        <div >
                            <h3 className='font-bold text-lg'>{platforms.title_6}</h3>
                            <p className='text-lg pt-2 pb-4'>{platforms.info_6}</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-600' />
                        </div>
                        <div >
                            <h3 className='font-bold text-lg'>{platforms.title_7}</h3>
                            <p className='text-lg pt-2 pb-4'>{platforms.info_7}</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <CheckIcon className='w-7 mr-4 text-green-600' />
                        </div>
                        <div >
                            <h3 className='font-bold text-lg'>{platforms.title_8}</h3>
                            <p className='text-lg pt-2 pb-4'>{platforms.info_8}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info