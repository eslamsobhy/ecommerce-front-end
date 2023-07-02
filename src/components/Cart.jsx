import { useState } from "react"
import CartItem from "./CartItem"


const Cart = () => {
const [items, setItems] = useState([
    {
      poster_path:"https://m.media-amazon.com/images/I/71nHKoF+OJL._AC_AA180_.jpg", 
      item_name:"Avatar: The Way of Water",
      item_provider:"by sam Wothington",
      item_desc:"bluray",
      available:true,
      price:200
    },
    {
      poster_path:"https://m.media-amazon.com/images/I/71nHKoF+OJL._AC_AA180_.jpg", 
      item_name:"Avatar2: The Way of Water",
      item_provider:"by sam Wothington",
      item_desc:"bluray",
      available:false,
      price:100
    },
    {
      poster_path:"https://m.media-amazon.com/images/I/71nHKoF+OJL._AC_AA180_.jpg", 
      item_name:"Avatar3: The Way of Water",
      item_provider:"by sam Wothington",
      item_desc:"bluray",
      available:true,
      price:300
    }
  ])


  const deleteItem = (index)=> {
    const newItems = [... items];
    newItems.splice(index, 1);
    setItems(newItems)
    console.log(index);
  }

  return (
    <>
    <div className="container mx-auto my-10">
        <div className="grid grid-cols-5  gap-4">

          <section className="col-span-5 lg:col-span-4">
            {/* cart header  */}
            <div className="relative p-6 border-b-[2px]">
              <h1 className=" font-semibold text-2xl">Shopping Cart</h1>
              <span className="absolute right-5">Price</span>
            </div>

            {items.map((item, index)=> (
              <CartItem item={item} index={index} deleteItem={deleteItem}/>
            ))}

          </section>
          <aside className="col-span-5 lg:col-span-1">
            <div className="py-6 bg-gray-50 flex flex-col px-5">
              <h6 className=" font-semibold text-xl">Subtotal</h6>
              <span>5 items:<span className="font-bold"> $500</span></span>
              
              <button className="bg-yellow-500 px-2  rounded block">Checkout</button>
            </div>
          </aside>
        </div>
    </div>
</>
  )
   
  
}

export default Cart