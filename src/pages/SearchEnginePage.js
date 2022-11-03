import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

function SearchEnginePage() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-4" aria-hidden="true"></div>
      <div className="absolute left-0  m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          <div className="md:grid md:grid-cols-12">
            <div className="relative">
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
                <div className="relative inline-flex flex-col">
                  <img className="md:max-w-none mx-auto rounded -ml-24 " src='https://res.cloudinary.com/jscore/image/upload/v1667437055/Group_14134_riexi6.png' width="700" height="462" alt="Features bg" />
                </div>
              </Transition>
            </div>
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-6 md:mt-6 ml-96" data-aos="fade-right">
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
                <div className="ml-40 mt-32">
                  <h1 className="text-3xl md:text-3xl font-semibold leading-tighter tracking-tighter mb-4 mt-24 text-black" data-aos="zoom-y-out">The Influencer Search Engine</h1>
                  <p className="text-xs text-gray-600">Find authentic influencers in seconds and leverage their reach to grow your bussiness</p>
                  <p className="text-xs text-black mt-7 font-bold tracking-widest" data-aos="zoom-y-out">SUPPORTED NETWORKS</p>
                  <ul className='list-disc'>
                    <li className=' text-gray-600 ml-4 mt-2 text-base'>Twitter (soon)</li>
                    <li className='text-sm text-gray-600 ml-4 mt-2'>Instagram (soon)</li>
                    <li className='text-sm text-gray-600 ml-4 mt-2'>Youtube (soon)</li>
                  </ul>
                </div>
                <div className="mb-8 md:mb-0">
                </div>
              </Transition>
            </div>
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" >
            </div >
          </div >
        </div >
      </div >
    </section >
  );
}

export default SearchEnginePage;
