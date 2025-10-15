import { Search, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface Service {
  id: number;
  title: string;
  image?: string;
}

interface SearchBarProps {
  services: Service[];
  onServiceSelect?: (service: Service) => void;
}

export function SearchBar({ services, onServiceSelect }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Filter services based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredServices([]);
      setIsOpen(false);
      return;
    }

    const filtered = services.filter((service) =>
      service.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredServices(filtered);
    setIsOpen(filtered.length > 0);
  }, [searchQuery, services]);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClear = () => {
    setSearchQuery("");
    setFilteredServices([]);
    setIsOpen(false);
  };

  const handleServiceClick = (service: Service) => {
    setSearchQuery(service.title);
    setIsOpen(false);
    if (onServiceSelect) {
      onServiceSelect(service);
    }
  };

  return (
    <div
      ref={searchRef}
      className="relative hidden md:block flex-1 max-w-[1056px]"
    >
      <div className="flex items-center px-5 py-4 gap-4 rounded-full border border-neutral-200 bg-neutral-50">
        <Search className="w-8 h-8 text-neutral-400 flex-shrink-0" />
        <input
          type="text"
          placeholder="Search services you want ?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 bg-transparent outline-none text-neutral-700 text-base placeholder:text-neutral-400"
        />
        {searchQuery && (
          <button
            onClick={handleClear}
            className="text-neutral-400 hover:text-neutral-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Dropdown Results */}
      {isOpen && filteredServices.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg border border-neutral-200 max-h-[400px] overflow-y-auto z-50">
          <div className="p-2">
            <p className="text-xs text-neutral-500 px-3 py-2 font-semibold">
              Found {filteredServices.length} service
              {filteredServices.length !== 1 ? "s" : ""}
            </p>
            {filteredServices.map((service) => (
              <button
                key={service.id}
                onClick={() => handleServiceClick(service)}
                className="w-full text-left px-3 py-3 hover:bg-neutral-50 rounded-lg transition-colors flex items-center gap-3"
              >
                {service.image && (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-10 h-10 object-cover rounded"
                  />
                )}
                <div className="flex-1">
                  <p className="text-sm font-medium text-neutral-700">
                    {service.title}
                  </p>
                </div>
                <Search className="w-4 h-4 text-neutral-400" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {isOpen && searchQuery && filteredServices.length === 0 && (
        <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg border border-neutral-200 z-50">
          <div className="p-6 text-center">
            <Search className="w-12 h-12 text-neutral-300 mx-auto mb-2" />
            <p className="text-sm text-neutral-600 font-medium">
              No services found
            </p>
            <p className="text-xs text-neutral-400 mt-1">
              Try searching with different keywords
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
