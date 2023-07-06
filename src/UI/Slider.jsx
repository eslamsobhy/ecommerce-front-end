/* eslint-disable no-unused-vars */
// Import Swiper React components
import { Grid, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";
import { useContext, useEffect, useState } from "react";
import { BiBasket } from "react-icons/bi";
import CartContext from "../context/CartContext";

// import required modules

const Slider = () => {
  const myCart = useContext(CartContext)
  const [products, setProducts] = useState([
    {
      _id: 1,
      image: ["public/images/pTest.png"],
      name: "test1",
      price: "99",
      rate: "4.5",
    },
    {
      _id: 2,
      image: ["public/images/pTest.png"],
      name: "test2",
      price: "62",
      rate: "3.5",
    },
    {
      _id: 3,
      image: ["public/images/pTest.png"],
      name: "test3",
      price: "81",
      rate: "2",
    },
    {
      _id: 4,
      image: ["public/images/pTest.png"],
      name: "test4",
      price: "42",
      rate: "5",
    },
    {
      _id: 5,
      image: ["public/images/pTest.png"],
      name: "test5",
      price: "85",
      rate: "3.5",
    },
    {
      _id: 6,
      image: ["public/images/pTest.png"],
      name: "test6",
      price: "37",
      rate: "4.5",
    },
    {
      _id: 7,
      image: ["public/images/pTest.png"],
      name: "test7",
      price: "33",
      rate: "2.5",
    },
    {
      _id: 8,
      image: ["public/images/pTest.png"],
      name: "test8",
      price: "75",
      rate: "1.5",
    },
    {
      _id: 9,
      image: ["public/images/pTest.png"],
      name: "test9",
      price: "22",
      rate: "3",
    },
    {
      _id: 10,
      image: ["public/images/pTest.png"],
      name: "test10",
      price: "90",
      rate: "1",
    },
    {
      _id: 11,
      image: ["public/images/pTest.png"],
      name: "test11",
      price: "27",
      rate: "4",
    },
    {
      _id: 12,
      image: ["public/images/pTest.png"],
      name: "test12",
      price: "34",
      rate: "4.5",
    },
    {
      _id: 13,
      image: ["public/images/pTest.png"],
      name: "test13",
      price: "99",
      rate: "4.5",
    },
    {
      _id: 14,
      image: ["public/images/pTest.png"],
      name: "test14",
      price: "62",
      rate: "3.5",
    },
    {
      _id: 15,
      image: ["public/images/pTest.png"],
      name: "test15",
      price: "81",
      rate: "2",
    },
    {
      _id: 16,
      image: ["public/images/pTest.png"],
      name: "test16",
      price: "42",
      rate: "5",
    },
    {
      _id: 17,
      image: ["public/images/pTest.png"],
      name: "test17",
      price: "85",
      rate: "3.5",
    },
    {
      _id: 18,
      image: ["public/images/pTest.png"],
      name: "test18",
      price: "37",
      rate: "4.5",
    },
  ]);

  const [slidesPerView, setSlidesPerView] = useState(5);

  async function addItemToCart(product){
    myCart.addItem({
      key :product._id,
      id: product._id,
      name: product.name,
      image : product.image,
      amount :1,
      price: product.price
    })
    
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSlidesPerView(6);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(2);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="my-12">
      <Swiper
        style={{
          "--swiper-navigation-color": "black",
          "--swiper-pagination-color": "black",
        }}
        slidesPerView={slidesPerView}
        grid={{
          rows: 1,
        }}
        spaceBetween={20}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Grid, Pagination, Navigation]}
        className="container"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div
              key={product._id}
              className="card border   px-4 py-1 bg-white  shadow-md rounded-lg" >
              <figure>
                <img src={product.image} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">
                    <dd className="text-orange-600 flex items-center dark:text-orange-500">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        aria-hidden="true"
                        className="mr-1 stroke-current dark:stroke-orange-500"
                      >
                        <path
                          d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>{" "}
                      {product.rate}
                    </dd>
                  </div>
                  <div className="badge badge-outline text-gray-500">
                    {product.price}LE
                  </div>
                  <button onClick={()=>addItemToCart(product)} className="flex items-center gap-3 border p-2 rounded-lg mx-auto my-3 hover:bg-orange-500 hover:text-white text-sm">
                    Add to cart <BiBasket />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;