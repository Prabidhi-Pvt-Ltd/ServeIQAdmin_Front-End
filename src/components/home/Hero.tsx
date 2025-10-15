import React, { useState, useEffect } from "react";
import { heroImages } from "../../data/heroImages";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(heroImages[0]); // default image

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        const currentIndex = heroImages.findIndex((img) => img.id === prev.id);
        const nextIndex = (currentIndex + 1) % heroImages.length;
        return heroImages[nextIndex];
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="w-full relative  overflow-hidden mt-6 py-20 sm:mt-10 bg-"
    >
      <div className=" mx-auto relative z-10 lg:px-30  sm:px-6 ">
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center min-h-[calc(100vh-6rem)]">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-pink-100 rounded-full px-4 py-2">
              <span className="text-pink-600 text-sm sm:text-base">
                ✨ Explore our free plan
              </span>
              <span className="bg-red-600 text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full">
                JOIN NOW
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform
              <br />
              Your{" "}
              <span className="text-red-600">
                Restaurants
                <br className="hidden sm:block" />
                and Hotels
              </span>{" "}
              Today
              <br />
              using <span className="text-red-600">ServeIQ</span>
            </h1>

            <button className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base">
              View Plans and Packages
            </button>

            <div className="pt-8 space-y-4">
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"></div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
                </div>
                <div>
                  <p className="font-bold text-base sm:text-lg">100k+</p>
                  <p className="text-sm text-gray-600">
                    Restaurant and Hotel Owners Trust Us!
                  </p>
                </div>
              </div>

              {/* Watch Now */}
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div>
                  <p className="text-sm text-gray-600">How to use ServeIQ</p>
                  <p className="text-red-600 font-bold text-sm sm:text-base">
                    WATCH NOW!
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                  <svg
                    className="w-4 h-4 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 3l8 5-8 5V3z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center  mt-10 lg:mt-0 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[550px]">
            <div
              className="absolute -right-40 top-1/2 -translate-y-1/2 bg-red-600 rounded-l-full -z-10"
              style={{
                width: "calc(100% + 100px)",
                height: "75%",
                maxWidth: "800px",
              }}
            ></div>

            <div
              className={`relative transition-all duration-1000 ease-out transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              } flex items-center justify-center h-full`}
            >
              <img
                src={currentImage.src}
                alt={currentImage.name}
                className="object-contain h-[90%] w-auto absolute lg:bottom-18 bottom-8 md:-top-2 max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
