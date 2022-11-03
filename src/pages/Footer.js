import React from 'react';
function Footer() {
  const myStyle = {
    backgroundImage:
      "url('https://res.cloudinary.com/jscore/image/upload/v1667493056/Group_14465_mnordy.png')",

    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <footer style={myStyle}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">
          <div className="sm:col-span-12 lg:col-span-6">
            <div className="mb-2">
              <a href="/" className="inline-block" aria-label="Cruip">
                <img className="mx-auto" src='https://res.cloudinary.com/jscore/image/upload/v1667425539/Group_4260_tljwzw.png' width="200" height="200" alt="Hero" />
              </a>
            </div>
            <div class='pr-80'>
              <p className="text-xs leading-5  text-white">The only platform you will ever need for your content marketing and social media management.</p>
            </div>
          </div>
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-white font-medium mb-2">Products</h6>
            <ul className="text-xs">
              <li className="mb-2">
                <a href="#" className="text-white hover:text-green-400 transition duration-150 ease-in-out">Discovery</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-green-400 transition duration-150 ease-in-out">Curation</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-green-400transition duration-150 ease-in-out">Automation</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-green-400 transition duration-150 ease-in-out">Planner</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-green-400 transition duration-150 ease-in-out">Publish</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-green-400 transition duration-150 ease-in-out">Analytics</a>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-white font-medium mb-2">Resources</h6>
            <ul className="text-xs">
              <li className="mb-2">
                <a href="#" className="text-white hover:text-green-400 transition duration-150 ease-in-out">Partner Program</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-green-400 transition duration-150 ease-in-out">Blog</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-green-400 transition duration-150 ease-in-out">Knowledgebase</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-green-400 transition duration-150 ease-in-out">Changelog</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-green-400 transition duration-150 ease-in-out">Support</a>
              </li>
            </ul>
          </div>
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-white font-medium mb-2">Legal</h6>
            <ul className="text-xs">
              <li className="mb-2">
                <a href="#" className="text-white hover:text-green-400 transition duration-150 ease-in-out">Terms and Conditions</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-green-400 transition duration-150 ease-in-out">Privacy Policy</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white hover:text-green-400 transition duration-150 ease-in-out">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 ">
          <div className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <div>
              <p className="text-[12px] text-left text-white mr-4 mt-8 mb-4">You can download our app from.</p>
              <div className='flex space-x-3'>
                <a href="">
                  <img className="h-12 w-32 " src='https://res.cloudinary.com/jscore/image/upload/v1667502025/Group_5096_mjqhx2.png' width="100" height="100" alt="applestore" />
                </a>
                <a href="">
                  <img className="h-12 w-32 " src='https://res.cloudinary.com/jscore/image/upload/v1667502021/Group_5095_eemfya.png' width="100" height="100" alt="playstore" />
                </a>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex justify-start space-x-5 items-center'>
              <a href="">
                <img className="h-5 w-5 " src='https://res.cloudinary.com/jscore/image/upload/v1667501032/Subtraction_6_dennft.png' width="100" height="100" alt="facebook" />
              </a>
              <a href="">
                <img className="h-5 w-5 " src='https://res.cloudinary.com/jscore/image/upload/v1667501053/Path_21691_sqclrt.png' width="50" height="50" alt="twitter" />
              </a>
              <a href="">
                <img className="h-5 w-5 " src='https://res.cloudinary.com/jscore/image/upload/v1667501064/Image_10_rgeyqx.png' width="50" height="50" alt="instagram" />
              </a>
            </div>
            <p className="text-[10px] text-left text-white mr-4 mt-8">Ⓒ 2016-2017 Contentstudio</p>

          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
