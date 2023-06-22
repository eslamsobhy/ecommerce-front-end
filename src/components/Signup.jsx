/* eslint-disable react/prop-types */
import Modal from "../UI/Modal"
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Signup(props){
  const {register , handleSubmit} = useForm()
  
  async function onSubmit(data){
    let {firstName,lastName, email , password}  = data

    try {
    const response = await axios.post(`http://localhost:3000/users/signup`,{firstName,lastName, email, password });
    toast("You are successfully logged in!")
    props.toggleModal()
    console.log(response)

  } catch (error) {
    console.error(error);
    error.response ? toast(error.response.data.message) : ''
  }
  }


  return(
    <>
      <Modal toggleModal={props.toggleModal} >
        <div className="max-w-md mx-auto p-5 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Create an account</h1>
            <h1 className="text-sm mb-4">
              Already have an account? 
              <a className="text-blue-500 cursor-pointer" onClick={props.toggleModalContent}> Login</a>
            </h1>

          <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col items-center max-w-md mx-auto py-3 px-10 bg-white rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">email</label>
            <input {...register("email", { required: true, maxLength: 50 })} className="input" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">password</label>
            <input {...register("password" , { required: true, minLength:6 , maxLength: 20 })} className="input" />
          </div>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-1">firstName</label>
            <input {...register("firstName" , { required: true, maxLength: 14 })} className="input" />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-gray-700 font-semibold mb-1">lastName</label>
            <input {...register("lastName", { required: true, maxLength: 14 })} className="input" />
          </div>
            
            <input type="submit" value={"CREATE AN ACCOUNT"}  className="primaryBtn" />
        </form>
        <ToastContainer />
      </div>

    </Modal>
    </>
  )
}

export default Signup