import React from 'react';

const Banner = () => {
    return (
        <div className='md:w-[90%] mx-auto mt-12'>
            <div
  className="hero min-h-[60vh] rounded-[2rem]"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/qYmGxL4/banner.png)",
    backgroundPosition: "top"
  }}>
  <div className="hero-overlay bg-opacity-30 rounded-[2rem]"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-2xl">
      <h1 className="mb-5 text-4xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
      <p className="mb-5 text-sm">
      Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
      </p>
      <button className="btn btn-primary mr-3 rounded-full bg-[#0BE58A] border-0 text-black hover:bg-[#0BE58A]">Explore Now</button>
      <button className="btn bg-transparent text-white rounded-full hover:bg-[#0BE58A]">Our Feedback</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;