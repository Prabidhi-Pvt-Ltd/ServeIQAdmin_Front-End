import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import logo from "../../../assets/images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-neutral-200 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-32 h-16 sm:w-32" />
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-11">
            <a
              href="/"
              className="text-neutral-500 text-sm hover:text-red-700 transition-colors py-2"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-neutral-500 text-sm hover:text-red-700 transition-colors py-2"
            >
              About Us
            </a>
            <a
              href="/plans"
              className="text-neutral-500 text-sm hover:text-red-700 transition-colors py-2"
            >
              Plan and Services
            </a>
            <a
              href="/blogs"
              className="text-neutral-500 text-sm hover:text-red-700 transition-colors py-2"
            >
              Blogs
            </a>
            <a
              href="/customer-care"
              className="text-neutral-500 text-sm hover:text-red-700 transition-colors py-2"
            >
              Customer Care
            </a>
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-[400px] mx-5 px-4 py-2 rounded-full border border-neutral-200 bg-neutral-50">
            <Search className="w-5 h-5 text-neutral-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search services you want?"
              className="flex-1 bg-transparent outline-none text-neutral-500 text-sm placeholder:text-neutral-400 px-2"
            />
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-5 py-2 rounded-2xl border-2 border-red-700 text-red-700 text-sm font-semibold hover:bg-red-50 transition-colors">
              Register
            </button>
            <button className="px-5 py-2 rounded-2xl bg-red-700 text-white text-sm font-semibold hover:bg-red-800 transition-colors">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-neutral-600 hover:bg-neutral-100 transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="lg:hidden mt-3 bg-white border-t border-neutral-200 rounded-lg shadow-md">
            <div className="flex flex-col px-4 py-3 space-y-2">
              <a href="/" className="text-neutral-700 hover:text-red-700 py-2">
                Home
              </a>
              <a
                href="/about"
                className="text-neutral-700 hover:text-red-700 py-2"
              >
                About Us
              </a>
              <a
                href="/plans"
                className="text-neutral-700 hover:text-red-700 py-2"
              >
                Plan and Services
              </a>
              <a
                href="/blogs"
                className="text-neutral-700 hover:text-red-700 py-2"
              >
                Blogs
              </a>
              <a
                href="/customer-care"
                className="text-neutral-700 hover:text-red-700 py-2"
              >
                Customer Care
              </a>

              {/* Search (Mobile) */}
              <div className="flex items-center gap-3 mt-3 px-3 py-2 rounded-full border border-neutral-200 bg-neutral-50">
                <Search className="w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 bg-transparent outline-none text-neutral-500 text-sm"
                />
              </div>

              {/* Buttons (Mobile) */}
              <div className="flex flex-col gap-2 mt-4">
                <button className="px-4 py-2 rounded-2xl border-2 border-red-700 text-red-700 text-sm font-semibold hover:bg-red-50 transition-colors">
                  Register
                </button>
                <button className="px-4 py-2 rounded-2xl bg-red-700 text-white text-sm font-semibold hover:bg-red-800 transition-colors">
                  Login
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
