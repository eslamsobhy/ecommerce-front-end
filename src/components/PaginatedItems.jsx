/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import ProductsItem from "./ProductsItem";

// Example items, to simulate fetching from another resources.

function PaginatedItems({ itemsData }) {
  const itemData = itemsData;
  
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(itemData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(itemData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % itemData.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {currentItems.map((item,index) => (
          <ProductsItem key={index} item={item} />
        ))}
      </div>
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        breakLabel="..."
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="flex justify-center"
        pageClassName="mx-2 py-2 px-4 rounded hover:bg-orange-500 transition duration-100"
        previousClassName="mx-2 py-2 px-4 rounded hover:bg-orange-500 transition duration-100"
        nextClassName="mx-2 py-2 px-4 rounded hover:bg-orange-500 transition duration-100"
        activeClassName="bg-orange-500 text-white"
        disabledClassName="text-gray-400 cursor-not-allowed"
        initialPage={0}
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;
