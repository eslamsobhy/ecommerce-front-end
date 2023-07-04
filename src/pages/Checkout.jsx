import { useForm } from "react-hook-form";
import PayPal from "../components/PayPalButton.jsx";
import { useState } from "react";
import { BsFillCheckCircleFill } from 'react-icons/bs';
const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    data.paymentMethod === "Cash" ? setCashclass("") : setCashclass("hidden");
    data.paymentMethod === "PayPal"
      ? setPaypalclass("")
      : setPaypalclass("hidden");
  };
  const [paypalclass, setPaypalclass] = useState("hidden");
  const [cashclass, setCashclass] = useState("hidden");
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto xl:m-10 md:m-10 sm:my-10"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">
            Name:
          </label>
          <input
            id="name"
            {...register("name", { required: true })}
            className="w-full sm:w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 transition-colors"
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
            {...register("phone", { required: true })}
            className="w-full sm:w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 transition-colors"
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
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="w-full sm:w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 transition-colors"
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
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 transition-colors"
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
            className="w-full sm:w-1/2 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 transition-colors"
          >
            <option value="">Select a payment method</option>
            <option value="PayPal">PayPal Or Credit Card</option>
            <option value="Cash">Cash On Delivery</option>
          </select>
          {errors.paymentMethod && (
            <span className="text-red-500">Please select a payment method</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 my-10 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition-colors"
        >
          Proceed To Payment
        </button>
      </form>
      <div className={paypalclass}>
        <PayPal />
      </div>
      <div className={cashclass}>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-slate-200 p-4 rounded-lg shadow-md z-30 animate-slide-down">
          <div className="flex justify-center m-auto"><BsFillCheckCircleFill size={30} color="#f37020"/></div>
          <h3 className="text-center font-serif text-2xl text-f37020 my-2" >Congratulations </h3>
          <p >We have received your order and our team is preparing it as soon as possible. Thank you for confirming the order.</p>
          <p></p>
          <button
            onClick={() => {
              setCashclass("hidden");
            }}
          >
            <img className="fixed -top-10 -left-10 w-10 " src="../../public/close-button.svg" alt="close"></img>
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
