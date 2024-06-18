import React, { useState, useEffect } from "react";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onSearch(searchTerm);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm, onSearch]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search across all columns..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full max-w-md px-4 py-2 bg-gray-900 text-gray-300 bg-transparent border-[1px] border-white rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

export default SearchBar;