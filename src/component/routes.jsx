import React from "react";
import { Routes, Route,BrowserRouter } from 'react-router-dom';
import Signin from "./signin";
import App from "../App";

const Rout = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<Signin />} />
        {/* <Route path="/cart" element={<cart />} />
          <Route path="/mobile" element={<mobile />} />
          <Route path="/computer" element={<computer />} /> */}
      </Routes>
      </BrowserRouter>

  );
};

export default Rout;
