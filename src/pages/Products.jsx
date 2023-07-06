/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import axios, { all } from "axios";
import { useSearchParams } from "react-router-dom";
import PaginatedItems from "../components/PaginatedItems";

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
    };

    getAllProducts();
  }, []);

  useEffect(() => {
    if (allProducts) {
      // filter products
      let filtered = null;
      if (
        searchParams.get("brand") === "All" &&
        searchParams.get("category") !== "All"
      ) {
        filtered = allProducts.filter((product) => {
          if (isInPriceRange(product) && hasMatchCategory(product)) {
            return product;
          }
        });
      } else if (
        searchParams.get("category") === "All" &&
        searchParams.get("brand") !== "All"
      ) {
        filtered = allProducts.filter((product) => {
          if (hasMatchBrand(product) && isInPriceRange(product)) {
            return product;
          }
        });
      } else if (
        searchParams.get("category") === "All" &&
        searchParams.get("brand") === "All"
      ) {
        filtered = allProducts.filter((product) => {
          if (isInPriceRange(product)) {
            return product;
          }
        });
      } else {
        filtered = allProducts.filter((product) => {
          if (
            hasMatchBrand(product) &&
            isInPriceRange(product) &&
            hasMatchCategory(product)
          ) {
            return product;
          }
        });
      }
      setfilteredProducts(filtered);
    }
  }, [allProducts, searchParams]);

  const hasMatchCategory = (product) => {
    let matchCategory = true;
    if (searchParams.get("category")) {
      matchCategory =
        searchParams.get("category") &&
        product.category_id.category_name === searchParams.get("category");
    }
    return matchCategory;
  };

  const hasMatchBrand = (product) => {
    let matchBrand = true;
    if (searchParams.get("brand")) {
      matchBrand =
        searchParams.get("brand") &&
        product.brand_id.brand_name === searchParams.get("brand");
    }

    return matchBrand;
  };

  const isInPriceRange = (product) => {
    const minPrice = searchParams.get("min");
    const maxPrice = searchParams.get("max");
    let inPriceRange = true;

    if (minPrice && !maxPrice) {
      inPriceRange = product.price >= minPrice ? true : false;
    } else if (!minPrice && maxPrice) {
      inPriceRange = product.price <= maxPrice ? true : false;
    } else if (minPrice && maxPrice) {
      inPriceRange =
        product.price >= minPrice && product.price <= maxPrice ? true : false;
    }
    return inPriceRange;
  };

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
