import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    country: "",
    contactNumber2: "",
    location: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className=" bg-gray-50 flex items-center justify-center p-4">
      <div className="flex max-w-5xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Side - Branding */}
        <div className="hidden md:flex md:w-1/2 bg-white p-12 flex-col justify-center">
          <h1 className="text-4xl font-bold mb-6">
            JOIN
            <br />
            <span className="text-red-600">ServeIQ</span>
            <span className="text-black">.COM</span>
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            Explore plans matching your needs and enhancing your hospitality
            business with our tailored system just simplified as your needs.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 relative">
          <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <h2 className="text-xl font-semibold mb-6">Create New Account</h2>
          <p className="text-sm font-medium text-gray-700 mb-6">
            Personal Information
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email address"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Please Enter Your Contact Number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country <span className="text-red-500">*</span>
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-500"
              >
                <option value="">Please select a country</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="au">Australia</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="contactNumber2"
                value={formData.contactNumber2}
                onChange={handleChange}
                placeholder="Please Enter Your Contact Number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Please Enter Your Location"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-red-100 text-red-600 py-3 rounded-md font-medium hover:bg-red-200 transition-colors mt-6"
            >
              Continue
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              Already a member?{" "}
              <a href="#" className="text-red-600 font-medium hover:underline">
                Sign in
              </a>
            </p>

            <p className="text-xs text-gray-500 text-center mt-6 leading-relaxed">
              By signing up, you agree to ServeIQ's{" "}
              <a href="#" className="text-red-600 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-red-600 hover:underline">
                Privacy Policy
              </a>
              , and agree to receive marketing communications from ServeIQ.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
