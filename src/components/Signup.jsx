/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Modal from "../UI/Modal"
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import UserContext from "../context/UserContext"
import { useContext } from "react";
import { useCookies } from "react-cookie";

function Signup(){
  const {register , handleSubmit , formState: { errors }} = useForm()
  const userCTX = useContext(UserContext)
  const [cookies, setCookie] = useCookies(['UserToken','User']);
  
  async function onSubmit(data){
    let {firstName,lastName, email , password}  = data

    try {
    const response = await axios.post(`http://localhost:3000/users/signup`,{firstName,lastName, email, password });
    toast(`your account has been created successfully ${cookies.User['first_name']}!`)
    userCTX.toggleModal()
    console.log(response)

  } catch (error) {
    console.error(error);
    error.response ? toast(error.response.data.message) : ''
  }
  }


  return(
    <>
      <Modal toggleModal={userCTX.toggleModal} >
            <h1 className="mx-auto w-fit text-2xl font-bold mb-4">Create an account</h1>
            <h1 className="mx-auto w-fit  text-sm mb-4">
              Already have an account? 
              <a className="text-f37020 cursor-pointer" onClick={userCTX.toggleModalContent}> Login</a>
            </h1>

          <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col items-center min-w-[300px] w-[400px] mx-auto py-3 px-10 bg-white rounded-lg ">
          
            {/* -------------------------------email------------------------------------------------ */}
          <div className="w-full mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 mt-3">Email</label>
            <input {...register("email",{ 
                required: true, 
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i ,
                  message: "Invalid email address"}})
                }  aria-invalid={errors.email ? "true" : "false"}className="input" />
          </div>
            {errors.email?.type === "required" && (<p className="text-red-500" role="alert">email is required</p>)}
            {errors.email?.type === "pattern" && (<p className="text-red-500" role="alert">email must be valid </p>)}
          {/* ----------------------------------password-------------------------------------------- */}
          <div className="w-full mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2 mt-3">password</label>
            <input type="password" {...register("password", { required: true, minLength:6 , maxLength: 20 })} aria-invalid={errors.password ? "true" : "false"} className="input" />
          </div>
            {errors.password?.type === "required" && (<p className="text-red-500" role="alert">password is required</p>)}
            {errors.password?.type === "minLength" && (<p className="text-red-500" role="alert">password must be at least 6 chars </p>)}
            {errors.password?.type === "maxLength" && (<p className="text-red-500" role="alert">password must be less than 20 chars</p>)}
          {/* ------------------------------------firstName------------------------------------------ */}
          <div className="w-full mb-4">
            <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-2 mt-3">firstName</label>
            <input {...register("firstName" , { required: true, maxLength: 20 })} aria-invalid={errors.firstName ? "true" : "false"} className="input" />
          </div>
            {errors.firstName?.type === "required" && (<p className="text-red-500" role="alert">firstName is required</p>)}
            {errors.firstName?.type === "maxLength" && (<p className="text-red-500" role="alert">firstName must be less than 20 chars</p>)}
          {/* -----------------------------------lastName------------------------------------------- */}
          <div className="w-full mb-4">
            <label htmlFor="lastName" className="block text-gray-700 font-semibold mb-2 mt-3">lastName</label>
            <input {...register("lastName", { required: true, maxLength: 20 })} aria-invalid={errors.lastName ? "true" : "false"} className="input" />
          </div>
            {errors.lastName?.type === "required" && (<p className="text-red-500" role="alert">lastName is required</p>)}
            {errors.lastName?.type === "maxLength" && (<p className="text-red-500" role="alert">lastName must be less than 20 chars</p>)}
            
            <input type="submit" value={"CREATE AN ACCOUNT"}  className="primaryBtn" />
        </form>
        <ToastContainer />

    </Modal>
    </>
  )
}

export default Signup