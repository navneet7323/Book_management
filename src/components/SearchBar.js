import React from "react";

function SearchBar(props) {
  return (
    <input
      type="text"
      placeholder="Search books..."
      className="search"
      onChange={(e) => props.setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
