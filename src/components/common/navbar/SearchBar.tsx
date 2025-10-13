import { Search } from "lucide-react";
export function SearchBar() {
  return (
    <div className="hidden md:flex items-center flex-1 max-w-[1056px] px-5 py-4 gap-4 rounded-full border border-neutral-200 bg-neutral-50">
      <Search className="w-8 h-8 text-neutral-400 flex-shrink-0" />
      <input
        type="text"
        placeholder="Search services you want ?"
        className="flex-1 bg-transparent outline-none text-neutral-400 text-base placeholder:text-neutral-400"
      />
    </div>
  );
}
