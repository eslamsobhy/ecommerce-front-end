/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form"
import Modal from "../UI/Modal"
import axios  from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login(props){

  const {register , handleSubmit} = useForm()
  

  async function onSubmit(data){
    const {email , password}  = data

    try {
    const response = await axios.post(`http://localhost:3000/users/login`,{ email, password });
    console.log(response.data.token) //save the token in a cookie
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

      <div className=" max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Welcome back!</h1>
        <h1 className="text-lg mb-4">Sign in to your account</h1>
        <p className="text-sm mb-4">Don't have an account? <a onClick={props.toggleModalContent} className="text-blue-500 cursor-pointer">Sign Up</a></p>

        <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col items-center  max-w-md mx-auto py-4 px-10 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
            <input {...register("email", { required: true,minLength:6 , maxLength: 50 })} className="input" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">password</label>
            <input {...register("password", { required: true, minLength:6 , maxLength: 20 })} className="input" />
          </div>
          <input type="submit" value={"Login"}  className="primaryBtn" />
        </form>
        <ToastContainer />
      </div>
      </Modal>
    </>
  )
}

export default Login