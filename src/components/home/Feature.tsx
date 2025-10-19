import React, { useState, useEffect } from "react";
import { features } from "../../data/feature";

const Feature: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % features.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const feature = features[current];

  return (
    <div className="w-full flex flex-col items-center justify-center py-12 px-6 bg-white">
      {/* Top Text */}
      <div className="max-w-6xl w-full mb-6">
        <p className="text-[16px] font-semibold text-[#D00000] mb-1">
          Our Features
        </p>
        <p className="text-sm text-[#808080]">
          What happens when you book a{" "}
          <span className="font-semibold text-red-600">DEMO</span> with us
        </p>
      </div>

      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 w-full p-4">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-72 object-cover rounded-xl"
            />
          </div>

          <div className="md:w-1/2 w-full px-6 py-4">
            <h2 className="text-xl md:text-2xl font-semibold text-[#D00000] mb-4">
              {feature.title}
            </h2>

            <ul className="space-y-2">
              {feature.points.map((point, idx) => (
                <li key={idx}>
                  <span className="font-semibold text-[#D00000]">
                    {point.heading}
                  </span>
                  <span className="text-gray-600"> {point.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-start gap-2 mt-4 w-full max-w-6xl">
        {features.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              current === idx
                ? "bg-[#D00000] scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Feature;
