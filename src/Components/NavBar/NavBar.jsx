import React from "react";
import NavLinks from "./NavLink";
import UserLink from "./UserLink";


const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b border-gray-100 w-full px-44 py-2 ">
      <div className="text-3xl font-extrabold ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-blue-400">
        ChatConnect
        </span>
      </div>

      <div className="flex justify-center item-center mx-auto">
        <NavLinks></NavLinks>
      </div>
      <div>
        <UserLink></UserLink>
      </div>
    </div>
  );
};

export default Navbar;
