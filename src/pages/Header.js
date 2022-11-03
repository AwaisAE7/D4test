import React, { useState, useEffect } from 'react';

function Header() {

  const [top, setTop] = useState(true);
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
      <nav>
      <div className=" mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-24">
          <div className="flex-shrink-0 mr-4">
            <a href="/" className="block" aria-label="Cruip">
            <img className="mx-auto" src='https://res.cloudinary.com/jscore/image/upload/v1667425539/Group_4260_tljwzw.png' width="200" height="200" alt="Hero" />
            </a>
          </div>
         
            <ul className="flex flex-grow justify-end flex-wrap items-center">
            <li>
                <a href="/" className="font-medium text-gray-300 hover:text-gray-900 px-8 py-3 flex items-center transition duration-150 ease-in-out">Products</a>
              </li>
              <li>
                <a href="/" className="font-medium text-gray-300 hover:text-gray-900 px-8 py-3 flex items-center transition duration-150 ease-in-out">Pricing</a>
              </li>
              <li>
                <a href="/" className="font-medium text-gray-300 hover:text-gray-900 px-8 py-3 flex items-center transition duration-150 ease-in-out">Integration</a>
              </li>
              <li>
                <a href="/" className="font-medium text-gray-300 hover:text-gray-900 px-8 py-3 flex items-center transition duration-150 ease-in-out">Contact Us</a>
              </li>
              <li>
                <a href="/" className="font-medium text-gray-300 hover:text-gray-900 px-10 py-3 flex items-center transition duration-150 ease-in-out">Sign In</a>
              </li>
              <li>
                <a href="/" className="btn-sm   ml-3">
                <button class="rounded-full ... text-blue-400 hover:bg-gray-800 text-sm bg-white sm:justify-center w-40 h-10">Try for free today!</button>                  
                </a>
              </li>
            </ul>

       

        </div>
      </div>
      </nav>
    </header>
  );
}

export default Header;
