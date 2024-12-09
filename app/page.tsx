import AbountUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import MenuSec from "@/components/MenuSec";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Review from "@/components/Review";
import FoodSection from "@/components/FoodSection";

export default function Home() {
  return (
    <div className="bg-[#0D0D0DF2]">
      <Navbar />
      <Hero />
      <AbountUs />
      <FoodSection />

      <MenuSec />

      <section className=" px-4 md:px-[135px] max-w-[1320px] mx-auto py-[50px]">
        {/* Heading Section */}
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-[24px] md:text-[32px] font-normal text-[#FF9F0D] font-greatVibes whitespace-nowrap">
            Chefs
          </h1>
          <h2 className="text-[20px] md:text-[50px] font-bold text-white whitespace-nowrap md:whitespace-normal mt-2">
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
        <div className="flex justify-center mt-20">
          <Button className="bg-transparent border-2 font-[400] rounded-full px-8 py-3 border-textp">
            <Link href="/ourChefs">See More</Link>
          </Button>
        </div>
      </section>

      <Review />

      <FoodSection />
    </div>
  );
}
