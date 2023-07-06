import { Link } from "react-router-dom";
import BackToTopButton from "./BackToTopButton.jsx";

import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaCcVisa,
  FaCcMastercard,
  FaMoneyBill,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#272723]">
        <header className=" flex flex-col justify-center py-5 ">
          <h1 className="text-center text-white font-extrabold ">
            BE THE FIRST TO KNOW
          </h1>

          <h3 className="text-white font-bold text-center ">
            Subscribe and know all the new offers and news now
          </h3>
        </header>
        <section className="grid grid-cols-4 pb-5 border-b  border-[#3d3d38] ">
          <div className="col-span-4 md:col-span-1">
            <h2 className="text-orange-600 font-serif font-extrabold">
              CONNECT WITH US
            </h2>
            <Link to={"/about"}>
              <p className="text-white font-bold ">About company</p>
            </Link>

            <p className="text-white font-bold ">call us: 442266</p>

          </div>
          <div className="col-span-4 md:col-span-1">
            <h2 className="text-orange-600 font-serif font-extrabold">
              ARITHMETIC
            </h2>

            <p className="text-white font-bold ">my personal account</p>

            <p className="text-white font-bold ">Order history</p>

            <p className="text-white font-bold ">Track your order</p>
          </div>
          <div className="col-span-4 md:col-span-1 ">
            <h2 className="text-orange-600 font-serif font-extrabold">
              MOST SEARCHED
            </h2>

            <p className="text-white font-bold ">Mobiles</p>

            <p className="text-white font-bold ">laptop</p>

            <p className="text-white font-bold ">TV accessories</p>
          </div>

          <div className="col-span-4 md:col-span-1">
            <p className="text-gray-300 text-opacity-50">
              Working days of all our branches , Daily / 10:00 am - 10:00 pm{" "}
            </p>

            <p className="text-white font-bold ">Download the our app </p>

            <div className="grid  grid-cols-2 mx-auto gap-y-3">
              <div className=" max-w-[240px] ">
                <img src="../../public/apple_new.png"></img>
              </div>
              <div className=" max-w-[240px] ">
                <img src="../../public/google_new.png"></img>
              </div>
              <div className=" max-w-[240px] ">
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
              <a href="https://eg.visamiddleeast.com/en_EG">
                <FaCcVisa size={32} color="#FF662B" />
              </a>
              <a href="https://www.mastercard.us/en-us.html">
                <FaCcMastercard size={32} color="#FF662B" />
              </a>
              <a href="https://www.parliament.uk/site-information/glossary/money-bills/">
                <FaMoneyBill size={32} color="#FF662B" />
              </a>
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
