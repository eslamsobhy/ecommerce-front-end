/* eslint-disable no-unused-vars */
import { useContext } from "react"
import CartItem from "../components/CartItem"
import cartContext from "../context/CartContext"
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext"
import { toast } from "react-toastify";
import { useCookies } from 'react-cookie';


const Cart = () => {
  const userCTX = useContext(UserContext)
  const myCart = useContext(cartContext)
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(['UserToken','User']);

  function removeItemHandler(id) {
    myCart.removeItem(id);
  }

  function addItemHandler(item) {
    myCart.addItem({ ...item, amount: 1 });
  }

  function checkoutHandler(){
    const cartIsNotEmpty = myCart.totalItemsNum ? true : false
    const userStatus = window.localStorage.getItem("logged")

    if(userStatus && cartIsNotEmpty){
      navigate("/checkout")
    }else if(!userStatus){
      userCTX.toggleModal()
      toast(`Please Sign First!`)
    }else if(!cartIsNotEmpty){
      toast(`The Cart Is Empty ${cookies.User['first_name']}!`)
    }

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

            {myCart.items.length ? (
              myCart.items.map((item) => <CartItem 
              item={item}
              key={item.id}     
              onAdd={() => addItemHandler(item)}
              onRemove={() => removeItemHandler(item.id)} 
              />)
            ) : (
              localStorage.getItem("cartItems") &&
              JSON.parse(localStorage.getItem("cartItems")).map((item) => (
                <CartItem 
                  item={item} 
                  key={item.id} 
                  onAdd={() => addItemHandler(item)}
                  onRemove={() => removeItemHandler(item.id)} 
                />
              ))
            )}

          </section>
          <aside className="col-span-5 lg:col-span-1">
            <div className="py-6 bg-gray-50 flex flex-col px-5">
              <h6 className=" font-semibold text-xl">Subtotal</h6>
              <span>{myCart.totalItemsNum} items:<span className="font-bold"> ${myCart.totalAmount}</span></span>
              
              <button onClick={checkoutHandler} className="bg-f37020 px-2 max-w-[200px]  rounded block">Checkout</button>
            </div>
          </aside>
        </div>
    </div>
</>
  )
  
}

export default Cart