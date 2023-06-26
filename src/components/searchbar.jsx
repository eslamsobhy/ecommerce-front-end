/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const Searchbar = (props) => {
  //  const [searchText, setSearchText] = useState("");
  console.log(props);
  const changeHandler = (e) => {
    props.setSearchText(e.target.value);
  };

  const clickHandler = (e, searchClick) => {
    console.log(searchClick);
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="flex space-x-1">
          <input
            onChange={changeHandler}
            type="text"
            // value={this.target.value}
            className="px-5  w-full text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
          />
          <button
            onClick={(e) => clickHandler(e, props.searchText)}
            className="text-white bg-purple-600 rounded-full "
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
