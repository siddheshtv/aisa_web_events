import React from "react";
import years from "../../assets/25_years.png";
import cover from "../../assets/coverunsplash.jpg";

const Hero = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative min-h-screen flex justify-center items-center z-10">
        <div className="py-3 lg:py-10 absolute z-0 w-full">
          <div className="px-4 mx-auto lg:max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-y-12 lg:gap-y-0 lg:gap-x-12 lg:grid-cols-3">
              <div className="col-span-2">
                <p className="text-base font-semibold text-blue-600 uppercase pt-12 lg:pt-0">
                  For the students, By the students
                </p>
                <h1 className="mt-4 text-3xl font-bold text-gray-50 lg:mt-8 xl:text-7xl">
                  Artificial Intelligence Student Association
                </h1>
                <p className="mt-4 text-base text-gray-50 lg:mt-8 sm:text-xl">
                  AISA conducts technical events for Artificial Intelligence and
                  Data Science branch
                </p>

                <a
                  href="#events"
                  title=""
                  className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                  role="button"
                >
                  View Events
                  <svg
                    className="w-6 h-6 ml-8 -mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </div>

              <div className="flex justify-center">
                <img className="w-4/5 lg:w-full" src={years} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="object-cover absolute inset-0 w-full h-full brightness-50"
        src={cover}
        alt="Cover"
      />
    </div>
  );
};

export default Hero;
