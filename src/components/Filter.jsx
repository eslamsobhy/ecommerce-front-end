import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const brands = ["All", "Brand A", "Brand B", "Brand C"]; // Replace with your brand options

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpenBrand, setIsOpenBrand] = useState(false);
  const [isOpenPrice, setIsOpenPrice] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(
    searchParams.get("brand") ? searchParams.get("brand") : "All"
  );
  const [priceRange, setPriceRange] = useState({
    min: searchParams.get("min") ? searchParams.get("min") : "",
    max: searchParams.get("max") ? searchParams.get("max") : ""
  });

  const toggleBrandSection = () => {
    setIsOpenBrand(!isOpenBrand);
  };

  const togglePriceSection = () => {
    setIsOpenPrice(!isOpenPrice);
  };

  const handlePriceChange = (e, type) => {
    const value = e.target.value;
    setPriceRange({ ...priceRange, [type]: value });
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  };

  const applyFilters = () => {
    const data = {};

    if (selectedBrand) {
      data.brand = selectedBrand;
    }
    for (let key in priceRange) {
      if (priceRange[key] !== "") {
        data[key] = priceRange[key];
      }
    }

    setSearchParams(data);
  };

  return (
    <div className="fixed top-0 left-0 w-80 p-4 bg-white shadow-md rounded-md">
      <button
        className="flex items-center justify-between w-full px-4 py-2 text-lg font-medium text-left bg-gray-200 focus:outline-none focus:bg-gray-300 rounded-md"
        onClick={toggleBrandSection}
      >
        Brands
        <ArrowIcon isOpen={isOpenBrand} />
      </button>
      {isOpenBrand && (
        <div className="mt-4">
          {brands.map((brand) => (
            <div key={brand} className="space-x-2">
              <input
                type="radio"
                checked={selectedBrand === brand}
                onChange={() => handleBrandChange(brand)}
                name={brand}
              />
              <label htmlFor={brand}>{brand}</label>
            </div>
          ))}
        </div>
      )}
      <button
        className="flex items-center justify-between w-full px-4 py-2 mt-4 text-lg font-medium text-left bg-gray-200 focus:outline-none focus:bg-gray-300 rounded-md"
        onClick={togglePriceSection}
      >
        Price Range
        <ArrowIcon isOpen={isOpenPrice} />
      </button>
      {isOpenPrice && (
        <div className="mt-4">
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Min"
              value={priceRange.min}
              onChange={(e) => handlePriceChange(e, "min")}
              className="w-1/2 px-2 py-1 text-sm border rounded-md"
            />
            <input
              type="number"
              placeholder="Max"
              value={priceRange.max}
              onChange={(e) => handlePriceChange(e, "max")}
              className="w-1/2 px-2 py-1 text-sm border rounded-md"
            />
          </div>
        </div>
      )}
      <button
        className="w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600"
        onClick={applyFilters}
      >
        Apply Filters
      </button>
    </div>
  );
};

const ArrowIcon = ({ isOpen }) => {
  return (
    <>
      <svg
        className={`w-5 h-5 ml-2 transition-transform duration-300 transform ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </>
  );
};

export default Filter;
