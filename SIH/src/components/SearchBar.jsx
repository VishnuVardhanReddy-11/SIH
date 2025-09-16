import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch, placeholder = "Search monasteries, districts, tags..." }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) onSearch(query);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="max-w-xl mx-auto flex items-center bg-white border border-gray-300 rounded-xl shadow-sm overflow-hidden">
      <span className="px-3 text-gray-400">
        <FaSearch />
      </span>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="flex-grow px-4 py-3 focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="bg-emerald-600 text-white px-4 py-2 hover:bg-emerald-700 transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
