import React from "react";
import cap from "../../assets/images/cap.png";

const About: React.FC = () => {
  return (
    <section className="w-full bg-[#F9E7E7] py-16 px-6 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-16">
        <div className="flex  flex-col justify-between">
          <div className="w-14 h-14 bg-white rounded-2xl shadow flex items-center justify-center">
            <img src={cap} alt="Serve IQ Logo" className="w-8 h-8" />
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#D00000] ">
            About Serve-IQ
          </h2>
        </div>

        <div className="flex-1">
          <p className="text-[#1E293B] text-sm md:text-base">
            Nepal Edu is a free platform built by a team with a long history in
            education and tech.
          </p>
          <p className="text-gray-700 text-sm md:text-base mt-2 font-medium">
            Our platform contains recorded videos with syllabuses prescribed by
            the national Ministry of Education, Science and Technology (MOEST),
            textbooks by the Center for Education and Human Resource Development
            (CEHRD).
          </p>
        </div>
      </div>

      <div className="max-w-6xl w-full mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-[#E5E5E5] pt-8">
        <div className="flex flex-col items-center md:items-start px-4">
          <h3 className="text-lg font-semibold text-black mb-2">
            Free Trial For a Month
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            NepalEDU empowers students and teachers with free access to quality
            educational resources.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start px-4 md:border-x md:border-[#D00000]">
          <h3 className="text-lg font-semibold text-black mb-2">
            Multiple Property Support
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            We bridge the gap in access to quality education, especially for
            those in remote areas of Nepal.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start px-4">
          <h3 className="text-lg font-semibold text-black mb-2">
            User-Friendly UI & Interaction
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            NepalEDU is transforming the educational landscape in Nepal through
            digital learning.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <button className="bg-[#D00000] hover:bg-[#a30000] text-white rounded-full px-6 py-2 text-sm font-medium transition-all duration-300">
          More About Us
        </button>
      </div>
    </section>
  );
};

export default About;
