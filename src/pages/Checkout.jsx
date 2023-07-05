/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import PayPal from "../components/PayPalButton.jsx";
import { useContext, useEffect, useState } from "react";
import { BsFillCheckCircleFill } from 'react-icons/bs';
import UserContext from "../context/UserContext.jsx";
import CartContext from "../context/CartContext.jsx";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


const Checkout = (props) => {

  const { register, handleSubmit, formState: { errors }} = useForm();
  const navigate = useNavigate();
  const userCTX = useContext(UserContext)
  const CartCTX = useContext(CartContext)
  const [cookies, setCookies] = useCookies(['User']);
  const [paypalclass, setPaypalclass] = useState("hidden");
  const [cashclass, setCashclass] = useState("hidden");


  useEffect(()=>{
    if(!window.localStorage.getItem("logged")){
      userCTX.toggleModal()
      navigate('/Cart')
    }

  },[])


  const onSubmit = async (data) => {
    data.paymentMethod === "Cash" ? setCashclass("") : setCashclass("hidden");
    data.paymentMethod === "PayPal" ? setPaypalclass("") : setPaypalclass("hidden");
    try{
      // updating user info
      const response = await axios.patch(`http://localhost:3000/users/${cookies.User._id}`,
      { address: data.address },
      { headers: { Authorization: `${cookies.UserToken}`}})


    }catch(error){
      toast.error(error)
    }
    window.localStorage.setItem("purchasedItems", JSON.stringify(CartCTX.items))
    CartCTX.clearCart()
    window.localStorage.setItem("cartItems","")
  };


  function closeHandler(){
      setCashclass("hidden");
      navigate("/")
      window.location.reload()
  }
  


  return (
    <>
      <div className="mx-auto rounded-lg my-2 bg-orange-100 p-3 w-fit">The Total of Your Order is: <span className="text-bold">{CartCTX.totalAmount}</span> LE <span className="text-f37020 font-bold">OR</span> <span className="text-bold">{Math.round(CartCTX.totalAmount / 30)}</span> $</div>
  
      <div className="flex flex-col md:flex-row justify-between">
        {/* Form */}
        <div className="mx-auto xl:m-10 md:m-10 sm:my-10 min-w-[350px] ">
          <form onSubmit={handleSubmit(onSubmit)} className="mx-auto xl:m-10 md:m-10 sm:my-10 min-w-[350px]">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">
                Name:
              </label>
              <input
                id="name"
                {...register("name", { required: true })}
                defaultValue={`${cookies.User?.first_name} ${cookies.User?.last_name}`}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-orange-300 transition-colors"
              />
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
  
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-2">
                Phone:
              </label>
              <input
                id="phone"
                defaultValue={`${cookies.User?.phone_number}`}
                {...register("phone", { required: true })}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-orange-300 transition-colors"
              />
              {errors.phone && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
  
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email:
              </label>
              <input
                id="email"
                {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                defaultValue={`${cookies.User?.email}`}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-orange-300 transition-colors"
              />
              {errors.email && (
                <span className="text-red-500">
                  Please enter a valid email address
                </span>
              )}
            </div>
  
            <div className="mb-4">
              <label htmlFor="address" className="block mb-2">
                Address:
              </label>
              <input
                id="address"
                {...register("address", { required: true })}
                defaultValue={`${cookies.User.address ? cookies.User.address : ""}`}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-orange-300 transition-colors"
              />
              {errors.address && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
  
            <div className="mb-4">
              <label htmlFor="paymentMethod" className="block mb-2">
                Payment Method:
              </label>
              <select
                id="paymentMethod"
                {...register("paymentMethod", { required: true })}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-orange-300 transition-colors"
              >
                <option value="">Select a payment method</option>
                <option value="PayPal">PayPal Or Credit Card</option>
                <option value="Cash">Cash On Delivery</option>
              </select>
              {errors.paymentMethod && (
                <span className="text-red-500 text-[14px] ml-1">Please select a payment method</span>
              )}
            </div>
  
            <button
              type="submit"
              className="w-full py-2 px-4 my-10 bg-f37020 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:border-orange-300 transition-colors"
            >
              Proceed To Payment
            </button>
            <div className={paypalclass}>
              <PayPal />
            </div>
            <div className={cashclass}>
              <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-200 p-4 rounded-lg shadow-md z-30 animate-slide-down">
                <div className="flex justify-center m-auto">
                  <BsFillCheckCircleFill size={30} color="#f37020" />
                </div>
                <h3 className="text-center font-serif text-2xl text-f37020 my-2">Congratulations</h3>
                <p>We have received your order and our team is preparing it as soon as possible. Thank you for confirming the order.</p>
                <p></p>
                <button onClick={closeHandler}>
                  <img className="fixed -top-10 -left-10 w-10" src="../../public/close-button.svg" alt="close"></img>
                </button>
              </div>
            </div>
          </form>
        </div>
  
        {/* Items */}
        <div className="  m-3 p-1 rounded-lg items drop-shadow-md flex flex-wrap items-start ">
          {CartCTX.items ? CartCTX.items.map((product) => (
            <div key={product.id} className="card border max-w-[120px] my-10 mx-1 p-2 w-96 bg-white shadow-md rounded-lg">
              <figure><img src={product.image} /></figure>
              <div className="card-body">
                <h2 className="card-title text-bold">{product.name}</h2>
                <div className="text-gray-700">pieces: {product.amount}</div>
                <div className="badge badge-outline text-gray-500">{product.price}LE</div>
              </div>
            </div>
          ))
            :
            window.localStorage.getItem("cartItems") ? JSON.parse(window.localStorage.getItem("cartItems")).map((product) => (
              <div key={product.id} className="card border mx-1 p-4 w-96 bg-white shadow-md rounded-lg">
                <figure><img src={product.image} /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {product.name}
                  </h2>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">
                      <dd className="text-indigo-600 flex items-center dark:text-orange-500">
                        <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-current dark:stroke-orange-500">
                          <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg> {product.rate}
                      </dd>
                    </div>
                    <div className="badge badge-outline text-gray-500">{product.price}LE</div>
                  </div>
                </div>
              </div>
            ))
              : 'Cart Is Empty'}
        </div>
      </div>
      <ToastContainer />
    </>
  );
  
};

export default Checkout;
