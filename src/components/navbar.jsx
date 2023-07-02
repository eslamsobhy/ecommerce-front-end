import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

import Searchbar from "./Searchbar.jsx";
import Subnav from "./Subnav.jsx";

const Navbar = (props) => {
  return (
    <>
      {/* Navbar */}
      <nav
        id="MainNav"
        className="bg-slate-500 p-2 flex justify-between flex-wrap"
      >
        {/* Logo */}
        <div className="flex items-center ">
          <img className="w-10 mr-3" src="/LOGO.png" alt="logo" />
          <h1 className="text-white">Project</h1>
        </div>

        {/* Searchbar */}
        <Searchbar {...props} />

        {/* Navigation */}
        <ul className="flex items-center justify-end">
          <li className="text-white hover:text-gray-200 text-sm:10">
            <Link to="/category">SignIn</Link>
          </li>
          <li className="mx-3">
            <Link
              className="text-white flex items-center hover:text-gray-200"
              to="/category"
            >
              Cart <FaShoppingCart className="" />
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
