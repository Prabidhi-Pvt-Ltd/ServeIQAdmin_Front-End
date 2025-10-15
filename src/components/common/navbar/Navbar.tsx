import { useState, useEffect } from "react";
import { Menu, X, Search, Loader2 } from "lucide-react";
import logo from "../../../assets/images/logo.png";
import Cookies from "js-cookie";
import { services } from "../../../data/Services";
import SignIn from "../signIn/SignIn";
import SignUp from "../register/SignUp";
export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [query, setQuery] = useState("");
  const [showRegister, setShowRegister] = useState(false);

  const [filteredServices, setFilteredServices] = useState<typeof services>([]);
  const languages = [
    {
      code: "en",
      name: "English (THE UK)",
      flag: (
        <svg viewBox="0 0 640 480" width="20" height="14">
          <path fill="#012169" d="M0 0h640v480H0z" />
          <path
            fill="#FFF"
            d="M75 0l245 181L565 0h75v62L402 241l238 178v61h-77L320 299 82 480H0v-60l237-178L0 61V0h75z"
          />
          <path
            fill="#C8102E"
            d="M424 281l216 159v40L369 281h55zM240 299l8 46L48 480H0l240-181zM640 0v3L391 185l3-47L583 0h57zM0 0l239 176h-60L0 42V0z"
          />
          <path fill="#FFF" d="M240 0v480h160V0H240zM0 160v160h640V160H0z" />
          <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h94V0h-94z" />
        </svg>
      ),
    },
    {
      code: "ar",
      name: "عربي",
      flag: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="24"
          height="16"
        >
          <path fill="#74acdf" d="M0 0h512v512H0z" />
          <path fill="#fff" d="M0 170.7h512v170.7H0z" />
          <circle
            cx="256"
            cy="256"
            r="28.4"
            fill="#f6b40e"
            stroke="#85340a"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      code: "bn",
      name: "বাংলা",
      flag: (
        <svg viewBox="0 0 512 512" width="20" height="14">
          <path fill="#006a4e" d="M0 0h512v512H0z" />
          <circle cx="230" cy="256" r="120" fill="#f42a41" />
        </svg>
      ),
    },
    {
      code: "fr",
      name: "Française",
      flag: (
        <svg viewBox="0 0 3 2" width="20" height="14">
          <path fill="#0055A4" d="M0 0h1v2H0z" />
          <path fill="#fff" d="M1 0h1v2H1z" />
          <path fill="#EF4135" d="M2 0h1v2H2z" />
        </svg>
      ),
    },
    {
      code: "de",
      name: "Deutsch",
      flag: (
        <svg viewBox="0 0 5 3" width="20" height="14">
          <path fill="#000" d="M0 0h5v1H0z" />
          <path fill="#D00" d="M0 1h5v1H0z" />
          <path fill="#FFCE00" d="M0 2h5v1H0z" />
        </svg>
      ),
    },
    {
      code: "hi",
      name: "हिंदी",
      flag: (
        <svg viewBox="0 0 9 6" width="20" height="14">
          <path fill="#FF9933" d="M0 0h9v2H0z" />
          <path fill="#fff" d="M0 2h9v2H0z" />
          <path fill="#128807" d="M0 4h9v2H0z" />
          <circle
            cx="4.5"
            cy="3"
            r="0.6"
            fill="none"
            stroke="#000080"
            strokeWidth="0.2"
          />
        </svg>
      ),
    },
    {
      code: "it",
      name: "Italiana",
      flag: (
        <svg viewBox="0 0 3 2" width="20" height="14">
          <path fill="#009246" d="M0 0h1v2H0z" />
          <path fill="#fff" d="M1 0h1v2H1z" />
          <path fill="#ce2b37" d="M2 0h1v2H2z" />
        </svg>
      ),
    },
    {
      code: "ja",
      name: "日本語",
      flag: (
        <svg viewBox="0 0 3 2" width="20" height="14">
          <path fill="#fff" d="M0 0h3v2H0z" />
          <circle cx="1.5" cy="1" r="0.5" fill="#bc002d" />
        </svg>
      ),
    },
    {
      code: "pa",
      name: "ਪੰਜਾਬੀ",
      flag: (
        <svg viewBox="0 0 512 512" width="20" height="14">
          <path fill="#01411C" d="M0 0h512v512H0z" />
          <circle cx="256" cy="256" r="100" fill="#fff" />
        </svg>
      ),
    },
    {
      code: "ko",
      name: "한국인",
      flag: (
        <svg viewBox="0 0 512 512" width="20" height="14">
          <path fill="#fff" d="M0 0h512v512H0z" />
          <circle cx="256" cy="256" r="100" fill="#cd2e3a" />
          <circle cx="256" cy="256" r="60" fill="#0047a0" />
        </svg>
      ),
    },
    {
      code: "mr",
      name: "मराठी",
      flag: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="20"
          height="14"
        >
          <rect width="512" height="512" fill="#cd2a3e" />
          <rect y="76.8" width="512" height="358.4" fill="#006233" />
          <circle cx="256" cy="165" r="80" fill="#ffc400" />
          <polygon
            points="256,100 241.6,144.3 195.1,144.3 232.7,171.6 218.4,215.8 256,188.5 293.6,215.8 279.3,171.6 316.9,144.3 270.4,144.3"
            fill="#272316"
          />
        </svg>
      ),
    },

    {
      code: "pt",
      name: "Português",
      flag: (
        <svg viewBox="0 0 6 4" width="20" height="14">
          <path fill="#006600" d="M0 0h2v4H0z" />
          <path fill="#ff0000" d="M2 0h4v4H2z" />
          <circle cx="2" cy="2" r="0.6" fill="#ffcc00" />
        </svg>
      ),
    },
    {
      code: "ta",
      name: "தமிழ்",
      flag: (
        <svg viewBox="0 0 6 4" width="20" height="14">
          <path fill="#FF9933" d="M0 0h6v1.33H0z" />
          <path fill="#fff" d="M0 1.33h6v1.33H0z" />
          <path fill="#128807" d="M0 2.66h6v1.34H0z" />
          <circle cx="3" cy="2" r="0.3" fill="#000080" />
        </svg>
      ),
    },
    {
      code: "te",
      name: "తెలుగు",
      flag: (
        <svg viewBox="0 0 9 6" width="20" height="14">
          <path fill="#FF9933" d="M0 0h9v2H0z" />
          <path fill="#fff" d="M0 2h9v2H0z" />
          <path fill="#128807" d="M0 4h9v2H0z" />
          <circle
            cx="4.5"
            cy="3"
            r="0.6"
            fill="none"
            stroke="#000080"
            strokeWidth="0.2"
          />
        </svg>
      ),
    },
    {
      code: "ne",
      name: "नेपाली",
      flag: (
        <svg viewBox="0 0 512 512" width="20" height="14">
          <defs>
            <clipPath id="np-b">
              <path fillOpacity=".7" d="M0-16h512v512H0z" />
            </clipPath>
            <clipPath id="np-a">
              <path fillOpacity=".7" d="M0 0h512v512H0z" />
            </clipPath>
          </defs>
          <g clipPath="url(#np-a)">
            <g clipPath="url(#np-b)" transform="translate(0 16)">
              <g fillRule="evenodd">
                <path
                  fill="#ce0000"
                  stroke="#000063"
                  strokeWidth="13"
                  d="M6.5 489.5h378.8L137.4 238.1l257.3.3L6.6-9.5v499z"
                />
                <path
                  fill="#fff"
                  d="m180.7 355.8-27 9 21.2 19.8-28.5-1.8 11.7 26.2-25.5-12.3.5 28.6-18.8-20.9-10.7 26.6-9.2-26.3-20.3 20.6 1.8-27.7L49 409l12.6-25-29.3.6 21.5-18.3-27.3-10.5 27-9L32.2 327l28.4 1.8L49 302.6l25.6 12.3-.5-28.6 18.8 20.9 10.7-26.6 9.1 26.3 20.4-20.6-1.9 27.7 27-11.4-12.7 25 29.4-.6-21.5 18.3zm-32.4-184.7-11.3 8.4 5.6 4.6a94 94 0 0 0 30.7-36c1.8 21.3-17.7 69-68.7 69.5a70.6 70.6 0 0 1-71.5-70.3c10 18.2 16.2 27 32 36.5l4.7-4.4-10.6-8.9 13.7-3.6-7.4-12.4 14.4 1-1.8-14.4 12.6 7.4 4-13.5 9 10.8 8.5-10.3 4.6 14 11.8-8.2-1.5 14.3 14.2-1.7-6.7 13.2z"
                />
              </g>
            </g>
          </g>
        </svg>
      ),
    },
  ];

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredServices([]);
    } else {
      const filtered = services.filter((service) =>
        service.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredServices(filtered);
    }
  }, [query]);

  const handleLanguageSelect = (langCode: string) => {
    setIsTranslating(true);
    setShowLanguages(false);
    Cookies.set("googtrans", `/en/${langCode}`, { path: "/" });
    window.location.reload();
  };

  useEffect(() => {
    if (isTranslating) {
      const timer = setTimeout(() => setIsTranslating(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isTranslating]);

  return (
    <>
      {isTranslating && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
          <Loader2 className="w-16 h-16 text-white animate-spin" />
        </div>
      )}
      <SignIn isOpen={showLogin} onClose={() => setShowLogin(false)} />
      <SignUp isOpen={showRegister} onClose={() => setShowRegister(false)} />

      <nav className="bg-white border-b border-neutral-200 fixed top-0 left-0 w-full z-50">
        <div className=" mx-auto px-4 sm:px-6 lg:px-10 py-3">
          <div className="flex items-center justify-between">
            {/* ✅ Logo */}
            <div className="flex items-center flex-shrink-0">
              <img
                src={logo}
                alt="Logo"
                className="h-10 sm:h-12 md:h-14 lg:h-20 lg:w-60 object-contain"
              />
            </div>

            {/* ✅ Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <a
                href="/"
                className="text-neutral-600 text-sm hover:text-red-700 transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-neutral-600 text-sm hover:text-red-700 transition-colors"
              >
                About Us
              </a>
              <a
                href="/plans"
                className="text-neutral-600 text-sm hover:text-red-700 transition-colors"
              >
                Plan & Services
              </a>
              <a
                href="/blogs"
                className="text-neutral-600 text-sm hover:text-red-700 transition-colors"
              >
                Blogs
              </a>
              <a
                href="/customer-care"
                className="text-neutral-600 text-sm hover:text-red-700 transition-colors"
              >
                Customer Care
              </a>
            </div>

            {/* ✅ Search Bar */}
            <div className="hidden md:flex relative flex-1 max-w-md xl:max-w-lg mx-4">
              <div className="flex items-center w-full px-4 py-2 rounded-full border border-neutral-200 bg-neutral-50">
                <Search className="w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search services you want?"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-sm text-neutral-600 placeholder:text-neutral-400"
                />
              </div>

              {/* --- Suggestions Dropdown --- */}
              {filteredServices.length > 0 && (
                <ul className="absolute top-12 left-0 w-full bg-white border border-neutral-200 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
                  {filteredServices.map((service) => (
                    <li
                      key={service.id}
                      className="px-4 py-2 flex items-center gap-3 hover:bg-neutral-100 cursor-pointer"
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-8 h-8 rounded object-cover"
                      />
                      <span className="text-sm text-neutral-700">
                        {service.title}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* ✅ Buttons */}
            <div className="hidden md:flex items-center gap-3 relative">
              {/* Language Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguages(!showLanguages)}
                  className="flex items-center gap-2 px-5 py-2 rounded-2xl border border-red-600 text-gray-700 text-sm font-medium hover:bg-red-700 hover:text-white transition"
                >
                  <span>Select Language</span>
                </button>

                {showLanguages && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border border-neutral-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
                    <ul className="py-1">
                      {languages.map((lang) => (
                        <li key={lang.code}>
                          <button
                            onClick={() => handleLanguageSelect(lang.code)}
                            className="flex items-center gap-3 w-full text-left px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50"
                          >
                            <span className="text-lg">{lang.flag}</span>
                            <span>{lang.name}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Register & Login */}
              <button
                onClick={() => setShowRegister(true)}
                className="px-5 py-2 rounded-2xl border-2 border-red-700 text-red-700 text-sm font-semibold hover:bg-red-50 transition"
              >
                Register
              </button>
              <button
                onClick={() => setShowLogin(true)}
                className="px-5 py-2 rounded-2xl bg-red-700 text-white text-sm font-semibold hover:bg-red-800 transition"
              >
                Login
              </button>
            </div>

            {/* ✅ Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-neutral-700 hover:bg-neutral-100 transition"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* ✅ Mobile Dropdown Menu */}
          {isOpen && (
            <div className="lg:hidden mt-3 bg-white border-t border-neutral-200 rounded-lg shadow-md">
              <div className="flex flex-col px-4 py-3 space-y-2">
                {[
                  "Home",
                  "About Us",
                  "Plan & Services",
                  "Blogs",
                  "Customer Care",
                ].map((item, i) => (
                  <a
                    key={i}
                    href={`/${item.toLowerCase().replace(/ & | /g, "-")}`}
                    className="text-neutral-700 hover:text-red-700 py-2"
                  >
                    {item}
                  </a>
                ))}

                {/* Search Bar */}
                <div className="flex items-center gap-3 mt-3 px-3 py-2 rounded-full border border-neutral-200 bg-neutral-50">
                  <Search className="w-5 h-5 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="flex-1 bg-transparent outline-none text-sm text-neutral-600"
                  />
                </div>

                {/* Language */}
                <button
                  onClick={() => setShowLanguages(!showLanguages)}
                  className="mt-3 flex items-center justify-between px-4 py-2 rounded-2xl border border-red-600 text-gray-700 text-sm hover:bg-red-700 hover:text-white transition"
                >
                  Select Language
                  <span className="text-lg">🌐</span>
                </button>
                {/* Language Dropdown for Mobile */}
                {showLanguages && (
                  <div className="mt-2 w-full bg-white border border-neutral-200 rounded-lg shadow-lg max-h-64 overflow-y-auto">
                    <ul className="py-1">
                      {languages.map((lang) => (
                        <li key={lang.code}>
                          <button
                            onClick={() => handleLanguageSelect(lang.code)}
                            className="flex items-center gap-3 w-full text-left px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50"
                          >
                            <span className="text-lg">{lang.flag}</span>
                            <span>{lang.name}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Auth Buttons */}
                <div className="flex flex-col gap-2 mt-4">
                  <button className="px-4 py-2 rounded-2xl border-2 border-red-700 text-red-700 text-sm font-semibold hover:bg-red-50 transition">
                    Register
                  </button>
                  <button className="px-4 py-2 rounded-2xl bg-red-700 text-white text-sm font-semibold hover:bg-red-800 transition">
                    Login
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Required for Google Translate */}
      <div id="google_translate_element" className="hidden"></div>
    </>
  );
}
