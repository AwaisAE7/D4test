import React from 'react';
function Testimonials() {
  return (
    <section className="relative bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center pb-4 md:pb-4">
            <h1 className="text-5xl md:text-4xl font-bold leading-tighter tracking-tighter mb-0 text-black" data-aos="zoom-y-out">Data You'll Get With Us</h1>
          </div>
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            <div className="relative flex flex-col items-left p-6 bg-transparent">
              <img className="h-10 w-10 mt-10 " src='https://res.cloudinary.com/jscore/image/upload/v1667485845/Group_14175_hmsfqq.png' width="300" height="350" alt="Features bg" />
              <div>
                <h4 className="text-xl mb-1 mt-4 text-left">Demographics</h4>
                <p className="text-gray-600 mt-1 text-left text-xs mb-8">Access age and gender statistics for each
                  influencers's audience We sample
                  demographic data from every influencers's
                  following to ensure your campaign reaches
                  target market.</p>
                <a class="text-blue-600 text-xs" href="">Learn More ></a>
              </div>
            </div>
            <div className="relative flex flex-col items-left p-6 bg-transparent">
              <img className="h-10 w-12 mt-10" src='https://res.cloudinary.com/jscore/image/upload/v1667485851/Group_5155_mqkmhm.png' width="300" height="350" alt="Features bg" />
              <div>
                <h4 className="text-xl mb-1 mt-4 text-left">Engagement Stats</h4>
                <p className="text-gray-600 mt-1 text-left text-xs mb-12">We calculate the amount of engagement
                  each profile gets, to maximize your money.
                  Metrics like this ensure you don't fall victim
                  to influencers with fake followers.</p>
                <a class="text-blue-600 text-xs" href="">Learn More ></a>
              </div>
            </div>
            <div className="relative flex flex-col items-left p-6 bg-transparent">
              <img className="h-10 w-10 mt-10 " src='https://res.cloudinary.com/jscore/image/upload/v1667485860/Group_14176_hdkwaf.png' width="300" height="350" alt="Features bg" />
              <div>
                <h4 className="text-xl mb-1 mt-4 text-left">Niche</h4>
                <p className="text-gray-600 mt-1 text-left text-xs mb-12">Our advanced A1 system analyzes
                  every profile so that you can search our
                  influencer database for almost any
                  niche imaginable.</p>
                <a class="text-blue-600 text-xs" href="">Learn More ></a>
              </div>
            </div>
          </div>
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            <div className="relative flex flex-col items-left p-6 bg-transparent">
              <img className="h-10 w-10 mt-10 " src='https://res.cloudinary.com/jscore/image/upload/v1667487682/Group_14177_hglnar.png' width="300" height="350" alt="Features bg" />
              <div>
                <h4 className="text-xl mb-1 mt-4 text-left">Location</h4>
                <p className="text-gray-600 mt-1 text-left text-xs mb-8">We also allow you to Search by
                  You can find local influencers so that you
                  can target audience on the hyper-local level.</p>
                <a class="text-blue-600 text-xs" href="">Learn More ></a>
              </div>
            </div>
            <div className="relative flex flex-col items-left p-6 bg-transparent">
              <img className="h-10 w-12 mt-10" src='https://res.cloudinary.com/jscore/image/upload/v1667487687/Group_14178_i5mg1b.png' width="300" height="350" alt="Features bg" />
              <div>
                <h4 className="text-xl mb-1 mt-4 text-left">Contact Info <p class='text-green-400 inline'>(Roadmap)</p></h4>
                <p className="text-gray-600 mt-1 text-left text-xs mb-4">We'll also provide you the Contact info Of
                  tens of thousands of influencers. Since you
                  are contacting them directly, that means
                  you get the best price Most middleman
                  services charge massive markup.</p>
                <a class="text-blue-600 text-xs" href="">Learn More ></a>
              </div>
            </div>
            <div className="relative flex flex-col items-left p-6 bg-transparent">
              <img className="h-10 w-10 mt-10 " src='https://res.cloudinary.com/jscore/image/upload/v1667487695/Group_14179_andhuk.png' width="300" height="350" alt="Features bg" />
              <div>
                <h4 className="text-xl mb-1 mt-4 text-left">Cost Estimation <p class='text-green-400 inline'>(Roadmap)</p></h4>
                <p className="text-gray-600 mt-1 text-left text-xs mb-8">If you Want to compare the
                  effectiveness of different influencers
                  inside the platform, you'll able to use
                  our CPM tool to estimate costs.</p>
                <a class="text-blue-600 text-xs" href="">Learn More ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;