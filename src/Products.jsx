import React from "react";
import Product from "./product";
// import AddToCartButton from "./AddToCartButton";

const Products = () => {
  const productsData = [
    {
      id: 1,
      img: "",
      name: "labtop",
      description: "description for product",
      price: "$50",
    },

    {
      id: 2,
      img: "",
      name: "mobile",
      description: "description for product",
      price: "$20",
    },

    {
      id: 3,
      img: "",
      name: "camera",
      description: "description for product",
      price: "$30",
    },
    {
      id: 4,
      img: "",
      name: "labtop",
      description: "description for product",
      price: "$50",
    },

    {
      id: 5,
      img: "",
      name: "mobile",
      description: "description for product",
      price: "$20",
    },
  ];

  return (
    <>
      <div id="container" className=" bg-slate-100  ">
        <div className="mx-auto max-w-2xl  sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Proudcts
          </h2>
        </div>
        <div
          id="product data"
          className=" grid sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-x-12 gap-y-10 p-10 "
        >
          {productsData.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </div>

        <div className="mx-auto max-w-2xl  sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8  text-blue-900">
          <a
            href=""
            className="text-2xl font-bold tracking-tight hover:underline  bottom-0 right-0 h-16 w-16  "
          >
            Shop for more products
          </a>
        </div>
      </div>
    </>
  );
};

export default Products;
