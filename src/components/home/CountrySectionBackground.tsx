// src/components/country/CountrySectionBackground.tsx
import React from "react";
import india from "../../assets/images/country/india.png";
import srilanka from "../../assets/images/country/srilanka.png";
import bangladesh from "../../assets/images/country/bangladesh.png";
import bhutan from "../../assets/images/country/bhutan.png";

const countries = [
  {
    id: 1,
    name: "India",
    users: "1000+ Trusted Users",
    image: india,
    colorClass: "bg-red-600",
  },
  {
    id: 2,
    name: "Srilanka",
    users: "400+ Trusted Users",
    image: srilanka,
    colorClass: "bg-orange-500",
  },
  {
    id: 3,
    name: "Bangladesh",
    users: "200+ Trusted Users",
    image: bangladesh,
    colorClass: "bg-green-600",
  },
  {
    id: 4,
    name: "Bhutan",
    users: "100+ Trusted Users",
    image: bhutan,
    colorClass: "bg-sky-500",
  },
];

const CountrySectionBackground: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <section aria-hidden="true" className={`w-full h-full ${className}`}>
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full max-w-7xl px-6 md:px-12 py-12">
          <div className="flex items-center justify-center   place-items-center">
            {countries.map((c) => (
              <div
                key={c.id}
                className="w-full max-w-[220px] rounded-2xl overflow-hidden bg-white/60 backdrop-blur-sm flex flex-col items-start p-3"
                style={{ opacity: 0.9 }}
              >
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-32 object-cover rounded-xl"
                />
                <h4 className="mt-2 text-base font-semibold text-gray-800">
                  {c.name}
                </h4>
                <p className="text-xs text-gray-700">{c.users}</p>
                <div
                  className={`mt-3 px-3 py-1 rounded-md text-white text-xs ${c.colorClass} inline-block`}
                >
                  Book Demo
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountrySectionBackground;
