import { BoltIcon, ClickIcon, SparklesIcon } from "./Icons";

export const NewArrivalBadge = () => {
  return (
    <>
      <div className="flex items-center w-fit gap-1 bg-blue-700 text-gray-100 mb-2 mx-[2px] h-7 px-2.5 py-0.5 rounded-xl">
        <SparklesIcon></SparklesIcon>
        <span className="text-sm font-semibold whitespace-nowrap">
          New Arrival
        </span>
      </div>
    </>
  );
};

export const BestSellerBadge = () => {
  return (
    <>
      <div className="flex items-center w-fit gap-1 bg-green-600 text-gray-100 mb-2 mx-[2px] h-7 px-2.5 py-0.5 rounded-xl">
        <ClickIcon></ClickIcon>
        <span className="text-sm font-semibold whitespace-nowrap">
          Best Seller
        </span>
      </div>
    </>
  );
};

export const SaleBadge = () => {
  return (
    <>
      <div className="flex items-center flex-w w-fit gap-1 bg-red-600 text-gray-100 mb-2 mx-[2px] h-7 px-2.5 py-0.5 rounded-xl">
        <BoltIcon></BoltIcon>
        <span className="text-sm font-semibold whitespace-nowrap">Sale</span>
      </div>
    </>
  );
};
