import React from "react";
import CountrySectionBackground from "./CountrySectionBackground";
import flag from "../../assets/images/flag.png";

const NationWithBlurredCountries: React.FC = () => {
  return (
    <section className="relative w-full">
      <div
        className="absolute inset-0 -z-20 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 "></div>

        <div className="absolute inset-0 transform scale-105 filter blur-lg">
          <div className="pointer-events-none w-full h-full">
            <CountrySectionBackground />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center  px-4">
        <div className="max-w-xl w-full text-center p-5  backdrop-blur-sm rounded-2xl   ">
          <img
            src={flag}
            alt="Nation flag"
            className="mx-auto w-24 sm:w-32 md:w-40  mt-3 "
          />

          <h2 className="mt-2 text-lg sm:text-2xl md:text-3xl font-semibold text-gray-800">
            We are coming to your nation very soon. Stay tuned.
          </h2>

          <button className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-red-600 text-white font-semibold text-base hover:bg-red-700 transition-colors">
            <span>Pre-register now</span>
            <svg
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NationWithBlurredCountries;
