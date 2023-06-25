import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

import Searchbar from "./searchbar.jsx";
import Subnav from "./subnav.jsx";

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav id="MainNav" className="bg-slate-500 p-2 flex flex-wrap justify-between">
        {/* Logo */}
        <div className="flex items-center mr-4">
          <img className="w-20" src="/LOGO.png" alt="logo" />
          <h1 className="text-white">Project</h1>
        </div>

        {/* Searchbar */}
        <Searchbar />

        {/* Navigation */}
        <ul className="flex items-center mt-4 lg:mt-0">
          <li className="mr-6">
            <Link className="text-white hover:text-gray-200" to="/signin">
              Sign in
            </Link>
          </li>
          <li>
            <Link className="text-white flex items-center hover:text-gray-200" to="/signin">
              Cart <FaShoppingCart className="ml-2" />
            </Link>
          </li>
        </ul>
      </nav>

      {/* Subnav */}
      <Subnav />
    </>
  );
};

export default Navbar;



/


