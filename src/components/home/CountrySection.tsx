import React from "react";
import india from "../../assets/images/country/india.png";
import srilanka from "../../assets/images/country/srilanka.png";
import bangladesh from "../../assets/images/country/bangladesh.png";
import bhutan from "../../assets/images/country/bhutan.png";

interface Country {
  id: number;
  name: string;
  image: string;
  buttonColor: string;
  users: string;
}

const CountrySection: React.FC = () => {
  const countries: Country[] = [
    {
      id: 1,
      name: "India",
      users: "1000+ Trusted Users",
      image: india,
      buttonColor: "bg-red-600 hover:bg-red-700",
    },
    {
      id: 2,
      name: "Srilanka",
      users: "400+ Trusted Users",
      image: srilanka,
      buttonColor: "bg-orange-500 hover:bg-orange-600",
    },
    {
      id: 3,
      name: "Bangladesh",
      users: "200+ Trusted Users",
      image: bangladesh,
      buttonColor: "bg-green-600 hover:bg-green-700",
    },
    {
      id: 4,
      name: "Bhutan",
      users: "100+ Trusted Users",
      image: bhutan,
      buttonColor: "bg-sky-500 hover:bg-sky-600",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-10 underline decoration-red-600 decoration-2 underline-offset-4">
          Country we serve
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {countries.map((country) => (
            <div
              key={country.id}
              className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-[250px] transition-transform hover:scale-105"
            >
              <img
                src={country.image}
                alt={country.name}
                className="w-full h-40 object-cover rounded-2xl"
              />

              <div className="p-4 flex flex-col items-start">
                <h3 className="text-gray-800 font-semibold text-lg">
                  {country.name}
                </h3>
                <p className="text-primary text-sm font-semibold mt-1">
                  {country.users}
                </p>

                {/* Button */}
                <button
                  className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-white font-semibold text-sm mt-4 transition-colors ${country.buttonColor}`}
                >
                  <span>Book Demo Now</span>
                  <svg
                    className="w-4 h-4"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountrySection;
