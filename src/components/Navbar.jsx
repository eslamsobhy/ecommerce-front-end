/* eslint-disable react/prop-types */
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
import { useNavigate } from "react-router-dom";
import CartContext from "../context/CartContext";


const Navbar = (props) => {
  const navigate = useNavigate();
  const userCTX = useContext(UserContext)
  const cartCTX = useContext(CartContext)
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
    navigate('/')
    window.location.reload();
  }

  return (
    <>
      <nav id="MainNav" className="bg-black text-white py-4 my-30 h-20 fixed  top-0 w-full z-50 px-7 flex justify-between flex-wrap">
        {/* Logo */}
          <Link to={"/"}>
        <div className="flex items-center ">
          <img className="w-10 mr-3 bg-orange-500" src="/LOGO.png" alt="logo" />
          <h1 className="text-orange-500  ">Project</h1>
        </div>
          </Link>

        {/* sign in  */}
        {userCTX.modalIsShown && userCTX.loginModalStatus && <Login />  }
        {userCTX.modalIsShown && userCTX.signUpModalStatus && <Signup />  }
        
        {/* Searchbar */}
        <Searchbar {...props} />

        {/* Navigation */}
        <ul className="flex items-center justify-end">
          <li className="text-white hover:text-gray-200 text-sm:10 pr-6 ">
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
          <li className="mx-3 ">
            <Link className="text-white flex items-center hover:text-gray-200 relative" to="/cart">
              <span className="mr-2 text-md"> Cart </span> <FaShoppingCart className="" />
              {cartCTX.totalItemsNum > 0 && (
              <span className="ml-1 bg-f37020 text-white rounded-full px-[7px] py-[1px] text-[14px] absolute right-[-20px] top-[-17px]">
                {cartCTX.totalItemsNum}
              </span>
              )}

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
