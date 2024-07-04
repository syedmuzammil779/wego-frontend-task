import React from 'react';

// icons
import { IoSearch } from 'react-icons/io5';

// styles
import './SearchBar.scss';

interface SearchBarProps {
  value: string;
  onValueChange: (value: string) => void;
}

const SearchBar = ({ value, onValueChange }: SearchBarProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(e.target.value);
  };

  return (
    <div className="input-search">
      <span className="input-search-icon">
        <IoSearch size={20} />
      </span>
      <input
        type="search"
        placeholder="Enter restaurant name..."
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
