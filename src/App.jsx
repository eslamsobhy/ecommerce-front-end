/* eslint-disable no-unused-vars */
import Cart from "./pages/Cart.jsx"
import Footer from "../src/components/Footer";
import Home from "./pages/Home.jsx";
import FreeShipping from "./pages/FreeShipping.jsx";
import TechServices from "./pages/TechServices.jsx";
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import { Route, Routes } from "react-router";
import NotFound from "./pages/NotFound.jsx";


function App() {
  
  const [searchText, setSearchText] = useState("");   


  return (
    <>
      <Navbar searchText={searchText} setSearchText={setSearchText} />  
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/Techservices" element={<TechServices />} />
        <Route path="/Freeshipping" element={<FreeShipping />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
        <Footer />
    </>
  );
}

export default App;
