"use client";

import HeroLinks from "@/components/HeroLinks";
import Nav2 from "@/components/Nav2";
import React, { useState } from "react";
import Image from "next/image";
import { products } from "@/constant/products";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

const ShopDetails = ({ params }: { params: { shoppingDetail: string } }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const data = products.find((p) => p.id === parseInt(params.shoppingDetail));
  const [selectedImage] = useState<string[]>(
    data?.image || [] // Default to empty array if product data not found
  );

  return (
    <div>
      <Nav2 />
      <HeroLinks heading="Shop Details" url1="Home" url2="Shop Details" />

      <section className="my-20">
        <div className="max-w-[84%] mx-auto">
          <div className="bg-white w-full md:flex-row flex-col py-4 flex justify-center items-center gap-8">
            <div className="md:w-[15%] hidden md:flex flex-col gap-2 items-center">
              {selectedImage[1] && (
                <Image
                  className="shadow-lg"
                  src={selectedImage[1]}
                  width={132}
                  height={129}
                  alt="image"
                />
              )}
              {selectedImage[2] && (
                <Image
                  className="shadow-lg"
                  src={selectedImage[2]}
                  width={132}
                  height={129}
                  alt="image"
                />
              )}
              {selectedImage[3] && (
                <Image
                  className="shadow-lg"
                  src={selectedImage[3]}
                  width={132}
                  height={129}
                  alt="image"
                />
              )}
            </div>
            <div className="md:w-[491px] shadow-lg">
              {selectedImage[0] && (
                <Image
                  src={selectedImage[0]}
                  width={4000}
                  height={4000}
                  alt="image"
                />
              )}
            </div>

            {/* Right Side - Details */}
            <div className="lg:w-2/3 space-y-4">
              <span className="px-3 py-1 bg-green-200 text-green-800 rounded-md text-sm">
                In stock
              </span>
              <h1 className="text-3xl font-bold text-gray-800">{data?.name}</h1>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                quidem esse, veniam doloribus exercitationem modi. Illum
                consequatur distinctio eligendi ut. Enim voluptatibus temporibus
                illum repellat cupiditate doloremque officia magni quae.
              </p>
              <div className="text-2xl font-bold text-gray-800">
                {data?.role}
              </div>
              <div className="flex items-center gap-2 text-yellow-500">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>&#9733;</span>
                  ))}
                </div>
                <span className="text-gray-500">{"1"} Rating</span>
                <span className="text-gray-400">| {"5"} Reviews</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-500 overflow-hidden w-[120px]">
                  <button
                    onClick={decreaseQuantity}
                    className="w-1/3 h-full text-lg font-bold text-gray-600 hover:bg-gray-200 flex justify-center items-center"
                  >
                    -
                  </button>
                  <div className="w-1/3 h-full flex justify-center border-l border-r border-gray-500  items-center text-lg font-medium text-gray-800 border-x">
                    {quantity}
                  </div>
                  <button
                    onClick={increaseQuantity}
                    className="w-1/3 h-full text-lg font-bold text-gray-600 hover:bg-gray-200 flex justify-center items-center"
                  >
                    +
                  </button>
                </div>

                <button className="px-4 py-2 border border-gray-300 bg-textp  ">
                  Add to Wishlist
                </button>
              </div>

              <div className="text-gray-500 space-y-1">
                <p>
                  <span className="font-bold text-gray-800">Category:</span>
                </p>
                <p>
                  <span className="font-bold text-gray-800">Tag:</span>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-800">Share:</span>
                <div className="flex gap-3 text-gray-800">
                  <Link href="#">
                    <FaFacebook />
                  </Link>
                  <Link href="#">
                    <FaInstagram />
                  </Link>
                  <Link href="#">
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" px-4 md:px-[135px] max-w-[1320px] mx-auto pt-20 pb-24">
        {/* Heading Section */}

        <div className="flex justify-between w-full">
          <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl Headings pb-5 text-black">Similar Products</p>
          <p>a</p>
        </div>

        {/* Images Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Chef 1 */}
          <div>
            <div className="flex-1 ">
              <Image
                src={"/food1.png"}
                alt={"meal"}
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4 ">
              <h3 className="text-gray-800 font-bold text-lg">Fresh lime</h3>
              <p className="text-gray-600">32$</p>
            </div>
          </div>


          <div>
            <div className="flex-1">
              <Image
                src={"/food2.png"}
                alt={"meal"}
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4 ">
              <h3 className="text-gray-800 font-bold text-lg">Fresh lime</h3>
              <p className="text-gray-600">32$</p>
            </div>
          </div>


          <div>
            <div className="flex-1">
              <Image
                src={"/food3.png"}
                alt={"meal"}
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4 ">
              <h3 className="text-gray-800 font-bold text-lg">Fresh lime</h3>
              <p className="text-gray-600">32$</p>
            </div>
          </div>



          <div>
            <div className="flex-1">
              <Image
                src={"/food4.png"}
                alt={"meal"}
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4 ">
              <h3 className="text-gray-800 font-bold text-lg">Fresh lime</h3>
              <p className="text-gray-600">32$</p>
            </div>
          </div>







        </div>
      </section>
    </div>
  );
};

export default ShopDetails;
