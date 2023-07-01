import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/zoom";

import "./ProductImageCarousel.css";

// import required modules
import { FreeMode, Navigation, Pagination, Thumbs, Zoom } from "swiper";

const products = [
  {
    id: 1,
    name: "image 1",
    imageUrl: "../../public/assets/zh298-2-2b-min.jpg"
  },
  {
    id: 2,
    name: "image 2",
    imageUrl: "../../public/assets/zh298-3-2b-min.jpg"
  },
  {
    id: 3,
    name: "image 3",
    imageUrl: "../../public/assets/zh298-4-2b-min.jpg"
  },
  {
    id: 4,
    name: "image 4",
    imageUrl: "../../public/assets/zh298-5-2b-min.jpg"
  },
  { id: 5, name: "image 5", imageUrl: "../../public/assets/zh298-n1-2b.jpg" }
];

const ProductImageCarousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className="flex flex-shrink-0 flex-grow-0 basis-1/2 max-w-[460px] h-[480px]">
        <Swiper
          onSwiper={setThumbsSwiper}
          direction={"vertical"}
          slidesPerView={4}
          spaceBetween={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="first-swiper"
        >
          {products.map((product) => {
            return (
              <SwiperSlide key={product.id + 20}>
                <div className="box-border border-2 border-gray-300 rounded-md cursor-pointer h-auto overflow-hidden w-full flex justify-center items-center transition-all duration-200 ease-in-out">
                  <div className="relative pb-[136.375%] pl-[73.327%] w-full">
                    <div className="absolute inset-0 flex flex-col">
                      <img src={product.imageUrl} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper
          style={{
            "--swiper-navigation-size": "25px",
            "--swiper-navigation-color": "black",
            "--swiper-pagination-color": "grey"
          }}
          zoom={true}
          spaceBetween={5}
          navigation={true}
          pagination={{ clickable: true }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
          }}
          modules={[FreeMode, Navigation, Pagination, Zoom, Thumbs]}
          className="second-swiper"
        >
          {products.map((product) => {
            return (
              <SwiperSlide key={product.id + 10}>
                <div className="swiper-zoom-container h-auto">
                  <img src={product.imageUrl} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default ProductImageCarousel;
