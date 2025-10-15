// src/components/common/SearchBar/SearchBar.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import type { Service } from "../../../data/Services";

type Props = {
  items: Service[];
  placeholder?: string;
  maxResults?: number;
  onSelect?: (item: Service) => void; // called when suggestion clicked/enter
};

export default function SearchBar({
  items,
  placeholder = "Search services you want?",
  maxResults = 6,
  onSelect,
}: Props) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // simple debounce
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query.trim()), 200);
    return () => clearTimeout(t);
  }, [query]);

  // filter logic (case-insensitive)
  const results = useMemo(() => {
    if (!debouncedQuery) return [];
    const q = debouncedQuery.toLowerCase();
    const scored = items
      .map((s) => {
        const title = s.title.toLowerCase();
        let score = 0;
        if (title.startsWith(q)) score += 100;
        if (title.includes(" " + q)) score += 50;
        if (title.includes(q)) score += 10;
        return { s, score };
      })
      .filter((r) => r.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, maxResults)
      .map((r) => r.s);
    return scored;
  }, [debouncedQuery, items, maxResults]);

  // open dropdown when query > 0
  useEffect(() => {
    setOpen(debouncedQuery.length > 0 && results.length > 0);
    setHighlight(-1);
  }, [debouncedQuery, results.length]);

  // handle outside click to close
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  // keyboard navigation
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((h) => Math.min(h + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => Math.max(h - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (highlight >= 0 && results[highlight]) {
        selectItem(results[highlight]);
      }
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const selectItem = (item: Service) => {
    setQuery("");
    setOpen(false);
    setHighlight(-1);
    if (onSelect) onSelect(item);
    // default behavior: navigate to service page if slug exists
    if (item.slug) {
      window.location.href = `/services/${item.slug}`;
    }
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-md">
      <div className="flex items-center px-3 py-2 rounded-full border border-neutral-200 bg-neutral-50">
        <svg
          className="w-4 h-4 text-neutral-400 mr-3"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M21 21l-4.35-4.35"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" />
        </svg>

        <input
          ref={inputRef}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setOpen(results.length > 0)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none text-sm text-neutral-700 placeholder:text-neutral-400"
          aria-autocomplete="list"
          aria-expanded={open}
          aria-controls="search-suggestions"
        />
      </div>

      {/* Dropdown */}
      {open && (
        <ul
          id="search-suggestions"
          role="listbox"
          className="absolute mt-2 w-full bg-white border border-neutral-200 rounded-lg shadow-lg z-50 max-h-64 overflow-auto"
        >
          {results.map((r, idx) => (
            <li
              key={r.id}
              role="option"
              aria-selected={highlight === idx}
              onMouseEnter={() => setHighlight(idx)}
              onClick={() => selectItem(r)}
              className={`flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-neutral-50 ${
                highlight === idx ? "bg-neutral-50" : ""
              }`}
            >
              <img
                src={r.image}
                alt={r.title}
                className="w-10 h-10 object-cover rounded-md flex-shrink-0"
              />
              <div>
                <div className="text-sm font-medium text-neutral-800">
                  {r.title}
                </div>
              </div>
            </li>
          ))}
          {results.length === 0 && (
            <li className="px-4 py-3 text-sm text-neutral-500">No results</li>
          )}
        </ul>
      )}
    </div>
  );
}
