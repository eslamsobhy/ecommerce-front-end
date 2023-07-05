import axios from "axios";
import { useEffect, useState } from "react";
import ProductImageCarousel from "../components/Product/ProductImageCarousel";
import ProductDetails from "../components/Product/ProductDetails";
import ProductPanels from "../components/Product/ProductPanels";
import ProductRoute from "../components/Product/ProductRoute";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(0);
  const { id } = useParams();

  // handleCounterDecrement
  const handleCounterDecrement = () => {
    if (count > 0) {
      setCount((prevState) => prevState - 1);
    }
  };
  // handleCounterIncrement
  const handleCounterIncrement = () => {
    setCount((prevState) => prevState + 1);
  };

  useEffect(() => {
    async function getProduct() {
      const { data } = await axios.get(`http://localhost:8000/products/${id}`);
      console.log(data);
      setProduct(data);
    }

    getProduct();
  }, []);

  return (
    <>
      <div>
        <div className="flex flex-col gap-5 bg-gray-300 p-5">
          {product && (
            <>
              <div className="bg-white flex px-5">
                <ProductRoute product={product} />
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-5 bg-white p-10">
                <ProductImageCarousel productImages={product.images} />
                <ProductDetails
                  product={product}
                  count={count}
                  handleCounterDecrement={handleCounterDecrement}
                  handleCounterIncrement={handleCounterIncrement}
                />
              </div>
              <div className="bg-white  px-5">
                <ProductPanels product={product} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductPage;
