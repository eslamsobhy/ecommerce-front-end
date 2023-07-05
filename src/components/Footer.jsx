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
      <footer className=" bg-black bg-opacity-95 ">
        <div className="flex flex-col items-center justify-center  px-5 m-auto">
          <div className=" flex flex-col justify-center py-5 ">
            <h1 className="text-center text-white font-extrabold ">
              BE THE FIRST TO KNOW
            </h1>

            <h3 className="text-white font-bold ">
              Subscribe and know all the new offers and news now
            </h3>
          </div>

          <div className="flex justify-between w-full m-auto py-5 ">
            <div className=" h-32 w-1/3">
              <h2 className="text-orange-600 font-serif font-extrabold">
                CONNECT WITH US
              </h2>
              <Link to={"/about"}>
              <p className="text-white font-bold ">About company</p>
              </Link>

              <p className="text-white font-bold ">call us: 442266</p>

            </div>

            <div className="w-4"></div>

            <div className=" h-32 w-1/3">
              <h2 className="text-orange-600 font-serif font-extrabold">
                ARITHMETIC
              </h2>

              <p className="text-white font-bold ">my personal account</p>

              <p className="text-white font-bold ">Order history</p>

              <p className="text-white font-bold ">Track your order</p>
            </div>

            <div className="w-4"></div>

            <div className=" h-32 w-1/3">
              <h2 className="text-orange-600 font-serif font-extrabold">
                MOST SEARCHED
              </h2>

              <p className="text-white font-bold ">Mobiles</p>

              <p className="text-white font-bold ">laptop</p>

              <p className="text-white font-bold ">TV accessories</p>
            </div>

            <div className="w-4"></div>

            <div className=" h-32 w-1/3">
              <p className="text-gray-300 text-opacity-50">
                Working days of all our branches , Daily / 10:00 am - 10:00 pm{" "}
              </p>

              <p className="text-white font-bold ">Download the our app </p>

              <div className=" w-1/3 flex gap-1 ">
                <img src="../../public/apple_new.png"></img>

                <img src="../../public/google_new.png"></img>

                <img src="../../public//huawei_new.png"></img>
              </div>
            </div>
          </div>

          <div className=" flex justify-between items-center w-full py-5 ">
            <div className="w-4"></div>

            <div className=" h-fit w-fit ">
              <ul className=" flex flex-row">
                <li className="px-4 py-2">
                  <a href="https://www.facebook.com/">
                    {" "}
                    <FaFacebook size={32} color="blue" />{" "}
                  </a>
                </li>

                <li className="px-4 py-2">
                  <a href="https://twitter.com/">
                    {" "}
                    <FaTwitter size={32} color="#38bdf8" />{" "}
                  </a>
                </li>

                <li className="px-4 py-2">
                  <a href="https://www.linkedin.com/">
                    {" "}
                    <FaLinkedin size={32} color="blue" />{" "}
                  </a>
                </li>

                <li className="px-4 py-2">
                  <a href="https://www.instagram.com/">
                    {" "}
                    <FaInstagram size={32} color="red" />{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-4"></div>

            <div className=" h-fit w-fit">
              <h2 className="text-white font-bold ">Enjoy with us</h2>
            </div>

            <div className="w-4"></div>

            <div className=" h-fit w-fit">
              <ul className="flex flex-row">
                <li className="px-4 py-2">
                  <a href="https://www.facebook.com/">
                    {" "}
                    <FaCcVisa size={32} color="green" />{" "}
                  </a>
                </li>

                <li className="px-4 py-2">
                  <a href="https://twitter.com/">
                    {" "}
                    <FaCcMastercard size={32} color="green" />{" "}
                  </a>
                </li>

                <li className="px-4 py-2">
                  <a href="https://www.linkedin.com/">
                    {" "}
                    <FaMoneyBill size={32} color="green" />{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-4"></div>
          </div>
        </div>

        <BackToTopButton />
      </footer>
    </>
  );
};

export default Footer;
