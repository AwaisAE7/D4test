import React from 'react';
const myStyle = {
  backgroundImage:
    "url('https://res.cloudinary.com/jscore/image/upload/v1667490848/Group_14464_rrkxkw.png')",
  height: '100%',
  marginTop: '-70px',
  fontSize: '50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};
function QuestionPage() {

  return (
    <section className="relative" >
      <div className='p-10' style={myStyle}>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 mt-10 mb-10">
          <div className="py-2 md:py-2">
            <div className="relative flex flex-col items-center bg-white rounded shadow-2xl h-40">
              <h1 className="text-2xl md:text-2xl font-bold leading-tighter tracking-tighter mb-4 mt-8 text-black" data-aos="zoom-y-out">Got Any Questions?</h1>
              <button class="rounded-full ... text-white text-sm bg-gradient-to-r from-green-400 to-green-500 hover:from-pink-500 hover:to-yellow-500 ... sm:justify-center w-60 h-10">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuestionPage;