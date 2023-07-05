import React from "react";
import { CartIcon } from "./Icons";
import { Link } from "react-router-dom";

const ProductsItem = ({ item }) => {
  return (
    <>
      <Link to={`/products/${item.id}`}>
        <div className="item p-3 m-2 border border-slate rounded-lg hover:shadow-lg transition-shadow duration-300">
          <div className="relative">
            <img
              src={item.images[0].url}
              alt="Image not Found"
              className="w-full rounded"
            />
            <span className="absolute bg-red-500 text-white top-2 right-2 rounded-full px-2">
              {item.new_price ? "sale" : ""}
            </span>
            <span className="absolute bg-yellow-500 text-white bottom-2 left-2 rounded-full px-2">
              {item.new_arrival ? "new" : ""}
            </span>
          </div>
          <h3 className=" font-light my-2 hover:text-orange-500">
            {item.name}
          </h3>
          <h5 className="my-2 text-gray-700 text-center text-2xl">
            EGP{item.price}
          </h5>
          <button className="flex items-center border border-slate rounded-lg px-2 mx-auto bg-gray-100 hover:bg-orange-500 hover:text-white transition-all duration-300">
            <CartIcon />
            <span>Add to Cart</span>
          </button>
        </div>
      </Link>
    </>
  );
};

export default ProductsItem;
