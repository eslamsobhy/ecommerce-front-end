/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import axios, { all } from "axios";
import { useSearchParams } from "react-router-dom";
import PaginatedItems from "../components/PaginatedItems";

const productsData = [
  { id: 1, name: "Product 1", brand: "Brand A", price: 10 },
  { id: 2, name: "Product 2", brand: "Brand B", price: 20 },
  { id: 3, name: "Product 3", brand: "Brand A", price: 15 }
  // Add more products
];

const Products = () => {
  const [allProducts, setAllProducts] = useState(null);
  const [filteredProducts, setfilteredProducts] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // get all products
    const getAllProducts = async () => {
      const { data } = await axios.get("http://localhost:8000/products");
      // set all products
      setAllProducts(data);
      setfilteredProducts(data);
    };

    getAllProducts();
  }, []);

  useEffect(() => {
    if (allProducts) {
      // filter products
      let filtered = null;
      if (searchParams.get("brand") === "All") {
        filtered = allProducts.filter((product) => {
          const minPrice = searchParams.get("min");
          const maxPrice = searchParams.get("max");
          let inPriceRange = true;

          if (minPrice && !maxPrice) {
            inPriceRange = product.price >= minPrice ? true : false;
          } else if (!minPrice && maxPrice) {
            inPriceRange = product.price <= maxPrice ? true : false;
          } else if (minPrice && maxPrice) {
            inPriceRange =
              product.price >= minPrice && product.price <= maxPrice
                ? true
                : false;
          }

          if (inPriceRange) {
            return product;
          }
        });
      } else {
        filtered = allProducts.filter((product) => {
          const matchBrand =
            searchParams.get("brand") &&
            product.brand_id.brand_name === searchParams.get("brand");

          const minPrice = searchParams.get("min");
          const maxPrice = searchParams.get("max");
          let inPriceRange = true;

          if (minPrice && !maxPrice) {
            inPriceRange = product.price >= minPrice ? true : false;
          } else if (!minPrice && maxPrice) {
            inPriceRange = product.price <= maxPrice ? true : false;
          } else if (minPrice && maxPrice) {
            inPriceRange =
              product.price >= minPrice && product.price <= maxPrice
                ? true
                : false;
          }

          if (matchBrand && inPriceRange) {
            return product;
          }
        });
      }

      setfilteredProducts(filtered);
      // console.log(filtered);
      // console.log(filteredProducts);
    }
  }, [searchParams]);

  return (
    <>
      <div className="container flex  mx-auto ">
        <div className="relative">
          <Filter />
        </div>
        {/* Render your products using the filtered products */}
        <div id="container">
          {filteredProducts && filteredProducts?.length !== 0 && (
            <PaginatedItems filteredProducts={filteredProducts} />
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
