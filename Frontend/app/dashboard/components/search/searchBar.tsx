import React from "react";

const SearchBar = () => {
  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search..."
        className="bg-slate-100 w-80 p-2 text-sm rounded-sm"
      />
    </div>
  );
};

export default SearchBar;
