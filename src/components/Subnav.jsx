import { useState } from "react";
import { Link } from "react-router-dom";

import Mobile from "./Mobile.jsx";
import Laptop from "./Laptop.jsx";

const Subnav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [productId, setProductId] = useState();
  const [bgColor, setBgColor] = useState("bg-white");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  function switchcase(productId) {
    switch (productId) {
      case "1":
        return (
          <div
            onMouseLeave={handleMouseLeave}
            className="  absolute bg-slate-200 bg-opacity-100 z-10 trp  m-auto h-fit "
          >
            <Mobile />
          </div>
        );
      case "2":
        return (
          <div
            onMouseLeave={handleMouseLeave}
            className=" absolute bg-slate-200 bg-opacity-100 z-10 m-auto h-fit "
          >
            <Laptop />
          </div>
        );
      case "3":
        return (
          <div
            onMouseLeave={handleMouseLeave}
            className=" absolute bg-slate-200 bg-opacity-100  z-10  m-auto h-fit "
          >
            <Mobile />
          </div>
        );
      case "4":
        return (
          <div
            onMouseLeave={handleMouseLeave}
            className=" absolute bg-slate-200 bg-opacity-100  z-10 m-auto h-fit"
          >
            <Mobile />
          </div>
        );
      case "5":
        return (
          <div
            onMouseLeave={handleMouseLeave}
            className=" absolute bg-slate-200 bg-opacity-100  z-10 m-auto h-fit"
          >
            <Mobile />
          </div>
        );
      case "6":
        return (
          <div
            onMouseLeave={handleMouseLeave}
            className=" absolute bg-slate-200 bg-opacity-100  z-10  m-auto h-fit"
          >
            <Mobile />
          </div>
        );
      default:
        return (
          <div
            onMouseLeave={handleMouseLeave}
            className=" absolute bg-slate-200 bg-opacity-100  z-10  m-auto  h-fit"
          >
            <Mobile />
          </div>
        );
    }
  }

  function handleMouseEnter(e) {
    setIsHovered(true);
    setProductId(e.target.id);
    setBgColor("bg-gray-600 bg-opacity-10");
  }

  function handleMouseLeave() {
    setIsHovered(false);
    setBgColor("bg-white");
  }

  return (
    <>
      <nav id="SubNav" className="bg-black bg-opacity-90">
        <div className="flex justify-between items-center p-3">
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } sm:block sm:flex-grow ml-5 sm:items-center sm:w-auto`}
          >
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } sm:block sm:flex-grow sm:items-center sm:w-auto`}
            >
              <Link
                id="1"
                onMouseEnter={(e) => {
                  handleMouseEnter(e);
                }}
                to="/products"
                className="block  sm:inline-block text-white hover:text-gray-200 sm:mx-4"
              >
                Mobile
              </Link>

              <Link
                id="2"
                onMouseEnter={(e) => {
                  handleMouseEnter(e);
                }}
                to="/products"
                className="block sm:inline-block text-white hover:text-gray-200 sm:mx-4"
              >
                Laptop
              </Link>
              <Link
                id="3"
                onMouseEnter={(e) => {
                  handleMouseEnter(e);
                }}
                to="/products"
                className="block sm:inline-block text-white hover:text-gray-200 sm:mx-4"
              >
                Product
              </Link>
              <Link
                id="4"
                onMouseEnter={(e) => {
                  handleMouseEnter(e);
                }}
                to="/products"
                className="block sm:inline-block text-white hover:text-gray-200 sm:mx-4"
              >
                Product
              </Link>
              <Link
                id="5"
                onMouseEnter={(e) => {
                  handleMouseEnter(e);
                }}
                to="/products"
                className="block sm:inline-block text-white hover:text-gray-200 sm:mx-4"
              >
                Product
              </Link>
              <Link
                id="6"
                onMouseEnter={(e) => {
                  handleMouseEnter(e);
                }}
                to="/products"
                className="block sm:inline-block text-white hover:text-gray-200 sm:mx-4"
              >
                Product
              </Link>
            </div>
          </div>
          <button
            className="block sm:hidden text-white hover:text-gray-200 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 3a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V3zm4 0a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V3zm5 0a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V3zm4 0a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0V3z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V4H4v2a1 1 0 1 1-2 0V3zm0 8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-1H4v1a1 1 0 1 1-2 0v-2zm0 8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-1H4v1a1 1 0 1 1-2 0v-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div className={`relative  ${bgColor} `}>
        {isHovered && productId ? switchcase(productId) : ""}
        <div className={` absolute  top-0 left-0 `}></div>
      </div>
    </>
  );
};

export default Subnav;
