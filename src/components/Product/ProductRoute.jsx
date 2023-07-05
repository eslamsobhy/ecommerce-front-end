import { HomeIcon, RightArrowIcon } from "../Icons";

const ProductRoute = ({ product }) => {
  console.log(product);
  return (
    <>
      <div className="flex flex-wrap text-sm font-bold text-gray-800 lg:justify-center lg:items-center p-5">
        <HomeIcon />
        <RightArrowIcon />
        <span className="pb-[2px]">{product.category_id.category_name}</span>
        <RightArrowIcon />
        <span className="pb-[2px] break-words">{product.name}</span>
      </div>
    </>
  );
};

export default ProductRoute;
