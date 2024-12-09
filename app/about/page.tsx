

import React from 'react'
import Nav2 from '@/components/Nav2'
import HeroLinks from '@/components/HeroLinks'
import Image from 'next/image'



const About = () => {
  return (
    <div>
      <Nav2/>
        <HeroLinks heading='Our About' url1='Home' url2='About'/>
        <section className="flex  flex-wrap lg:flex-nowrap items-center justify-between max-w-[1200px] mx-auto py-20 px-6">
      {/* Left Images Section */}
      <div className="grid grid-cols-2 gap-4 w-full lg:w-1/2">
        {/* Image 1 */}
        <div className="relative w-full h-[250px]">
          <Image
            src="/aboutus.png" // Replace with actual image
            alt="Food 1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        {/* Image 2 */}
        <div className="relative w-full h-[250px]">
          <Image
            src="/about3.png" // Replace with actual image
            alt="Food 2"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        {/* Image 3 */}
        <div className="relative col-span-2 w-full h-[250px]">
          <Image
            src="/about4.png" // Replace with actual image
            alt="Food 3"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Right Text Section */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
        {/* Heading */}
        <h3 className="text-[#FF9F0D] Headdesign text-lg font-semibold">About us</h3>
        <h1 className="text-black Headings text-3xl md:text-5xl font-bold mt-4">
          Food is an important part Of a balanced Diet
        </h1>
        <p className="text-black text-sm md:text-base mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-6">
          {/* Show More Button */}
          <button className="bg-[#FF9F0D] text-white py-2 px-6 rounded-lg text-sm md:text-base font-semibold hover:bg-[#e58907]">
            Show more
          </button>
          {/* Watch Video Button */}
          <button className="flex items-center gap-2 text-[#FF9F0D] font-semibold">
            <span className="p-2 bg-[#FF9F0D] text-white rounded-full">
              ▶
            </span>
            Watch video
          </button>
        </div>
      </div>
    </section>

    <section className=" px-4 md:px-[135px] max-w-[1320px] mx-auto py-[50px]">
        {/* Heading Section */}
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-[24px] md:text-[32px] font-normal text-[#FF9F0D] font-greatVibes whitespace-nowrap">
            Chefs
          </h1>
          <h2 className="text-[20px] md:text-[50px] font-bold text-black whitespace-nowrap md:whitespace-normal mt-2">
            <span className="text-[#FF9F0D]">Me</span>et Our Chef
          </h2>
        </div>

        {/* Images Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-[50px] justify-items-center">
          {/* Chef 1 */}
          <div className="flex flex-col items-center">
            <Image
              src={"/chef1.png"}
              alt="Chef 1"
              className="w-[200px] sm:w-[250px] md:w-[280px] lg:w-[305px] md:h-[280px] rounded-lg cursor-pointer transition-transform hover:scale-105"
              height={1000}
              width={1000}
            />
          </div>

          {/* Chef 2 */}
          <div className="flex flex-col items-center">
            <Image
              src={"/chef2.png"}
              alt="Chef 2"
              className="w-[200px] sm:w-[250px] md:w-[280px] lg:w-[305px] md:h-[280px] rounded-lg cursor-pointer transition-transform hover:scale-105"
              height={1000}
              width={1000}
            />
          </div>

          {/* Chef 3 */}
          <div className="flex flex-col items-center">
            <Image
              src={"/chef3.png"}
              alt="Chef 3"
              className="w-[200px] sm:w-[250px] md:w-[280px] lg:w-[305px] md:h-[280px] rounded-lg cursor-pointer transition-transform hover:scale-105"
              height={1000}
              width={1000}
            />
          </div>

          {/* Chef 4 */}
          <div className="flex flex-col items-center">
            <Image
              src={"/chef4.png"}
              alt="Chef 4"
              className="w-[200px] sm:w-[250px] md:w-[280px] lg:w-[305px] md:h-[280px] rounded-lg cursor-pointer transition-transform hover:scale-105"
              height={1000}
              width={1000}
            />
          </div>
        </div>
        
      </section>


      <div>
        <div className='flex max-w-[1273px] mt-7 mx-auto flex-col gap-2 py-6'>
            <p className='text-3xl Headdesign text-textp'>Testimonials</p>
            <h1 className='text-5xl Headings text-black font-bold'>What our client are saying</h1>
        </div>
    <div className="flex items-center justify-center py-24 px-4">
      <div className="relative bg-white max-w-[600px] mx-auto shadow-md py-10 px-8 text-center">
        {/* Profile Image */}
        <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2">
          <Image
            src="/review.png" // Replace with actual profile image
            alt="Profile"
            width={100}
            height={100}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>

        {/* Quote Icon */}
        <div className="text-[#FF9F0D] text-4xl mt-8">❝</div>

        {/* Review Text */}
        <p className="text-gray-600 mt-4 text-[16px] leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum.
        </p>

        {/* Rating Stars */}
        <div className="flex justify-center mt-4">
          <span className="text-[#FF9F0D] text-xl">★</span>
          <span className="text-[#FF9F0D] text-xl">★</span>
          <span className="text-[#FF9F0D] text-xl">★</span>
          <span className="text-[#FF9F0D] text-xl">★</span>
          <span className="text-gray-300 text-xl">★</span>
        </div>

        {/* Reviewer Info */}
        <div className="mt-4">
          <h3 className="text-gray-800 font-semibold text-lg">Alamin Hasan</h3>
          <p className="text-gray-500 text-sm">Food Specialist</p>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          <span className="w-3 h-3 bg-[#FF9F0D] rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        </div>
      </div>
    </div>
    </div>

    

        </div>
  )
}

export default About