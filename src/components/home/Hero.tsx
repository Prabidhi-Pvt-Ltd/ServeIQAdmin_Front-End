import React, { useState, useEffect } from "react";
import { heroImages } from "../../data/heroImages";
import avatar1 from "../../assets/images/hero/avatar1.png";
import avatar2 from "../../assets/images/hero/avatar2.png";
import avatar3 from "../../assets/images/hero/avatar3.png";

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(heroImages[0]); // default image
  const [textColorIndex, setTextColorIndex] = useState(0);

  // Colors for the span text
  const colors = ["#B91C1C", "#1e3a8a", "#f97316"]; // shades of red

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => {
        const currentIndex = heroImages.findIndex((img) => img.id === prev.id);
        const nextIndex = (currentIndex + 1) % heroImages.length;
        return heroImages[nextIndex];
      });
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    const colorInterval = setInterval(() => {
      setTextColorIndex((prev) => (prev + 1) % colors.length);
    }, 6000); // Change color every 6 seconds

    return () => clearInterval(colorInterval);
  }, []);

  return (
    // <section
    //   id="hero"
    //   className="w-full relative overflow-y-hidden overflow-hidden lg:py-20"
    // >
    <section
  id="hero"
  className="w-full relative overflow-y-hidden overflow-hidden lg:py-20 pt-16 xl:pt-[72px]"
>
      <div className="mx-auto py-10 relative z-10 lg:px-35 bg-[#F9E7E7] sm:px-6 sm:pt-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[calc(100vh-6rem)]">
          <div className="space-y-3 text-center lg:text-left 2xl:space-y-7">
            <div className="inline-flex items-center gap-2 bg-[#F3CFCF] rounded-full px-4 py-2 2xl:px-6  ">
              <span className="text-red-600 text-sm sm:text-base 2xl:text-lg">
                ✨ Explore our free plan
              </span>
              <span className="bg-red-600 text-white text-xs sm:text-sm 2xl:text-base font-bold px-3 py-1 2xl:px-5 2xl:py-2 rounded-full">
                JOIN NOW
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold leading-tight">
              Transform
              <br />
              Your{" "}
              <span
                className="font-bold"
                style={{ color: colors[textColorIndex] }}
              >
                Restaurants <br className="hidden sm:block" />
                and Hotels
              </span>{" "}
              Today
              <br />
              using{" "}
              <span
                className="font-bold"
                style={{ color: colors[textColorIndex] }}
              >
                ServeIQ
              </span>
            </h1>

            <button className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base 2xl:text-lg 2xl:px-10 2xl:py-5">
              View Plans and Packages
            </button>

            <div className="pt-8 space-y-4 2xl:pt-12">
              <div className="flex items-center gap-4 sm:gap-2 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  <img
                    src={avatar1}
                    alt="User 1"
                    className="w-8 h-8 sm:w-10 sm:h-10 2xl:w-14 2xl:h-14 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src={avatar2}
                    alt="User 2"
                    className="w-8 h-8 sm:w-10 sm:h-10 2xl:w-14 2xl:h-14 rounded-full border-2 border-white object-cover"
                  />
                  <img
                    src={avatar3}
                    alt="User 3"
                    className="w-8 h-8 sm:w-10 sm:h-10 2xl:w-14 2xl:h-14 rounded-full border-2 border-white object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-base sm:text-lg 2xl:text-2xl">
                    100k+
                  </p>
                  <p className="text-sm text-gray-600 2xl:text-lg">
                    Restaurant and Hotel Owners Trust Us!
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div>
                  <p className="text-sm text-gray-600 2xl:text-lg">
                    How to use ServeIQ
                  </p>
                  <p className="text-red-600 font-bold text-sm sm:text-base 2xl:text-lg">
                    WATCH NOW!
                  </p>
                </div>
                <div className="w-10 h-10 2xl:w-14 2xl:h-14 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                  <svg
                    className="w-4 h-4 2xl:w-6 2xl:h-6 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 3l8 5-8 5V3z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center mt-10 lg:mt-0 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[550px] 2xl:h-[700px]">
            <div
              className="absolute -right-40 top-1/2 -translate-y-1/2 bg-red-600 rounded-l-full -z-10"
              style={{
                width: "calc(100% + 100px)",
                height: "75%",
                maxWidth: "900px",
              }}
            ></div>

            <div
              key={currentImage.id}
              className="relative flex items-center justify-center h-full w-full animate-slide-in-right"
            >
              <img
                src={currentImage.src}
                alt={currentImage.name}
                className="object-contain h-[90%] w-auto absolute lg:bottom-18 bottom-8 md:-top-2 2xl:bottom-10 max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
