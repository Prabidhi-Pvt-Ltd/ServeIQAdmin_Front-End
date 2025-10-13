import flag from "../../assets/images/flag.png";
import blurImage from "../../assets/images/blurImage.png";

const NationSection = () => {
  return (
    <section className=" relative flex items-center justify-center ">
      <div
        className="container absolute inset-0 bg-cover bg-center blur-md opacity-60"
        style={{ backgroundImage: `url(${blurImage})` }}
      ></div>

      <div className="relative flex flex-col items-center justify-center text-center gap-2 px-4">
        <img
          src={flag}
          alt="Nation flag"
          className="h-auto w-24 sm:w-32 md:w-40 shadow-xl"
        />

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          We are coming to your nation very soon. Stay tuned.
        </h2>

        <button className="flex items-center bg-primary justify-center gap-3 px-6 py-3 rounded-lg bg-brand-red-600 text-white font-semibold text-base leading-5 hover:bg-brand-red-600/90 transition-colors">
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
    </section>
  );
};

export default NationSection;
