import React from "react";
import { FaShoppingCart } from "react-icons/fa";

import Searchbar from "./searchbar.jsx";
import Subnav from "./subnav.jsx";

const Navbar = () => {
  return (
    <>
      <nav
        id="MainNav"
        className="bg-slate-500  grid grid-cols-4 sticky top-0 px-2 "
      >
        {/* /////////////////////      Logo       ////////////////// */}
        <div className="flex items-center justify-start">
          <img className=" p-4 w-20 " src="../../public/LOGO.png" alt="logo " />
          <h1 className="">Project</h1>
        </div>
        {/* ///////////////////// searching ////////////////// */}
        <Searchbar />
        {/* ///////////////////////////////////////////////// */}

        {/* /////////////////////     Cart & sign in   ///////////////// */}
        <ul className=" flex justify-evenly items-center  p-5">
          <li>Sign in</li>
          <li>
            <span className="inline-flex">
              Cart <FaShoppingCart />
            </span>
          </li>
        </ul>
      </nav>
      {/* //////////////////////////////// SubNav ////////////////////////////////// */}
      <Subnav />
      {/* ///////////////////////////////////////////////// */}
    </>
  );
};

export default Navbar;
