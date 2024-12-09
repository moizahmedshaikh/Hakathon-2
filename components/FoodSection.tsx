import React from 'react';
import Image from 'next/image';

const FoodSection = () => {
  return (
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
        <h3 className="text-[#FF9F0D] text-lg font-semibold">Why Choose us</h3>
        <h1 className="text-white text-3xl md:text-4xl font-bold mt-4">
        Exta ordinary taste
        And Experienced 
        </h1>
        <p className="text-gray-100 text-sm md:text-base mt-4 leading-relaxed">
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
  );
};

export default FoodSection;
