import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Mail } from "lucide-react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const SignUp: React.FC<Props> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    country: "",
    contactNumber2: "",
    location: "",
    propertyType: "",
    propertyName: "",
    panVat: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
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

  const handleContinue = () => {
    if (step === 1) {
      if (!formData.fullName || !formData.email || !formData.contactNumber) {
        alert("Please fill all required fields.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (
        !formData.propertyType ||
        !formData.propertyName ||
        !formData.panVat
      ) {
        alert("Please fill all property details.");
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!formData.password || !formData.confirmPassword) {
        alert("Please enter and confirm your password.");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      setStep(4);
    }
  };

  const modal = (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div onClick={onClose} className="absolute inset-0 bg-opacity-50" />

      <div className="relative z-10 max-w-2xl w-full mx-4">
        <div className="bg-white rounded-lg shadow-lg p-5 md:p-6 flex flex-col md:flex-row relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl font-bold"
            aria-label="Close"
          >
            &times;
          </button>

          {/* Left branding */}
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

          {/* Right form section */}
          <div className="w-full md:w-[55%]">
            {step !== 4 && (
              <h2 className="text-base md:text-lg font-semibold mb-3">
                {step === 1
                  ? "Create New Account"
                  : step === 2
                  ? "Property Details"
                  : "Set Password"}
              </h2>
            )}

            {/* Step 1: Basic info */}
            {step === 1 && (
              <div className="space-y-2 max-h-[65vh] overflow-y-auto pr-1">
                {[
                  {
                    name: "fullName",
                    label: "Full Name",
                    type: "text",
                    placeholder: "Enter your full name",
                  },
                  {
                    name: "email",
                    label: "Email",
                    type: "email",
                    placeholder: "Enter your email",
                  },
                  {
                    name: "contactNumber",
                    label: "Contact Number",
                    type: "tel",
                    placeholder: "Enter your contact number",
                  },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="block text-xs font-medium text-gray-700 mb-0.5">
                      {field.label} <span className="text-red-500">*</span>
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
            )}

            {/* Step 2: Property details */}
            {step === 2 && (
              <div className="space-y-2">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-0.5">
                    Select Property Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 text-gray-600 text-sm"
                  >
                    <option value="">Select type</option>
                    <option value="hotel">Hotel</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="cafe">Cafe</option>
                    <option value="bar">Bar</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-0.5">
                    Property Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="propertyName"
                    value={formData.propertyName}
                    onChange={handleChange}
                    placeholder="Enter property name"
                    className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-0.5">
                    PAN/VAT Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="panVat"
                    value={formData.panVat}
                    onChange={handleChange}
                    placeholder="Enter PAN or VAT number"
                    className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 text-sm"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Password creation */}
            {step === 3 && (
              <div className="space-y-2">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-0.5">
                    Create Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a strong password"
                    className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-0.5">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Re-enter your password"
                    className="w-full px-2 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 text-sm"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Waiting for Confirmation */}
            {step === 4 && (
              <div className="text-center py-6">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
                    <Mail className="w-10 h-10 text-red-600" />
                  </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Waiting for Confirmation
                </h2>

                <p className="text-sm text-gray-600 mb-6 px-4">
                  Please verify your Phone Number and Email address sent from
                  admin. Admin will send you login ID and password that
                  confirmed your account.
                </p>

                <button
                  onClick={onClose}
                  className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition text-sm"
                >
                  Back to HomePage
                </button>

                <p className="text-xs text-gray-600 mt-4">
                  Already a member?{" "}
                  <a
                    href="#"
                    className="text-red-600 font-medium hover:underline"
                  >
                    Sign in
                  </a>
                </p>
              </div>
            )}

            {step !== 4 && (
              <button
                onClick={handleContinue}
                className="w-full bg-red-600 text-white py-1.5 rounded-md font-semibold hover:bg-red-700 transition mt-5 text-sm"
              >
                {step === 3 ? "Create Account" : "Continue"}
              </button>
            )}

            {step === 1 && (
              <>
                <p className="text-xs text-center mt-2 text-gray-600">
                  Already a member?{" "}
                  <a
                    href="#"
                    className="text-red-600 font-medium hover:underline"
                  >
                    Sign in
                  </a>
                </p>

                <p className="text-[10px] text-gray-500 text-center mt-3 leading-relaxed">
                  By signing up, you agree to ServeIQ's{" "}
                  <a href="#" className="text-red-600 hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-red-600 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};

export default SignUp;
