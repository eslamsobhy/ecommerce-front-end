/* eslint-disable no-unused-vars */
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Footer from "../src/components/Footer";
import Home from "./pages/Home.jsx";
import FreeShipping from "./pages/FreeShipping.jsx";
import TechServices from "./pages/TechServices.jsx";
import { useContext, useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import { Route, Routes } from "react-router";
import NotFound from "./pages/NotFound.jsx";
import Products from "./pages/Products.jsx";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About.jsx";
import Subnav from "./components/Subnav.jsx";
import { useGlobalContext } from "./context/ProductsContext.jsx";
import CartContext from "./context/CartContext.jsx";

let firstRender =true;


function App() {
  const [searchText, setSearchText] = useState("");

  const { fetchProducts } = useGlobalContext();
  const myCart = useContext(CartContext)

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(()=>{
    myCart.fetchCartItems()
  },[])

  useEffect(() => {
    if (firstRender) {
      firstRender =false;
      return;
    }
    if (myCart.changed) {
      myCart.sendCartItems(myCart);
      
    }
    
  }, [myCart]);

  return (
    <>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <div className="sticky block top-0 z-50">
        <Subnav />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Techservices" element={<TechServices />} />
        <Route path="/Freeshipping" element={<FreeShipping />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
