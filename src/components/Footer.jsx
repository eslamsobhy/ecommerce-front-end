import { Link } from "react-router-dom";
import BackToTopButton from "./BackToTopButton.jsx";
import emailjs from 'emailjs-com';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";
import { useRef, useState } from "react";

const Footer = () => {
  const [emailSent, setEmailSent] = useState(false);
  const form = useRef();
  emailjs.init('ieyQAv01RBSvsmGou');

  function submitHandler(e) {
    e.preventDefault()

    emailjs.sendForm('service_97xavkg', 'template_puu3859', form.current, 'ieyQAv01RBSvsmGou')
      .then((result) => {
        console.log(result.text);
        form.current.reset();
        setEmailSent(true);

        // Hide the confirmation message after 3 seconds
        setTimeout(() => {
          setEmailSent(false);
        }, 3000);

      }, (error) => {
        console.log(error.text);
      });
  }
  const sendBtnClasses = emailSent ? "bg-green-500 p-2 text-white text-md rounded-e-md px-5" : "bg-f37020 p-2 text-white text-md rounded-e-md px-5"
  return (
    <>
      <footer className="bg-[#191919]">
        <header className=" flex flex-col justify-center py-5 mx-2 gap-5 ">
          <h1 className="text-center text-white font-extrabold ">
            BE THE FIRST TO KNOW
          </h1>

          <h3 className="text-white font-bold text-center ">
            Subscribe and know all the new offers and news now
          </h3>

          <form ref={form} onSubmit={(e) => submitHandler(e)} className="flex mx-auto sm:w-[450px] mb-2">
            <input name="email" type="email" required className="w-full  rounded-s-md pl-2 pr-12  focus:outline-none  focus:border-orange-300 transition-colors" placeholder="Email Address" />
            <button className={sendBtnClasses}> send</button>
          </form>
          {emailSent && (
            <div className="flex items-center fixed bottom-0 left-0 mb-4 mr-4 bg-green-500 text-white rounded-lg p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zM7 10a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1zm1 2a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-2">Kindly check your email !</span>
            </div>
          )}

        </header>
        <section className="grid grid-cols-4 pb-5 border-b  border-[#3d3d38] px-12 mx-12 ">
          <div className="col-span-4 md:col-span-1 mb-2">
            <h2 className="text-orange-600  font-bold">
              CONTACT
            </h2>
            <Link to={"/about"}>
              <p className="text-white  ">About</p>
            </Link>

            <p className="text-white  ">Contact us</p>
            <p className="text-white  ">PHONE: 16420</p>

          </div>
          <div className="col-span-4 md:col-span-1  mb-2">
            <h2 className="text-orange-600  font-bold">
              MY ACCOUNT
            </h2>

            <p className="text-white  ">Profile</p>

            <p className="text-white  ">Order history</p>

            <p className="text-white  ">Track your order</p>
          </div>
          <div className="col-span-4 md:col-span-1  mb-2 ">
            <h2 className="text-orange-600  font-bold">
              MOST RESEARCHED
            </h2>
            <p className="text-white  ">Laptop</p>
            <p className="text-white  ">Mobile Devices</p>
            <p className="text-white  ">Wearbles</p>
            <p className="text-white  ">Personal Care For Him</p>
            <p className="text-white  ">TV Accessories</p>
          </div>

          <div className="col-span-4 md:col-span-1  mb-2">
            <p className="text-[#A8A8A8] text-sm">
              Stores Working Days
            </p>
            <p className="text-[#A8A8A8] text-sm">
              Daily / 10:00 AM to 10:00 PM
            </p>

            <p className="text-black font-bold text-sm  mb-2">Download the our app </p>

            <div className="grid  grid-cols-2 mx-auto gap-x-4 gap-y-3">
              <div className=" ">
                <img src="../../public/apple_new.png"></img>
              </div>
              <div className=" ">
                <img src="../../public/google_new.png"></img>
              </div>
              <div className=" ">
                <img src="../../public/huawei_new.png"></img>
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-4 py-5 px-12 mx-12">
          <div className="col-span-4 md:col-span-1 mb-3">
            <div className="flex gap-x-1 ">
              <a href="https://www.facebook.com/" className="bg-[#33332f] hover:bg-[#4267B2] p-3 rounded">
                <FaFacebookF size={15} color="white" />
              </a>
              <a href="https://twitter.com/" className=" bg-[#33332f] hover:bg-[#1DA1F2] p-3 rounded">
                <FaTwitter size={15} color="white" />
              </a>
              <a href="https://www.linkedin.com/" className="bg-[#33332f] hover:bg-[#2867B2] p-3 rounded">
                <FaLinkedin size={15} color="white" />
              </a>
              <a href="https://www.instagram.com/" className="bg-[#33332f] hover:bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-3 rounded">
                <FaInstagram size={15} color="white" />
              </a>
            </div>
          </div>
          <div className="col-span-4 md:col-span-1 mb-3">
            <p className=" text-[#A8A8A8]">Main Features</p>
          </div>
          <div className="col-span-4 md:col-span-1 mb-3">
            <p className=" text-[#A8A8A8] text-sm md:mb-2">Super Fast Shipping</p>
            <p className=" text-white">Return and exchange service ”T & C applied”</p>
          </div>
          <div className="col-span-4 md:col-span-1">
            <p className=" text-[#A8A8A8] text-sm md:mb-2">Maintenance Center to help you</p>
            <p className=" text-[#A8A8A8] text-sm md:mb-2">More than 50 Stores at your service anywhere</p>
            <p className=" text-[#A8A8A8] text-sm">Buy Online or Pickup in Store </p>
          </div>
        </section>
        <section className="grid grid-cols-2 py-5 bg-[#0c0c0c] px-24">
          <div className="col-span-2 md:col-span-1">
            <div className="flex gap-x-1 ">
              <img className="max-h-[28px]" src="https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/smartwave/porto/footer/paymentsn.png" />
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 mt-2 md:mt-0">
            <p className="text-white">©Copyright 2023 by ITI ELECTRONIX TEAM. All Rights Reserved.</p>
          </div>
        </section>
      </footer>
      <BackToTopButton />
    </>
  );
};

export default Footer;
