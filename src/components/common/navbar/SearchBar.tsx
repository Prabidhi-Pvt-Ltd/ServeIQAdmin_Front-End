import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { services } from "../../../data/Services";

interface SearchBarProps {
  isMobile?: boolean;
  onResultClick?: () => void;
}

export function SearchBar({ isMobile = false, onResultClick }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState<typeof services>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredServices([]);
      setShowResults(false);
    } else {
      const filtered = services.filter((service) =>
        service.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredServices(filtered);
      setShowResults(true);
    }
  }, [query]);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    };

    if (showResults) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showResults]);

  const handleResultClick = () => {
    setShowResults(false);
    setQuery("");
    if (onResultClick) {
      onResultClick();
    }
  };

  return (
    <div
      className={`relative ${isMobile ? "pb-2" : "flex-1 max-w-xs"}`}
      ref={searchRef}
    >
      <div className="flex items-center w-full px-4 py-2 rounded-full border border-gray-200 bg-gray-50 gap-2">
        <Search className="w-4 h-4 text-gray-400 flex-shrink-0" />
        <input
          type="text"
          placeholder="Search services you want ?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => filteredServices.length > 0 && setShowResults(true)}
          className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400 min-w-0"
        />
      </div>

      {showResults && filteredServices.length > 0 && (
        <ul className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
          {filteredServices.map((service) => (
            <a
              href="/"
              key={service.id}
              className="px-4 py-2 flex items-center gap-3 hover:bg-gray-50 cursor-pointer"
              onClick={handleResultClick}
            >
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-8 h-8 rounded object-cover"
              />
              <span className="text-sm text-gray-700">{service.title}</span>
            </a>
          ))}
        </ul>
      )}
    </div>
  );
}
