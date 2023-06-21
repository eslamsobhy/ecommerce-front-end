import React from "react";
import { Link } from "react-router-dom";

const Subnav = () => {
  return (
    <>
      <nav id="SubNav" className="bg-slate-400">
        <div className="flex justify-evenly p-3 ">
          <Link to="/signin">Product</Link>
          <Link to="/signin">Product</Link>
          <Link to="/signin">Product</Link>
          <Link to="/signin">Product</Link>
          <Link to="/signin">Product</Link>
          <Link to="/signin">Product</Link>
        </div>
      </nav>
    </>
  );
};

export default Subnav;
