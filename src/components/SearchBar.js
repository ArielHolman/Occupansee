import React from "react";

const SearchBar = ({ searchfield, searchChange }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="Search Businesses"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBar;
