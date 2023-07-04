import React from "react";

const ProductsItem = ({ item }) => {
  return (
    <>
      <div className="item  p-3 m-2 border border-slate rounded-lg">
        <a href="https://2b.com.eg/en/msi-gf63-thin-10sc-808xeg-intelr-coretm-i5-10500h-8gb-1tb-256gb-ssd-nvidiar-geforcer-gtxr-1650-4gb-15-6-fhd-black.html">
          <div className="relative">
            <img
              src="https://smhttp-ssl-73217.nexcesscdn.net/pub/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/z/m/zm952-1-2b.jpg"
              alt="Image not Found"
              className="w-full hover:shadow-lg transition-shadow duration-300 rounded"
            />
            <span className="absolute bg-red-500 text-white top-2 right-2 rounded-full px-2">
              {item.sale ? "sale" : ""}
            </span>
            <span className="absolute bg-yellow-500 text-white bottom-2 left-2 rounded-full px-2">
              {item.newArrival ? "new" : ""}
            </span>
          </div>
          <h3 className=" font-light my-2 hover:text-orange-500">
            {item.name}
          </h3>
        </a>
        <h5 className="my-2 text-gray-700 text-center text-2xl">
          EGP{item.price}
        </h5>
        <button className="flex items-center gap-2 border border-slate rounded-lg px-2 mx-auto bg-gray-100 hover:bg-orange-500 hover:text-white transition-all duration-300">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 576 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
          </svg>
          <span>Add to Cart</span>
        </button>
      </div>
    </>
  );
};

export default ProductsItem;
