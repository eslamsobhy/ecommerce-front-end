import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";
import axios, { all } from "axios";
import { useSearchParams } from "react-router-dom";

const productsData = [
  { id: 1, name: "Product 1", brand: "Brand A", price: 10 },
  { id: 2, name: "Product 2", brand: "Brand B", price: 20 },
  { id: 3, name: "Product 3", brand: "Brand A", price: 15 }
  // Add more products
];

const ProductsPage = () => {
  const [allProducts, setAllProducts] = useState(productsData);
  const [filteredProducts, setfilteredProducts] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // get all products
    // const getAllProducts = async () => {
    //   const { data } = await axios.get("");
    //   // set all products
    //   setAllProducts(data);
    // };
  }, []);

  useEffect(() => {
    // filter products
    const filtered = allProducts.filter((product) => {
      const matchBrand =
        searchParams.get("brand") &&
        product.brand === searchParams.get("brand");

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

      if (matchBrand && inPriceRange) {
        return product;
      }
    });

    setfilteredProducts(filtered);
  }, [searchParams]);

  return (
    <div>
      <Filter />
      {/* Render your products using the filtered products */}
    </div>
  );
};

export default ProductsPage;
