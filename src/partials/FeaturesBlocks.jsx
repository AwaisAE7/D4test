import React from 'react';

function FeaturesBlocks() {
  const cardBackground1 = {
    backgroundImage:
      "url('https://res.cloudinary.com/jscore/image/upload/v1667483170/Mask_Group_45_qrpfoc.png')",
    height: '100%',
    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  const cardBackground2 = {
    backgroundImage:
      "url('https://res.cloudinary.com/jscore/image/upload/v1667483177/Mask_Group_46_ivjekz.png')",
    height: '100%',
    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  const cardBackground3 = {
    backgroundImage:
      "url('https://res.cloudinary.com/jscore/image/upload/v1667483186/Mask_Group_47_eitizl.png')",
    height: '100%',
    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="text-5xl md:text-4xl font-semibold leading-tighter tracking-tighter mb-4 mt-24 text-black" data-aos="zoom-y-out">Search, Sortlist and Reach Out</h1>
          </div>
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full" style={cardBackground1} >
              <img className="h-52 w-40 mt-10 " src='https://res.cloudinary.com/jscore/image/upload/v1667478631/Group_14190_haog3x.png' width="300" height="350" alt="Features bg" />
              <div>
                <h4 className="text-xl mb-1 mt-14 text-left">Find Unlimited Influencer</h4>
                <p className="text-gray-600 mt-4 text-left text-sm mb-8">Deep search tech for more than 7 million influencer</p>
              </div>
            </div>
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full" style={cardBackground2}>
              <img className="h-52 w-40 mt-10" src='https://res.cloudinary.com/jscore/image/upload/v1667478637/Group_14195_byrjn5.png' width="300" height="350" alt="Features bg" />
              <div>
                <h4 className="text-xl mb-1 mt-14 text-left">Analyze Data Point</h4>
                <p className="text-gray-600 mt-4 text-left text-sm mb-8">Engagment and quality analysis to help you pick real influencers</p>
              </div>
            </div>
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full" style={cardBackground3}>
              <img className="h-52 w-40 mt-10 " src='https://res.cloudinary.com/jscore/image/upload/v1667478655/Group_14203_yxkhvs.png' width="300" height="350" alt="Features bg" />
              <div>
                <h4 className="text-xl mb-1 mt-14 text-left">Reach Out</h4>
                <p className="text-gray-600 mt-4 text-left text-sm mb-8">Create influncer lists. export data and start a conversation</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
