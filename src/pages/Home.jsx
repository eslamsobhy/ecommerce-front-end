/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Categories from "../components/Categories";
import OtherServices from "../components/OtherServices";
import NewArrivalsSlider from "../components/NewArrivalsSlider";
import Circles from "../components/Circles";
import DealsSlider from "../components/DealsSlider";
import axios from "axios";
import AdsSlider from "../components/AdsSlider"
import { useCookies } from 'react-cookie';


export default function Home() {

  const [cookies, setCookies,removeCookie] = useCookies(['User']);

  useEffect(()=>{
    async function getProducts(){
      // const response = await axios.get("http://localhost:3000/products")
      // console.log(response.data)
      // setProducts(response.data)
    }
    getProducts()

    async function getUserData(){
      const response = await axios.get(`http://localhost:3000/users/${cookies.User._id}`)
      removeCookie('User');
      setCookies("User", response.data.user)
    }
    getUserData()
  },[])

  const [products ,setProducts ] = useState([
    {_id:1,   image : 'public/images/pTest.png', name : "test1" ,  price : 99 , rate : "4.5" },
    {_id:2,   image : 'public/images/pTest.png', name : "test2" ,  price : 62 , rate : "3.5" },
    {_id:3,   image : 'public/images/pTest.png', name : "test3" ,  price : 81 , rate : "2" },
    {_id:4,   image : 'public/images/pTest.png', name : "test4" ,  price : 42 , rate : "5" },
    {_id:5,   image : 'public/images/pTest.png', name : "test5" ,  price : 85 , rate : "3.5" },
    {_id:6,   image : 'public/images/pTest.png', name : "test6" ,  price : 37 , rate : "4.5" },
    {_id:7,   image : 'public/images/pTest.png', name : "test7" ,  price : 33 , rate : "2.5" },
    {_id:8,   image : 'public/images/pTest.png', name : "test8" ,  price : 75 , rate : "1.5" },
    {_id:9,   image : 'public/images/pTest.png', name : "test9" ,  price : 22 , rate : "3" },
    {_id:10,  image : 'public/images/pTest.png', name : "test10" , price : 90 , rate : "1" },
    {_id:11,  image : 'public/images/pTest.png', name : "test11" , price : 27 , rate : "4" },
    {_id:12,  image : 'public/images/pTest.png', name : "test12" , price : 34 , rate : "4.5"},
    {_id:13,  image : 'public/images/pTest.png', name : "test13" ,  price : 99 , rate : "4.5" },
    {_id:14,  image : 'public/images/pTest.png', name : "test14" ,  price : 62 , rate : "3.5" },
    {_id:15,  image : 'public/images/pTest.png', name : "test15" ,  price : 81 , rate : "2" },
    {_id:16,  image : 'public/images/pTest.png', name : "test16" ,  price : 42 , rate : "5" },
    {_id:17,  image : 'public/images/pTest.png', name : "test17" ,  price : 85 , rate : "3.5" },
    {_id:18,  image : 'public/images/pTest.png', name : "test18" ,  price : 37 , rate : "4.5" }
  ]);





  return (
    <>
      <AdsSlider />
      <OtherServices />
      <Circles />
      <NewArrivalsSlider products={products} />
      <Categories />
      <DealsSlider products={products} />
    </>
  );
}