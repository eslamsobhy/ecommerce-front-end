import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Login from "./Login"
import Signup from "./Signup"
import Searchbar from "./Searchbar.jsx";
import Subnav from "./Subnav.jsx";
import { useState } from "react";

const Navbar = (props) => {

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
      <nav id="MainNav" className="bg-slate-500 p-2 flex justify-between flex-wrap">
        {/* Logo */}
          <Link to={"/"}>
        <div className="flex items-center ">
          <img className="w-10 mr-3" src="/LOGO.png" alt="logo" />
          <h1 className="text-white">Project</h1>
        </div>
          </Link>

        {/* sign in  */}
        {modalIsShown && loginModalStatus && <Login  toggleModal={toggleModal} toggleModalContent={toggleModalContent} />  }
        {modalIsShown && signUpModalStatus && <Signup  toggleModal={toggleModal} toggleModalContent={toggleModalContent} />  }
        
        {/* Searchbar */}
        <Searchbar {...props} />

        {/* Navigation */}
        <ul className="flex items-center justify-end">
          <li className="text-white hover:text-gray-200 text-sm:10">
            <button onClick={toggleModal}>SignIn</button>
          </li>
          <li className="mx-3">
            <Link className="text-white flex items-center hover:text-gray-200" to="/cart">
              Cart <FaShoppingCart className="" />
            </Link>
          </li>
        </ul>
      </nav>

      {/* Subnav */}
      <Subnav />
    </>
  );
};

export default Navbar;
