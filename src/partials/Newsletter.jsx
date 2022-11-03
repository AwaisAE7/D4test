import React from 'react';

function Newsletter() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 mb-40">
        <div className="py-2 md:py-2">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="text-5xl md:text-4xl font-semibold leading-tighter tracking-tighter mb-4 mt-24 text-black" data-aos="zoom-y-out">Solution for every kind of bussiness</h1>
          </div>
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-2xl h-full">
              <img className="h-24 w-28 mt-10" src='https://res.cloudinary.com/jscore/image/upload/v1667489046/icon2_hxvdt3.png' width="300" height="350" alt="Features bg" />
              <div>
                <h4 className="text-xl mb-1 mt-10 text-center">Agency</h4>
                <p className="text-gray-600 mt-4 text-center text-sm mb-8">Whether you are a small agency or a
                  big one, our influencer database will
                  help you get better results for your
                  clients.</p>
              </div>
            </div>
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-2xl h-full">
              <img className="h-24 w-28 mt-10" src='https://res.cloudinary.com/jscore/image/upload/v1667489069/icon-1_ynxjfu.png' width="300" height="350" alt="Features bg" />
              <div>
                <h4 className="text-xl mb-1 mt-10 text-center">B2C</h4>
                <p className="text-gray-600 mt-4 text-center text-sm mb-8">Having influencers from almost every
                  niche and industry makes it possible
                  to help you create powerful B2C
                  marketing campaigns.</p>
              </div>
            </div>
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-2xl h-full">
              <img className="h-24 w-28 mt-10" src='https://res.cloudinary.com/jscore/image/upload/v1667489079/icon-2_qwylb2.png' width="300" height="350" alt="Features bg" />
              <div>
                <h4 className="text-xl mb-1 mt-10 text-center">B2B</h4>
                <p className="text-gray-600 mt-4 text-center text-sm mb-8">Our search engine makes Influencer
                  prospecting and marketing easy for
                  the B2B industry as well.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Newsletter;
