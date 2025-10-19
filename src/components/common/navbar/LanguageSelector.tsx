import { useState, useEffect, useRef } from "react";
import { Globe, Loader2 } from "lucide-react";
import Cookies from "js-cookie";
import { languages } from "./LnguagesData";

interface LanguageSelectorProps {
  isMobile?: boolean;
  onClose?: () => void;
}

export function LanguageSelector({
  isMobile = false,
  onClose,
}: LanguageSelectorProps) {
  const [showLanguages, setShowLanguages] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLanguageSelect = (langCode: string) => {
    setIsTranslating(true);
    setShowLanguages(false);
    Cookies.set("googtrans", `/en/${langCode}`, { path: "/" });
    window.location.reload();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowLanguages(false);
      }
    };

    if (showLanguages) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLanguages]);

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

      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setShowLanguages(!showLanguages)}
          className={`flex items-center ${
            isMobile ? "justify-between w-full px-4 py-2" : "gap-2 px-3 py-2"
          } rounded-full border border-red-600 text-gray-700 text-sm font-medium hover:bg-red-600 hover:text-white transition-colors whitespace-nowrap`}
          aria-expanded={showLanguages}
        >
          <span>Select Language</span>
          <Globe className="w-4 h-4 flex-shrink-0" />
        </button>

        {showLanguages && (
          <div
            className={`${
              isMobile ? "mt-2 w-full" : "absolute right-0 mt-2 w-56"
            } bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto`}
          >
            <ul className="py-1">
              {languages.map((lang) => (
                <li key={lang.code}>
                  <button
                    onClick={() => {
                      handleLanguageSelect(lang.code);
                      if (onClose) onClose();
                    }}
                    className="flex items-center gap-3 w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
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
    </>
  );
}
