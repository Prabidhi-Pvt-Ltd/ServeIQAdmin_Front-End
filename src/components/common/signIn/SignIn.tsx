import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const SignIn: React.FC<Props> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const [isPasswordStep, setIsPasswordStep] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

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
    setError("");

    if (!isPasswordStep) {
      if (!username.trim()) {
        setError("Please enter your username first.");
        return;
      }
      setIsPasswordStep(true);
    } else {
      if (!password.trim()) {
        setError("Please enter your password.");
        return;
      }

      if (
        username === import.meta.env.VITE_ADMIN_USERNAME &&
        password === import.meta.env.VITE_ADMIN_PASSWORD
      ) {
        localStorage.setItem("isAdminLoggedIn", "true");
        onClose();
        navigate("/");
        setError(
          "We apologize, but the password you entered does not match our records. Please reconfirm your password and try again."
        );
      }
    }
  };

  const modal = (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div onClick={onClose} className="absolute inset-0 bg-transparent" />

      <div className="relative z-10 max-w-2xl w-full mx-4">
        <div className="bg-white rounded-lg shadow-lg py-24 px-6 flex flex-col md:flex-row">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl font-bold"
            aria-label="Close"
          >
            &times;
          </button>

          <div className="md:w-1/2 flex flex-col justify-center mb-6 md:mb-0 md:pr-6">
            <h2 className="text-lg md:text-xl font-semibold text-black">
              Welcome Back
            </h2>
            <span className="text-2xl md:text-3xl font-bold text-red-600">
              ServelQ <span className="text-black">Admin</span>
            </span>
            <p className="text-gray-700 mt-2">
              Sign in to continue to your admin dashboard
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

            {/* Divider */}
            <div className="flex items-center mb-4">
              <span className="flex-1 border-t border-gray-300"></span>
              <span className="mx-2 text-sm text-gray-400">or</span>
              <span className="flex-1 border-t border-gray-300"></span>
            </div>

            {/* Inputs */}
            {!isPasswordStep ? (
              <>
                <label className="mb-2 text-sm font-medium text-gray-700">
                  Admin Username
                </label>
                <input
                  type="text"
                  placeholder="Enter admin username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border border-gray-300 rounded px-4 py-2 mb-3 w-full focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </>
            ) : (
              <>
                <label className="mb-2 text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative mb-3">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2.5 text-gray-500"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                {error && (
                  <p className="text-sm text-red-600 mt-[-6px] mb-2 leading-tight">
                    {error}
                  </p>
                )}
              </>
            )}

            {/* Keep me signed in */}
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

            {/* Submit Button */}
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
