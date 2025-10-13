import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // 👈 lightweight icon set

const Password: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center bg-opacity-30 z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row max-w-2xl w-full relative">
        {/* Close Button */}
        <button
          className="absolute -top-3 right-3 text-gray-400 hover:text-red-500 text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col justify-center mb-8 md:mb-0 md:pr-10">
          <h2 className="text-lg md:text-xl font-semibold text-black">
            Welcome Back to
          </h2>
          <span className="text-2xl md:text-3xl font-bold text-red-600">
            ServelQ<span className="text-black">.COM</span>
          </span>
          <p className="text-gray-700 mt-2">Sign in to continue to your account</p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex flex-col">
          <button className="flex items-center justify-center bg-gray-100 border border-gray-200 rounded w-full py-2 mb-4 font-medium text-gray-700 hover:bg-gray-200 transition">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center mb-4">
            <span className="flex-1 border-t border-gray-300"></span>
            <span className="mx-2 text-sm text-gray-400">or</span>
            <span className="flex-1 border-t border-gray-300"></span>
          </div>

          {/* Password Field */}
          <label className="mb-2 text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="relative mb-3">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-400 pr-10"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-red-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Checkbox */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="keepSignedIn"
              className="mr-2 border-red-700 border"
            />
            <label htmlFor="keepSignedIn" className="text-gray-500 text-sm">
              Keep me signed in until I sign out
            </label>
          </div>

          {/* Sign In Button */}
          <button className="bg-red-600 text-white rounded px-6 py-2 w-full font-semibold hover:bg-red-700 transition-colors mb-3">
            Sign In
          </button>

          {/* Sign Up Link */}
          <p className="text-sm text-center mt-2">
            Not a member yet?{" "}
            <a href="#" className="text-red-500 font-medium hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Password;
