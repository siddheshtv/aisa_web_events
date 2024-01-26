import React from "react";
import years from "../../assets/25_years.png";

const Hero = () => {
  return (
    <div>
      <div class="bg-white">
        <section class="bg-[#FCF8F1] bg-opacity-30 py-3 lg:py-10">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-3">
              <div className="col-span-2">
                <p class="text-base font-semibold text-blue-600 uppercase pt-12 lg:pt-0">
                  For the students, By the students
                </p>
                <h1 class="mt-4 text-3xl font-bold text-black lg:mt-8 xl:text-7xl">
                  Artificial Intelligence Student Association
                </h1>
                <p class="mt-4 text-base text-black lg:mt-8 sm:text-xl"></p>

                <a
                  href="#events"
                  title=""
                  class="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                  role="button"
                >
                  View Events
                  <svg
                    class="w-6 h-6 ml-8 -mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </div>

              <div className="flex justify-center">
                <img class="w-1/2 lg:w-full" src={years} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
