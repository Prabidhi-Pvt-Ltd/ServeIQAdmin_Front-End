import phone from "../../assets/images/connect/phone.png"; // replace with your uploaded image path
import playStore from "../../assets/images/connect/playstore.png";
import appStore from "../../assets/images/connect/appstore.png";

const Connect = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-red-600">
            Connect & Manage on a Touch !
          </h2>
          <p className="text-gray-700 mt-4 max-w-md mx-auto md:mx-0 leading-relaxed">
            Track, manage and streamline your journey with our mobile app.{" "}
            <span className="font-semibold text-red-500">Add property</span>,{" "}
            <span className="font-semibold text-red-500">Manage Sales</span>,{" "}
            <span className="font-semibold text-red-500">
              Track your overall performance
            </span>
            , and access all your properties directly from your phone or tablet.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mt-6 justify-center md:justify-start">
            <img
              src={playStore}
              alt="Get it on Google Play"
              className="w-40 hover:scale-105 transition-transform cursor-pointer"
            />
            <img
              src={appStore}
              alt="Download on the App Store"
              className="w-40 hover:scale-105 transition-transform cursor-pointer"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <img
            src={phone}
            alt="ServeIQ mobile mockup"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Connect;
