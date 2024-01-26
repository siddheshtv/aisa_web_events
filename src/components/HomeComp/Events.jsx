import React from "react";

const Events = () => {
  return (
    <div className="my-12 lg:my-24 px-4">
      <h1
        className="text-center text-3xl lg:text-5xl font-bold py-0 lg:py-5"
        id="events"
      >
        Current Events
      </h1>
      <div className="py-16 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-12 justify-center items-center">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="/">
            <img
              className="rounded-t-lg h-[250px]"
              src="https://kidscareschool.org.in/wp-content/uploads/2016/11/images-11-1.png"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Quiz
              </h5>
            </a>

            <a
              href="/quiz-register"
              className="inline-flex items-center px-6 py-4 mt-3 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full hover:bg-yellow-400 focus:bg-yellow-400"
            >
              Join Now
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="/">
            <img
              className="rounded-t-lg h-[250px]"
              src="https://www.shutterstock.com/image-vector/man-woman-candidates-discussing-on-600nw-1747586771.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Debate
              </h5>
            </a>

            <a
              href="/debate-register"
              className="inline-flex items-center px-6 py-4 mt-3 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full hover:bg-yellow-400 focus:bg-yellow-400"
            >
              Join Now
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
