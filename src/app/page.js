"use client";

import Image from "next/image";

import StudentImg from "../images/png.png";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <header>
     
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        {/* Curved Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 rounded-bl-[120px] rounded-br-[120px] h-[90vh] md:h-[75vh] -z-10"></div>

        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          
          {/* Left */}
          <div className="z-10 flex flex-col justify-center text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-snug md:leading-tight text-gray-900">
              Beudy – The Smartest Choice <br />
              for Elevating Your <span className="text-blue-600">Knowledge</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
              Through a combination of lectures, readings, and discussions,
              students will gain a solid foundation in educational psychology.
            </p>

            <div className="flex gap-4 mt-6 sm:mt-8 flex-wrap justify-center md:justify-start">
              <button className="px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
                Buy Now
              </button>

              <button className="px-6 py-3 sm:px-8 sm:py-4 border border-gray-800 text-gray-800 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition">
                Explore More
              </button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="relative flex justify-center md:justify-end z-10 mt-10 md:mt-0">
            {/* Vertical Background Text */}
            <h1 className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-100 text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-wider rotate-90 select-none hidden md:block -z-10">
              BEUDY
            </h1>

            <Image
              src={StudentImg}
              alt="Student"
              className="w-[220px] sm:w-[280px] md:w-[400px] object-contain drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
