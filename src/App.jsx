/* eslint-disable no-unused-vars */
import { useState } from "react";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Router } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Rout from "./components/Routes.jsx";
import "./App.css";

function App() {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
    </>
  );
}

export default App;
