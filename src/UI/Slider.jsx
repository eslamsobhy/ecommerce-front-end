/* eslint-disable react/prop-types */
import { useState } from 'react';
import {  BiChevronRight , BiChevronLeft, BiBasket  } from 'react-icons/bi';


function Slider({products}){
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const lastIndex = products.length - 6;
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 6;
      return newIndex > lastIndex ? lastIndex : newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 6;
      return newIndex < 0 ? 0 : newIndex;
    });
  };



  const showLeftArrow = currentIndex > 0;
  const showRightArrow = currentIndex < products.length - 6;

  return (
    <>
      <div className="slider mx-12 my-8 relative">
        <div className="slider-cards flex " >
          {products.slice(currentIndex, currentIndex + 6).map((product) => (
            <div key={product._id} className="card border mx-1 p-4 w-96 bg-white  shadow-md rounded-lg">
              <figure><img src={product.images} /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  {product.name}
                </h2>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">
                    <dd className="text-indigo-600 flex items-center dark:text-orange-500">
                      <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-current dark:stroke-orange-500">
                      <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg> {product.rate}
                    </dd>
                  </div> 
                  <div className="badge badge-outline text-gray-500">{product.price}LE</div>
                  <button className='flex items-center gap-3 border p-2 rounded-lg mx-auto my-3 hover:bg-orange-500 hover:text-white'>
                    Add to cart <BiBasket />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {showLeftArrow && (
          <button className="arrow ml-[-47px]  hover:bg-orange-500 absolute top-1/2 transform -translate-y-1/2 left-2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center  cursor-pointer " onClick={prevSlide}>
          <BiChevronLeft />
        </button>
        )}
        {showRightArrow  && (
          <button className="arrow mr-[-47px]  hover:bg-orange-500 absolute top-1/2 transform -translate-y-1/2 right-2 bg-black text-white rounded-full w-10 h-10 flex items-center justify-center  cursor-pointer " onClick={nextSlide}>
        <BiChevronRight />
        </button>
        )}
      </div>
    </>
  );
}


export default Slider