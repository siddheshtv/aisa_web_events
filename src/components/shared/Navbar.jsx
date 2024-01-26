import React from "react";
import aisa_logo from "../../assets/aisa.png";
import ioit_logo from "../../assets/ioit_text_dark.png";

const Navbar = () => {
  return (
    <div className="py-4">
      <header class="bg-[#FCF8F1] bg-opacity-30">
        <div class="px-4 mx-auto sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16 lg:h-20">
            <div class="flex-shrink-0">
              <a href="/" title="" class="flex space-x-3 items-center">
                <img class="w-auto h-24" src={aisa_logo} alt="" />
                <img class="w-auto h-14" src={ioit_logo} alt="" />
              </a>
            </div>

            <button
              type="button"
              class="hidden p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              <svg
                class="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 8h16M4 16h16"
                ></path>
              </svg>

              <svg
                class="hidden w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <div class="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <a
                href="https://aisaioit.in/"
                title=""
                class="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Home{" "}
              </a>

              <a
                href="https://aisaioit.in/contact"
                title=""
                class="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Contact{" "}
              </a>

              <a
                href="https://aissmsioit.org/"
                title=""
                class="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                IOIT Website{" "}
              </a>
            </div>

            <a
              href="/#events"
              title=""
              class="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
              role="button"
            >
              {" "}
              View Current Events{" "}
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
