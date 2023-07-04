/* eslint-disable react/prop-types */
import  { useState } from "react";
import { useSearchParams } from "react-router-dom";

const brands = ["All", "Brand A", "Brand B", "Brand C"]; // Replace with your brand options

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpenBrand, setIsOpenBrand] = useState(false);
  const [isOpenPrice, setIsOpenPrice] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(
    searchParams.get("brand") ? searchParams.get("brand") : "All"
  );
  const [priceRange, setPriceRange] = useState({
    min: searchParams.get("min") ? searchParams.get("min") : "",
    max: searchParams.get("max") ? searchParams.get("max") : ""
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleBrandSection = () => {
    setIsOpenBrand(!isOpenBrand);
  };

  const togglePriceSection = () => {
    setIsOpenPrice(!isOpenPrice);
  };

  const handleBackdropClick = () => {
    setIsMenuOpen(false);
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
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className="md:hidden block fixed bottom-4 left-4">
        <button
          className="rounded-full bg-gray-200 p-3 focus:outline-none"
          onClick={toggleMenu}
        >
          <FilterIcon />
        </button>
      </div>
      <div
        className={
          !isMenuOpen
            ? "fixed top-0 left-0 hidden md:block md:w-80 p-4 bg-white shadow-md rounded-md"
            : "relative left-0 top-0 h-screen w-64 p-4 bg-white shadow-lg"
        }
      >
        {/* Add Close Button to Menu */}
        {isMenuOpen && (
          <div className="flex justify-end pb-3">
            <span className="cursor-pointer" onClick={toggleMenu}>
              <CloseIcon />
            </span>
          </div>
        )}

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
      {isMenuOpen && (
        <div
          className="fixed inset-y-0 right-0 w-[calc(100%-16rem)] bg-gray-900 opacity-50"
          onClick={handleBackdropClick}
        />
      )}
    </>
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

const FilterIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
        />
      </svg>
    </>
  );
};

const CloseIcon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </>
  );
};

export default Filter;