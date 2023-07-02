import CartItem from "../components/CartItem";

export default function Cart() {
  return (
    <div className="container mx-auto my-10">
      <div className="grid lg:grid-cols-5 gap-4">
        <section className="col-span-4">
          {/* cart header  */}
          <div className="relative p-6 border-b-[2px]">
            <h1 className=" font-semibold text-2xl">Shopping Cart</h1>
            <span className="absolute right-5">Price</span>
          </div>

          <CartItem />
        </section>
        <aside className="col-span-1 ">
          <div className="py-6 bg-gray-50 flex flex-col px-5">
            <h6 className=" font-semibold text-xl">Subtotal</h6>
            <span>
              5 items:<span className="font-bold"> $500</span>
            </span>

            <button className="bg-yellow-500 px-2   rounded block">
              Proceed to Checkout
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
