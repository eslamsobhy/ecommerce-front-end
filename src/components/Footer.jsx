import { Link } from "react-router-dom";
import BackToTopButton from "./BackToTopButton.jsx";

import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#272723]">
        <header className=" flex flex-col justify-center mb-3 py-5 ">
          <h3 className="text-center text-white font-bold ">
            BE THE FIRST TO KNOW
          </h3>

          <h4 className="text-white  text-center ">
            Subscribe and know all the new offers and news now
          </h4>
        </header>
        <section className="grid grid-cols-4 pb-5 border-b  border-[#3d3d38] ">
          <div className="col-span-4 md:col-span-1 mb-2">
            <h2 className="text-orange-600  font-bold">
              CONNECT WITH US
            </h2>
            <Link to={"/about"}>
              <p className="text-white  ">About company</p>
            </Link>

            <p className="text-white  ">call us: 442266</p>

          </div>
          <div className="col-span-4 md:col-span-1  mb-2">
            <h2 className="text-orange-600  font-bold">
              ARITHMETIC
            </h2>

            <p className="text-white  ">my personal account</p>

            <p className="text-white  ">Order history</p>

            <p className="text-white  ">Track your order</p>
          </div>
          <div className="col-span-4 md:col-span-1  mb-1 ">
            <h2 className="text-orange-600  font-bold">
              MOST SEARCHED
            </h2>

            <p className="text-white  ">Mobiles</p>

            <p className="text-white  ">laptop</p>

            <p className="text-white  ">TV accessories</p>
          </div>

          <div className="col-span-4 md:col-span-1  mb-2">
            <p className="text-gray-300 text-opacity-50 text-sm">
              Stores Working Days
            </p>
            <p className="text-gray-300 text-opacity-50 text-sm">
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
        <section className="grid grid-cols-4 py-5">
          <div className="col-span-4 md:col-span-1">
            <div className="flex gap-x-1 ">
              <a href="https://www.facebook.com/" className="bg-[#33332f] hover:bg-[#4267B2] p-2 rounded">
                <FaFacebook size={20} color="white" />
              </a>
              <a href="https://twitter.com/" className=" bg-[#33332f] hover:bg-[#1DA1F2] p-2 rounded">
                <FaTwitter size={20} color="white" />
              </a>
              <a href="https://www.linkedin.com/" className="bg-[#33332f] hover:bg-[#2867B2] p-2 rounded">
                <FaLinkedin size={20} color="white" />
              </a>
              <a href="https://www.instagram.com/" className="bg-[#33332f] hover:bg-gradient-to-br from-pink-500 via-purple-600 to-yellow-400 p-2 rounded">
                <FaInstagram size={20} color="white" />
              </a>
            </div>
          </div>
          <div className="col-span-4 md:col-span-1">
            <p className=" text-[#A8A8A8]">Main Features</p>
          </div>
          <div className="col-span-4 md:col-span-1">
            <p className=" text-[#A8A8A8]">Super Fast Shipping</p>
            <br />
            <p className=" text-white">Return and exchange service ”T & C applied”</p>
          </div>
          <div className="col-span-4 md:col-span-1">
            <p className=" text-[#A8A8A8]">Maintenance Center to help you</p>
            <br />
            <p className=" text-[#A8A8A8]">More than 50 Stores at your service anywhere</p>
            <br />
            <p className=" text-[#A8A8A8]">Buy Online or Pickup in Store </p>
          </div>
        </section>
        <section className="grid grid-cols-2 py-5 bg-[#0c0c0c]">
          <div className="col-span-2 md:col-span-1">
            <div className="flex gap-x-1 ">
              <img className="max-h-[28px]" src="https://smhttp-ssl-73217.nexcesscdn.net/pub/media/wysiwyg/smartwave/porto/footer/paymentsn.png" />
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="text-white">©Copyright 2021 by 2B Computer. All Rights Reserved.</p>
          </div>
        </section>
      </footer>
      <BackToTopButton />
    </>
  );
};

export default Footer;
