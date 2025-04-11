import React from "react";
import "./SearchBar.css";
import { FaSearch, FaTimes } from "react-icons/fa";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="search-bar-container">
      <FaSearch className="search-icon" />
      <input
        className="search-box"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && (
        <FaTimes className="clear-icon" onClick={() => setSearch("")} />
      )}
    </div>
  );
};

export default SearchBar;
