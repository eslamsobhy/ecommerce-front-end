/* eslint-disable no-unused-vars */
import { useState } from "react";

import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Router } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Rout from "./components/Routes.jsx";

import "./App.css";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import Cart from "./components/Cart"

import Categories from "./components/Categories/Categories";

function App() {

  const [searchText, setSearchText] = useState("");   

  const [modalIsShown,setModalIsShown ] = useState(false);

  const [loginModalStatus,setLoginModalStatus ] = useState(true);
  const [signUpModalStatus,setSignUpModalStatus ] = useState(false);

  //toggle the modal it self 
  function toggleModal(){
    setModalIsShown(prevValue => !prevValue)
  }
  
  //toggle between sign up and login forms
  function toggleModalContent(){
    setSignUpModalStatus(prevValue => !prevValue)
    setLoginModalStatus(prevValue => !prevValue)
  }
  

  return (
    <>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <button onClick={toggleModal} >toggle</button>
      {modalIsShown && loginModalStatus && <Login  toggleModal={toggleModal} toggleModalContent={toggleModalContent} />  }
      {modalIsShown && signUpModalStatus && <Signup  toggleModal={toggleModal} toggleModalContent={toggleModalContent} />  }

      <Cart />
      <Categories />
    </>
  );
}

export default App;
