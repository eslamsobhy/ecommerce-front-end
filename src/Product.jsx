import React from "react";

function Product(props) {
  return (
    <>
      <div className="Product ">
        <div class="group relative">
          <div
            width="100px"
            className=" bg-gray-200  overflow-hidden  hover:cursor-pointer aspect-h-1 aspect-w-1 w-full
              group-hover:opacity-75 rounded-full border-radius:1.5rem"
          >
            <img
              src="./lab.jpg"
              alt=""
              className="rounded-full border-radius:1.5rem "
            />
          </div>
        </div>

        <div className="">
          <div className="  text-center  font-medium font-weight:500 ">
            <p className="name">{props.product.name} </p>
            <p>{props.product.description}</p>
          </div>

          <p className=" text-center italic font-bold font-weight:700 ">
            {" "}
            {props.product.price}
          </p>
          <button
            // onClick={props.onClick}
            type="button"
            className=" bg-gray-300 hover:bg-orange-300  w-full  rounded-full  font-bold "
            width="100px"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
