/* eslint-disable no-unused-vars */
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Login from "./Login"
import Signup from "./Signup"
import Searchbar from "./Searchbar.jsx";
import Subnav from "./Subnav.jsx";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext"
import { useCookies } from "react-cookie";

const Navbar = (props) => {
  const userCTX = useContext(UserContext)
  const userStatus = window.localStorage.getItem("logged")
  const [cookies, setCookie,removeCookie] = useCookies(['UserToken', 'User']);
  const [CurrUser , setCurrUser] = useState('')
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  const handleDropdownMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  useEffect(()=>{
      if(cookies.User){
        setCurrUser(cookies.User)
      }
  },[cookies.User])


  function signoutHandler(){
    window.localStorage.removeItem("logged")
    removeCookie('UserToken');
    removeCookie('User');
    window.location.reload();
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
        {userCTX.modalIsShown && userCTX.loginModalStatus && <Login />  }
        {userCTX.modalIsShown && userCTX.signUpModalStatus && <Signup />  }
        
        {/* Searchbar */}
        <Searchbar {...props} />

        {/* Navigation */}
        <ul className="flex items-center justify-end">
          <li className="text-white hover:text-gray-200 text-sm:10">
            {userStatus?  
          <div className="relative">
          <img
            className="max-w-[40px] rounded-full cursor-pointer"
            src={CurrUser.avatar}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            alt="User Avatar"/>

          {isDropdownVisible && (
            <div
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
            className="absolute right-0  py-2 w-40 bg-white rounded shadow-lg z-10">
              <button onClick={signoutHandler} className="block w-[160px] px-4 py-2 text-gray-800 hover:bg-gray-200">Sign Out </button>
            </div>
          )}
        </div>
            : 
            <button onClick={userCTX.toggleModal}>SignIn</button>
            }
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
