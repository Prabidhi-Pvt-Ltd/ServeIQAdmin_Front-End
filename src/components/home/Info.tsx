import mobile1 from "../../assets/images/mobile1.png";
import mobile2 from "../../assets/images/mobile2.png";
import mobile3 from "../../assets/images/mobile3.png";

export default function Info() {
  return (
    <div className="bg-white py-16 md:py-20">
      <div className="px-6 md:px-12 lg:px-20 xl:px-32">
        <div className="flex flex-col items-center gap-10 md:gap-12 w-full">
          {/* Heading Section - Reduced font sizes slightly for the "not too big" feel */}
          <div className="flex flex-col items-center gap-3 w-full">
            <h1 className="w-full text-[#C71313] text-center font-['DM_Sans'] text-3xl md:text-4xl font-bold leading-tight tracking-[-1.5px]">
              What We Provide.
            </h1>
            <p className="w-full text-[#64748B] text-center font-['DM_Sans'] text-lg md:text-xl font-normal leading-relaxed">
              Your Hospitality Journey Starts Here.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col-reverse md:flex-row items-center w-full rounded-3xl bg-[#FFF1B3] shadow-[0_2px_8px_0_rgba(0,42,70,0.10)] overflow-hidden">
                <div className="flex flex-col justify-center items-start gap-3 p-6 md:p-8 flex-1 min-w-0">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <h2 className="w-full text-[#080807] font-['DM_Sans'] text-xl md:text-2xl font-bold leading-7 md:leading-8">
                      Easy Hotel, Restaurant Setup & Management
                    </h2>
                    <p className="w-full text-[#475569] font-['DM_Sans'] text-base md:text-lg font-normal leading-relaxed">
                      From basic hotel and restaurant setup to fully automated
                      system we help you in every step.
                    </p>
                  </div>
                </div>

                <div className="p-8 pb-0 md:p-0 md:pl-0 flex-shrink-0 flex items-center justify-center">
                  <img
                    src={mobile1}
                    alt="Hotel setup illustration"
                    className="w-full max-w-[140px] md:max-w-[160px] h-auto object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col-reverse md:flex-row items-center flex-1 w-full rounded-3xl bg-[#FEF5F5] shadow-[0_2px_8px_0_rgba(0,42,70,0.10)] overflow-hidden">
                <div className="flex flex-col justify-center items-start gap-2 p-6 md:p-8 flex-1 min-w-0">
                  <div className="w-full text-[#0F172A] font-['DM_Sans'] text-xs font-normal leading-4 tracking-wider uppercase">
                    Manage and track from across the globe
                  </div>
                  <div className="flex flex-col justify-end items-start gap-2 w-full">
                    <h2 className="w-full text-[#C71313] font-['DM_Sans'] text-xl md:text-2xl font-bold leading-7 md:leading-8">
                      Multiple Property Support with Word-wide Connectivity.
                    </h2>
                    <p className="w-full text-[#475569] font-['DM_Sans'] text-base md:text-lg font-normal leading-relaxed">
                      Access and control your property anytime 🕜, anywhere💺.
                    </p>
                  </div>
                </div>

                <div className="p-8 pb-0 md:p-0 md:pl-0 flex-shrink-0 flex items-center justify-center">
                  <img
                    src={mobile2}
                    alt="Property management"
                    className="w-full max-w-[130px] md:max-w-[150px] h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-start flex-1 w-full rounded-3xl bg-[#F4F9FF] shadow-[0_2px_8px_0_rgba(0,42,70,0.10)] overflow-hidden">
                <div className="flex flex-col justify-end items-start gap-3 p-6 md:p-8 w-full">
                  <div className="w-full text-[#0F172A] font-['DM_Sans'] text-xs font-normal leading-4 tracking-wider uppercase">
                    Business Analytics and finance tracking
                  </div>
                  <div className="flex flex-col justify-end items-start gap-2 w-full">
                    <h2 className="w-full text-[#001489] font-['DM_Sans'] text-xl md:text-2xl font-bold leading-7 md:leading-8">
                      Easily streamline your business with income and expense
                      tracking.
                    </h2>
                    <p className="w-full text-[#475569] font-['DM_Sans'] text-base md:text-lg font-normal leading-relaxed">
                      Manage your business with finance tracking with
                      streamlined system just suiting your business that you can
                      customize as per your need.
                    </p>
                  </div>
                </div>

                <img
                  src={mobile3}
                  alt="Analytics dashboard"
                  className="w-full max-w-[220px] mx-auto h-auto object-contain p-4 pb-0 md:p-6 md:pb-0"
                />
              </div>

              <div className="flex flex-col items-start gap-2 p-6 md:p-8 w-full rounded-2xl bg-[#C71313] shadow-[0_2px_8px_0_rgba(0,42,70,0.10)] flex-shrink-0">
                <div className="flex items-center gap-2 w-full">
                  <h3 className="text-white font-['DM_Sans'] text-base md:text-lg font-bold leading-6">
                    Join Our Partner Program
                  </h3>

                  <svg
                    className="w-5 h-5 md:w-6 md:h-6"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.66797 15.9993H25.3346M25.3346 15.9993L16.0013 6.66602M25.3346 15.9993L16.0013 25.3327"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h2 className="w-full text-white font-['DM_Sans'] text-2xl md:text-3xl font-bold leading-8 tracking-[-0.96px]">
                  100+ Users Trust us
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
