// src/components/common/SignIn/SignIn.tsx
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const SignIn: React.FC<Props> = ({ isOpen, onClose }) => {
  const [isPasswordStep, setIsPasswordStep] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // close on ESC
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = original;
      document.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSignIn = () => {
    if (!isPasswordStep) {
      if (!email.trim()) {
        alert("Please enter your email address first.");
        return;
      }
      setIsPasswordStep(true);
    } else {
      if (!password.trim()) {
        alert("Please enter your password.");
        return;
      }
      alert("Signed in successfully!");
    }
  };

  const modal = (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div onClick={onClose} className="absolute inset-0" />

      <div className="relative z-10 max-w-2xl w-full mx-4">
        <div className="bg-white rounded-lg shadow-lg p-6  md:p-8  flex flex-col md:flex-row">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl font-bold"
            aria-label="Close"
          >
            &times;
          </button>

          <div className="md:w-1/2 flex flex-col justify-center mb-6 md:mb-0 md:pr-6">
            <h2 className="text-lg md:text-xl font-semibold text-black">
              Welcome Back to
            </h2>
            <span className="text-2xl md:text-3xl font-bold text-red-600">
              ServelQ <span className="text-black">.COM</span>
            </span>
            <p className="text-gray-700 mt-2">
              Sign in to continue to your account
            </p>
          </div>

          <div className="md:w-1/2 flex flex-col">
            <button className="flex items-center justify-center bg-gray-100 border border-gray-200 rounded w-full py-2 mb-4 font-medium text-gray-700 hover:bg-gray-200 transition">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Continue with Google
            </button>

            <div className="flex items-center mb-4">
              <span className="flex-1 border-t border-gray-300"></span>
              <span className="mx-2 text-sm text-gray-400">or</span>
              <span className="flex-1 border-t border-gray-300"></span>
            </div>

            {!isPasswordStep ? (
              <>
                <label className="mb-2 text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 rounded px-4 py-2 mb-3 w-full focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </>
            ) : (
              <>
                <label className="mb-2 text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-gray-300 rounded px-4 py-2 mb-3 w-full focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </>
            )}

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

            <button
              onClick={handleSignIn}
              className="bg-red-600 text-white rounded px-6 py-2 w-full font-semibold hover:bg-red-700 transition-colors mb-3"
            >
              {isPasswordStep ? "Sign In" : "Next"}
            </button>

            <p className="text-sm text-center mt-2">
              Not a member yet?{" "}
              <a href="#" className="text-red-500 font-medium hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};

export default SignIn;
