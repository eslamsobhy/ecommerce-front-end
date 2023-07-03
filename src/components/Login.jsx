/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form"
import Modal from "../UI/Modal"
import axios  from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCookies } from 'react-cookie';

function Login(props){
  const [cookies, setCookie] = useCookies(['UserToken']);
  const {register , handleSubmit , formState: { errors }} = useForm()
  

  async function onSubmit(data){
    const {email , password}  = data

    try {
    const response = await axios.post(`http://localhost:3000/users/login`,{ email, password });
    console.log(response.data.token) //delete this line in the end 
    console.log(response.data.user) //delete this line in the end 
    setCookie('UserToken', response.data.token);
    window.localStorage.setItem("logged", true)
    toast("You are successfully logged in!")
    props.toggleModal();

  } catch (error) {
    console.error(error);
    error.response ? toast(error.response.data.message) : ''
  }
}



  return(
    <>
      <Modal toggleModal={props.toggleModal} >

      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Welcome back!</h1>
        <h1 className="text-lg mb-4">Sign in to your account</h1>
        <p className="text-sm mb-4">Don't have an account? <a onClick={props.toggleModalContent} className="text-blue-500 cursor-pointer">Sign Up</a></p>
        <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col items-center  max-w-md mx-auto py-4 px-10 bg-white rounded-lg shadow-md">
          
          {/* -------------------------------email------------------------------------------------ */}
          <div className="mb-4">
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
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2 mt-3">password</label>
            <input {...register("password", { required: true, minLength:6 , maxLength: 20 })} aria-invalid={errors.password ? "true" : "false"} className="input" />
          </div>
            {errors.password?.type === "required" && (<p className="text-red-500" role="alert">password is required</p>)}
            {errors.password?.type === "minLength" && (<p className="text-red-500" role="alert">password must be at least 6 chars </p>)}
            {errors.password?.type === "maxLength" && (<p className="text-red-500" role="alert">password must be less than 20 chars</p>)}
          
          <input type="submit" value={"Login"}  className="primaryBtn" />
        </form>
        <ToastContainer />
      </div>
      </Modal>
    </>
  )
}

export default Login