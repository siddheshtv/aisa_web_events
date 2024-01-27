import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Debate = () => {
  return (
    <div>
      <Navbar />
      <div className="my-24 px-4">
        <div className="flex justify-center">
          <div className="lg:max-w-5xl">
            <h1 className="text-center text-4xl lg:text-6xl font-bold pb-6">
              AI & Robotics, Future of Humanity: Debate Competition
            </h1>
            <p className="text-center">Debate Competition Registration</p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="text-center py-24 max-w-3xl">
            <h1 className="text-xl font-bold py-3">Details</h1>
            <p>
              Total of 4 teams will be shortlisted for the debate competition.
              Every team member must include of 2 members. The topic of the
              debate competition is:{" "}
              <strong>AI & Robotics, Future of Humanity</strong>. Every team
              member has to prepare for both perspectives (FOR and AGAINST).
              Chits will be made containing all the participant names. A chit
              would be picked, and the selected participant has to speak for the
              topic, or against the topic. There will be a consistent cycle of
              DEFENDANT and OPPOSITION.
            </p>
            <p className="py-4">
              For example, Participant A from Team 1 spoke in favor of the
              topic, then the next chit-picked participant (could be of same
              team or other) will speak against the topic. This marks as 1
              Cycle. Such cycles will be carried until all participants have
              spoken.
            </p>
          </div>
        </div>

        <form
          className="max-w-4xl mx-auto grid lg:grid-cols-2 lg:gap-x-6 grid-cols-1"
          action="https://formspree.io/f/moqgjknr"
          method="POST"
        >
          <div>
            <div className="mb-5">
              <label
                for="team-name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Team Name
              </label>
              <input
                type="text"
                name="team-name"
                id="team-name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                placeholder="ABC TEAM"
                required
              />
            </div>

            <div className="mb-5">
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Team Leader Name
              </label>
              <input
                type="text"
                name="team-leader-name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                placeholder="Siddhesh Kulthe"
                required
              />
            </div>
            <div className="mb-5">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Team Leader Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                placeholder="sid@kulthe.co"
                required
              />
            </div>
            <div className="mb-5">
              <label
                for="number"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Team Leader Phone Number
              </label>
              <input
                type="number"
                name="number"
                id="number"
                className="bg-gray-50 border border-gray-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                placeholder="0123456789"
                required
              />
            </div>
          </div>
          <div>
            <div className="mb-5">
              <label
                for="mem2-name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Member 2 Name
              </label>
              <input
                type="text"
                name="mem2-name"
                id="mem2-name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                placeholder="XYZ"
                required
              />
            </div>
            <div className="mb-5">
              <label
                for="mem2-email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Member 2 Email
              </label>
              <input
                type="email"
                name="mem-2-email"
                id="mem2-email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                placeholder="xyz@gmail.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                for="dept"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Department
              </label>
              <input
                type="text"
                name="dept"
                id="dept"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                placeholder="AI-DS / CS / IT / EXTC / INSTRU / ELEC / FE"
                required
              />
            </div>
            <div className="mb-5">
              <label
                for="roll"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Roll Numbers
              </label>
              <input
                type="text"
                name="roll"
                id="roll"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                placeholder="Seperate using comma"
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
          <p></p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Debate;
