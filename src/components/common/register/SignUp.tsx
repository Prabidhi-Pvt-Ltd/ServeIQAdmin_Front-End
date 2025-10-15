import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const SignUp: React.FC<Props> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    country: "",
    contactNumber2: "",
    location: "",
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  const modal = (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Light transparent background */}
      <div onClick={onClose} className="absolute inset-0 " />

      <div className="relative z-10 max-w-2xl w-full mx-4">
        <div className="bg-white rounded-lg shadow-lg p-5 md:p-6 flex flex-col md:flex-row relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl font-bold"
            aria-label="Close"
          >
            &times;
          </button>

          {/* Left section (branding) */}
          <div className="hidden md:flex md:w-[45%] flex-col justify-center pr-4">
            <h1 className="text-2xl font-bold mb-3 leading-snug">
              Join <span className="text-red-600">ServeIQ</span>
              <span className="text-black">.COM</span>
            </h1>
            <p className="text-gray-600 text-xs leading-relaxed">
              Explore plans matching your needs and enhancing your hospitality
              business with our tailored solutions — simple and effective.
            </p>
          </div>

          {/* Right section (form) */}
          <div className="w-full md:w-[55%]">
            <h2 className="text-base md:text-lg font-semibold mb-3">
              Create New Account
            </h2>

            <div className="space-y-2 max-h-[65vh] overflow-y-auto pr-1">
              {[
                {
                  name: "fullName",
                  label: "Full Name",
                  required: true,
                  type: "text",
                  placeholder: "Enter your full name",
                },
                {
                  name: "email",
                  label: "Email",
                  required: true,
                  type: "email",
                  placeholder: "Enter your email",
                },
                {
                  name: "contactNumber",
                  label: "Contact Number",
                  required: true,
                  type: "tel",
                  placeholder: "Enter your contact number",
                },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-xs font-medium text-gray-700 mb-0.5">
                    {field.label}{" "}
                    {field.required && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={(formData as any)[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 text-sm"
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-0.5">
                  Country <span className="text-red-500">*</span>
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 text-gray-600 text-sm"
                >
                  <option value="">Select a country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-0.5">
                  Alternate Contact
                </label>
                <input
                  type="tel"
                  name="contactNumber2"
                  value={formData.contactNumber2}
                  onChange={handleChange}
                  placeholder="Enter alternate number (optional)"
                  className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-0.5">
                  Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your location"
                  className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 text-sm"
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-red-600 text-white py-1.5 rounded-md font-semibold hover:bg-red-700 transition mt-5 text-sm"
            >
              Continue
            </button>

            <p className="text-xs text-center mt-2 text-gray-600">
              Already a member?{" "}
              <a href="#" className="text-red-600 font-medium hover:underline">
                Sign in
              </a>
            </p>

            <p className="text-[10px] text-gray-500 text-center mt-3 leading-relaxed">
              By signing up, you agree to ServeIQ’s{" "}
              <a href="#" className="text-red-600 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-red-600 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};

export default SignUp;
