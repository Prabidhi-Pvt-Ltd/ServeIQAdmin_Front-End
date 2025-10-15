import { Navbar } from "./components/common/navbar";
import { Footer } from "./components/common/footer";
import { Home } from "./pages";
import { useEffect } from "react";

// Extend Window interface
declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

function App() {
  useEffect(() => {
    const initializeGoogleTranslate = () => {
      // Remove existing Google Translate elements
      const existingScript = document.querySelector(
        'script[src*="translate.google.com"]'
      );
      if (existingScript) {
        existingScript.remove();
      }

      const existingFrame = document.querySelector(".goog-te-banner-frame");
      if (existingFrame) {
        existingFrame.remove();
      }

      // Initialize Google Translate
      const googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "ar,bn,en,fr,de,hi,it,ja,pa,ko,mr,pt,ta,te,ne",
              layout:
                window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
            },
            "google_translate_element"
          );
        }
      };

      window.googleTranslateElementInit = googleTranslateElementInit;

      // Load Google Translate script
      const script = document.createElement("script");
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;

      // Add error handling
      script.onerror = () => {
        console.error("Failed to load Google Translate script");
      };

      document.body.appendChild(script);

      return () => {
        // Cleanup function
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    };

    // Initialize with a small delay to ensure DOM is ready
    const timer = setTimeout(initializeGoogleTranslate, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Add CSS to hide Google Translate banner and improve styling
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .goog-te-banner-frame {
        display: none !important;
      }
      .goog-te-menu-frame {
        z-index: 1000 !important;
      }
      .goog-tooltip {
        display: none !important;
      }
      .goog-tooltip:hover {
        display: none !important;
      }
      .goog-text-highlight {
        background-color: transparent !important;
        border: none !important;
        box-shadow: none !important;
      }
      .skiptranslate iframe {
        display: none !important;
      }
      body {
        top: 0 !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
