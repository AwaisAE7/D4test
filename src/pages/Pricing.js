import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

function Pricing() {
    const cardBackground1 = {
        backgroundImage:
            "url('https://res.cloudinary.com/jscore/image/upload/v1667509062/wheat_ojg19t.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <section className="bg-gray-50 pt-40">

            <div className="md:grid md:grid-cols-12">

                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 md:mt-6" data-aos="fade-right">
                    <Transition
                        show={true}
                        appear={true}
                        className="w-full relative left-12 -top-40"
                        enter="transition ease-in-out duration-700 transform order-first"
                        enterStart="opacity-0 translate-y-16"
                        enterEnd="opacity-100 translate-y-0"
                        leave="transition ease-in-out duration-300 transform absolute"
                        leaveStart="opacity-100 translate-y-0"
                        leaveEnd="opacity-0 -translate-y-16"
                    >
                        <div className="ml-40 mt-32">
                            <h1 className="text-3xl md:text-3xl font-semibold leading-tighter tracking-tighter mb-4 mt-24 text-black" data-aos="zoom-y-out">Simple & Transparent Pricing</h1>
                            <ul className='mt-10 -ml-4'>
                                <li className=' text-sm text-gray-600 ml-4 mt-2 flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-green-400 mr-2 pt-1">
                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                    </svg>
                                    Unlimited Searches</li>
                                <li className='text-sm text-gray-600 ml-4 mt-2 flex'>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-green-400 mr-2 pt-1">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>Unlimited Saved lists</li>
                                <li className='text-sm text-gray-600 ml-4 mt-2 flex'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-green-400 mr-2 pt-1">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>Twitter Influencers</li>
                                <li className=' text-gray-600 ml-4 mt-2 text-base flex'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-green-400 mr-2 pt-1">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>Instagram Influencers</li>
                                <li className='text-sm text-gray-600 ml-4 mt-2 flex'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-green-400 mr-2 pt-1">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>Youtube Influencers (soon)</li>
                                <li className='text-sm text-gray-600 ml-4 mt-2 flex'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-green-400 mr-2 pt-1">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>Export data</li>
                                <li className=' text-gray-600 ml-4 mt-2 text-base flex'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-green-400 mr-2 pt-1">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>Influencer's granular details</li>
                                <li className='text-sm text-gray-600 ml-4 mt-2 flex'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-green-400 mr-2 pt-1">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>CPM estimation</li>
                                <li className='text-sm text-gray-600 ml-4 mt-2 flex'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-green-400 mr-2 pt-1">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>3rd party integrations</li>
                                <li className='text-sm text-gray-600 ml-4 mt-2 flex'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-green-400 mr-2 pt-1">
                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                </svg>Future Updates Included</li>
                            </ul>
                        </div>
                    </Transition>
                </div>

                <div className="w-[500px] h-[352px] shadow-2xl shadow-gray-500 bg-white rounded-2xl ml-10">
                    <Transition
                        show={true}
                        appear={true}
                        className="w-full"
                        enter="transition ease-in-out duration-700 transform order-first"
                        enterStart="opacity-0 translate-y-16"
                        enterEnd="opacity-100 translate-y-0"
                        leave="transition ease-in-out duration-300 transform absolute"
                        leaveStart="opacity-100 translate-y-0"
                        leaveEnd="opacity-0 -translate-y-16"
                    >
                        <div className="rounded-br-full rounded-t pt-8 pl-10 bg-gradient-to-r from-blue-500 to-cyan-500 ...">
                            <div className='h-80 w-[420px] space-y-4' style={cardBackground1}>
                                <p className='text-yellow-400'>WAS</p>
                                <p className='text-yellow-400 text-2xl font-bold'><s>$199/lifetime</s></p>
                                <p className='text-[50px] text-white'>-</p>
                                <p className='text-white'>NOW</p>
                                <p className='text-white text-2xl font-bold'>$99/lifetime</p>
                                <a href=''>
                                <p className='text-black text-lg font-bold text-right'>BUY NOW</p>
                                </a>
                            </div>
                        </div>

                    </Transition>
                </div>
            </div >
        </section >
    );
}

export default Pricing;
