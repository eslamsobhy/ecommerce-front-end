/* eslint-disable react/prop-types */
import Slider from "../UI/Slider";

import { useGlobalContext } from "../context/ProductsContext";

/*
  Instead of prop drilling you can access the global state here to get all the 
  products from the database, then filter them to get only the products with
  deals, and finally send the filtered products as props to teh Slider 
  component.

  notice: we always tend to access the global state where we want to use it
  but in this case we separate concerns to filter the data here and only sending
  as a prop the filtered data
*/

function DealsSlider({ products }) {
  const { products } = useGlobalContext();
  // here filter the products to get only the products that have deals,
  // and send the filtered products as a prop to the Slider component

  return (
    <div className="mt-auto mx-12">
      <h1 className="mx-12 font-bold text-3xl">Deals</h1>
      <Slider products={products} />
    </div>
  );
}

export default DealsSlider;
