import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { SignIn } from "../signIn";
import SignUp from "../register/SignUp";
import { SearchBar } from "./SearchBar";
import { NavLinks } from "./NavLinks";
import { LanguageSelector } from "./LanguageSelector";
import { AuthButtons } from "./AuthButtons";
import { MobileMenu } from "./MobileMenu";

export default function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <SignIn isOpen={showLogin} onClose={() => setShowLogin(false)} />
      <SignUp isOpen={showRegister} onClose={() => setShowRegister(false)} />

      <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50">
        <div className="max-w-[1600px] mx-auto px-4 xl:px-8">
          <div className="flex items-center justify-between h-16 xl:h-[72px] gap-2">
            {/* Logo */}
            <div className="flex-shrink-0">
              <NavLink to="/">
                <img
                  src={logo || "/placeholder.svg"}
                  alt="ServeIQ Logo"
                  className="h-20 object-contain"
                />
              </NavLink>
            </div>

            {/* Desktop Navigation Links */}
            <NavLinks onLinkClick={scrollToSection} />

            {/* Desktop Search Bar */}
            <div className="hidden xl:block">
              <SearchBar />
            </div>

            {/* Desktop Language Selector & Auth Buttons */}
            <div className="hidden xl:flex items-center gap-2 flex-shrink-0">
              <LanguageSelector />
              <AuthButtons
                onRegisterClick={() => setShowRegister(true)}
                onLoginClick={() => setShowLogin(true)}
              />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition flex-shrink-0"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <MobileMenu
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            onLoginClick={() => setShowLogin(true)}
            onRegisterClick={() => setShowRegister(true)}
            onLinkClick={scrollToSection}
          />
        </div>
      </nav>

      <div id="google_translate_element" className="hidden"></div>
    </>
  );
}
