import { Search } from "lucide-react";
import logo from '../assets/images/logo.png'
export default function Navbar() {
  return (
    <nav className="bg-white border-b border-neutral-200">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-16 py-4 lg:py-4">
        <div className="flex items-center gap-4 lg:gap-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2">
            <img src={logo} alt=""  className="w-40"/>
            </div>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-11">
            <a href="/" className="text-neutral-500 text-sm hover:text-black transition-colors py-5">
              Home
            </a>
            <a href="/about" className="text-neutral-500 text-sm hover:text-red-700 transition-colors  py-5">
              About us
            </a>
            <a href="/plans" className="text-neutral-500 text-sm hover:text-red-700 transition-colors py-5">
              Plan and Services
            </a>
            <a href="/blogs" className="text-neutral-500 text-sm hover:text-red-700 transition-colors py-5">
              Blogs
            </a>
            <a href="/customer-care" className="text-neutral-500 text-sm hover:text-red-700  transition-colors py-5">
              Customer Care
            </a>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex items-center flex-1 max-w-[1056px] px-5 py-4 gap-4 rounded-full border border-neutral-200 bg-neutral-50">
            <Search className="w-8 h-8 text-neutral-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search services you want ?"
              className="flex-1 bg-transparent outline-none text-neutral-400 text-base placeholder:text-neutral-400"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 lg:gap-5 ml-auto">
            <button className="px-5 lg:px-7 py-3 lg:py-4 rounded-2xl border-2 border-brand-red bg-white text-brand-red text-sm lg:text-base font-semibold hover:bg-brand-red-50 transition-colors">
              Register
            </button>
            <button className="px-5 lg:px-7 py-3 lg:py-4 rounded-2xl bg-red-800 text-white text-sm lg:text-base font-semibold hover:bg-brand-red-800 transition-colors">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
