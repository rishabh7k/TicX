import React from "react";
import SearchBar from "../dashboard/components/search/searchBar";
// import { ImageComponents } from "../images/component";
const Navbar = () => {
  return (
    <div className="flex h-16">
      <div
        className="text-white font-extrabold text-2xl text-center p-3 pt-4"
        style={{ background: "#5d77ff", width: "91px" }}
      >
        TicX
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
};
export default Navbar;
