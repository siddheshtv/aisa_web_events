import React from "react";
import aisa_logo from "../../assets/aisa.png";
import ioit_logo from "../../assets/ioit_text_dark.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#f3f3f3] dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
              <div className="mb-6 md:mb-0 px-4">
                <a href="/" className="flex items-center">
                  <img src={ioit_logo} className="h-24 me-3" alt="AISA Logo" />
                </a>
              </div>
              <div className="mb-6 md:mb-0">
                <a href="/" className="flex items-center">
                  <img src={aisa_logo} className="h-24 me-3" alt="AISA Logo" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-y-6 lg:gap-6 lg:grid-cols-2">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://aissmsioit.org/"
                      className="hover:underline"
                    >
                      AISSMS IOIT Website
                    </a>
                  </li>
                  <li>
                    <a href="https://aisaioit.in/" className="hover:underline">
                      AISA Home
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://www.instagram.com/aisa_ioit?igsh=MTEzdDk3MmNscGMwOQ"
                      className="hover:underline "
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/artificial-intelligence-student-association?trk=blended-typeahead"
                      className="hover:underline"
                    >
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-0">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{" "}
              <a href="https://aissmsioit.org/" className="hover:underline">
                AISSMS IOIT
              </a>
              . All Rights Reserved.
            </span>
            <span className="py-4">
              Developed with ❤️ + ☕ by Siddhesh Kulthe.{" "}
              <a href="https://linkedin.com/in/siddheshkulthe">
                <span className="underline underline-offset-4">
                  LinkedIn &rarr;
                </span>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
