import subscribe from "../../assets/images/formImages/subscribe.png";

const SubscribePopup = () => (
  <div className=" flex items-center justify-center  bg-opacity-30 z-50">
    <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center max-w-2xl w-full relative">
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold"
        aria-label="Close"
      >
        &times;
      </button>
      <div className="md:w-1/2 flex justify-center md:justify-start mb-6 md:mb-0">
        <img
          src={subscribe}
          alt="Newsletter illustration"
          className="w-40 md:w-48 h-auto"
        />
      </div>

      <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Subscribe to our Newsletter!
        </h2>
        <p className="text-gray-700 mb-4">
          Be the first to get exclusive offers and the latest news.
        </p>
        <input
          type="email"
          placeholder="Please Enter Your E-mail Address..."
          className="border border-gray-300 rounded px-4 py-2 w-full mb-3 focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <button className="bg-red-600 text-white rounded px-6 py-2 w-full font-semibold hover:bg-red-700 transition-colors">
          Subscribe Now
        </button>
      </div>
    </div>
  </div>
);

export default SubscribePopup;
