import premiumImage1 from "../../assets/images/premium/image1.png";
import premiumImage2 from "../../assets/images/premium/image2.png";
import logo from "../../assets/images/logo.png";
export default function Index() {
  return (
    <div className="bg-[#F9E7E7] px-6 py-16 md:px-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 xl:gap-24">
          <div className="flex flex-col items-start gap-8 max-w-full lg:max-w-[50%] flex-1">
            <div className="flex items-center gap-0">
              <img
                src={logo}
                alt="ServeIQ Life Time Pro+"
                className="h-auto w-[200px]"
              />
              <button className="bg-primary text-white py-2 rounded px-4">
                Life Time Pro+
              </button>
            </div>

            <div className="flex flex-col items-start gap-4">
              <h1
                className="text-neutral-900 font-bold text-3xl md:text-4xl leading-tight tracking-[-1.5px]"
                style={{ letterSpacing: "-1.5px", lineHeight: "1.2" }}
              >
                Upgrade Your Business Experience With Us.
              </h1>

              <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
                <span className="text-primary font-bold">
                  ServeIQ Life Time Pro+
                </span>{" "}
                is your gateway to a supercharged business experience. Here's
                how it unlocks even more value for your business operation.
              </p>
            </div>

            <div className="flex flex-col justify-center items-start w-full gap-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 w-full">
                {[
                  "Multi-Language Support",
                  "Professional Receipt",
                  "Multi-Property Management",
                  "Professional Recognition",
                  "Account & Logs Management",
                  "Save Money & Many More",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2 py-1.5">
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 6L7 17L2 12M22 10L14.5 17.5L13 16"
                        stroke="#C71313"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="flex-1 text-brand-red-600 text-base leading-6">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button className="flex items-center justify-center gap-3 px-5 py-3 rounded-lg text-white font-semibold text-base leading-5 bg-primary  transition-colors">
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

          <div className="relative w-full max-w-[450px] lg:max-w-[500px] flex-shrink-0 mt-8 lg:mt-0 mx-auto">
            <img
              src={premiumImage1}
              alt="Phone mockup"
              className="w-full h-auto object-contain"
            />

            <img
              src={premiumImage2}
              alt="Chef in kitchen"
              className="absolute w-[250px] sm:w-[40%] h-[250px] -left-15 object-cover rounded-xl "
              style={{
                top: "62%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
