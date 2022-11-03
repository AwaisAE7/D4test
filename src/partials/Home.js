import React, { useState } from 'react';
import Transition from '../utils/Transition';
const myStyle = {
  backgroundImage:
    "url('https://res.cloudinary.com/jscore/image/upload/v1667403923/Header_lninlj.png')",
  height: '100%',
  marginTop: '-70px',
  fontSize: '50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};
function Home() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">
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
      <div style={myStyle}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="text-center pb-12 md:pb-16">
              <h1 className="text-5xl md:text-6xl font-semibold leading-tighter tracking-tighter mb-4 mt-24 text-white" data-aos="zoom-y-out">Influencer Discovery</h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-gray-200 leading-loose" data-aos="zoom-y-out" data-aos-delay="150">The fastest and most efficient method to</p>
                <p className="text-xl text-gray-200 leading-loose" data-aos="zoom-y-out" data-aos-delay="150">find social media influencers.</p>

                <button class="rounded-full ... text-white text-sm bg-gradient-to-r from-green-400 to-green-500 hover:from-pink-500 hover:to-yellow-500 ... sm:justify-center w-60 h-10">Try for free today!</button>

              </div>
            </div>


          </div>

        </div>
      </div>
      <section>
        <div className='-mt-24 mb-20' >
          <a href="https://youtu.be/LjYo32s8dBk">
              <img className="mx-auto shadow-2xl shadow-gray-400 drop-shadow-lg rounded-3xl border-4 border-white" src='https://res.cloudinary.com/jscore/image/upload/v1667433405/videoCover_qrmfyi.jpg' width="1200" height="432" alt="Hero" />
          </a>
        </div>
      </section>

      </Transition>
    </section>
  );
}

export default Home;