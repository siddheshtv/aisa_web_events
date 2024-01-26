import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Quiz = () => {
  return (
    <div>
      <Navbar />
      <div className="my-24 px-4">
        <h1 className="text-center text-4xl lg:text-6xl font-bold pb-24">
          Quiz Registration
        </h1>
        <form
          className="max-w-4xl mx-auto grid lg:grid-cols-2 lg:gap-x-6 grid-cols-1"
          action="https://formspree.io/f/xeqyerlv"
          method="POST"
        >
          <div>
            <div className="mb-5">
              <label
                for="team-name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Team Name
              </label>
              <input
                type="text"
                name="team-name"
                id="team-name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="ABC TEAM"
                required
              />
            </div>

            <div className="mb-5">
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Team Leader Name
              </label>
              <input
                type="text"
                name="team-leader-name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Siddhesh Kulthe"
                required
              />
            </div>
            <div className="mb-5">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Team Leader Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="sid@kulthe.co"
                required
              />
            </div>
          </div>
          <div>
            <div className="mb-5">
              <label
                for="mem2-name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Member 2 Name
              </label>
              <input
                type="text"
                name="mem2-name"
                id="mem2-name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="XYZ"
                required
              />
            </div>
            <div className="mb-5">
              <label
                for="mem2-email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Member 2 Email
              </label>
              <input
                type="email"
                name="mem-2-email"
                id="mem2-email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="xyz@gmail.com"
                required
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 mt-3 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full hover:bg-yellow-400 focus:bg-yellow-400"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="pt-12 text-center">
          <p>
            Note: For this competition, a faculty member will also be joining
            your team.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Quiz;
