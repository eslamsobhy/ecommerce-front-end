/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Searchbar = (props) => {
  console.log(props);
  const changeHandler = (e) => {
    props.setSearchText(e.target.value);
  };

  const clickHandler = (e, searchClick) => {
    console.log(searchClick);
  };

  return (
    <>
      <div className="flex items-center  self-center w-full fixed m-auto z-40 justify-center">
        <div className="flex justify-center align-middle items-center">
          <input
            onChange={changeHandler}
            type="text"
            className="px-5  w-full text-orange-500 bg-white border rounded-full focus:border-orange-400 focus:ring-orange-400 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
          />
          <button
            onClick={(e) => clickHandler(e, props.searchText)}
            className="text-white hover:text-orange-500 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
