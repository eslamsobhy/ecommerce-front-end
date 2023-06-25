


import React, { useState } from "react";
import { Link } from "react-router-dom";

const Subnav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav id="SubNav" className="bg-slate-400">
        <div className="flex justify-between items-center p-3">
          <h1 className="text-white text-lg font-semibold">My App</h1>
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
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } sm:block sm:flex-grow sm:items-center sm:w-auto`}
          >
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } sm:block sm:flex-grow sm:items-center sm:w-auto`}
            >
              <Link
                to="/signin"
                className="block sm:inline-block text-white hover:text-gray-200 sm:mx-4"
              >
                Product
              </Link>
              <Link
                to="/signin"
                className="block sm:inline-block text-white hover:text-gray-200 sm:mx-4"
              >
                Product
              </Link>
              <Link
                to="/signin"
                className="block sm:inline-block text-white hover:text-gray-200 sm:mx-4"
              >
                Product
              </Link>
              <Link
                to="/signin"
                className="block sm:inline-block text-white hover:text-gray-200 sm:mx-4"
              >
                Product
              </Link>
              <Link
                to="/signin"
                className="block sm:inline-block text-white hover:text-gray-200 sm:mx-4"
              >
                Product
              </Link>
              <Link
                to="/signin"
                className="block sm:inline-block text-white hover:text-gray-200 sm:mx-4"
              >
                Product
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Subnav;

































// import React from "react";
// import { Link } from "react-router-dom";

// const Subnav = () => {
//   return (
//     <>
//       <nav id="SubNav" className="bg-slate-400">
//         <div className="flex justify-evenly p-3 ">
//           <Link to="/signin">Product</Link>
//           <Link to="/signin">Product</Link>
//           <Link to="/signin">Product</Link>
//           <Link to="/signin">Product</Link>
//           <Link to="/signin">Product</Link>
//           <Link to="/signin">Product</Link>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Subnav;

