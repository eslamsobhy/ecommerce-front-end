/* eslint-disable no-unused-vars */
import axios from "axios";

export async function FetchCartItems () {
  const sendRequest = async () => {
    
    const userID = (JSON.parse(window.localStorage.getItem('User'))).id || null
    const UserToken = window.localStorage.getItem('UserToken') || null
    if(!userID ,!UserToken){
      return
    }
    const user = await axios.get(
      `http://localhost:8000/users/${userID}`,
      { headers: { Authorization: UserToken } }
    );
    return user
  };

  try {
    // id image name amount price
    const response = await sendRequest();
    const cartData = await response.data.user.cart_items
    // console.log(cartData) //cartData.quantity

    const quantities = cartData.map((item)=> item.quantity)
    // console.log(quantities) 

    const cartItems = cartData.map((item) => item.product)  //cartItems.new_price
    // console.log(cartItems)
    const myItems = cartItems.map((item, index)=>({
          id : item.id,
          name : item.name,
          image: item.images[0].url,
          amount: quantities[index],
          price : item.new_price
        }) 
    ) 
      // console.log(myItems)
      const totalAmount =  myItems.reduce((sum, item) => sum + item.amount * item.price, 0);
      const totalItemsNum =  myItems.reduce((sum, item) => sum + item.amount , 0);
      
      // cartDispatch({
      //     type: "REPLACE",
      //     items: myItems || [],
      //     totalAmount: totalAmount || 0 ,
      //     totalItemsNum: totalItemsNum || 0,
      //     changed:false
      //   });
        let result = {myItems , totalAmount , totalItemsNum}
        return result

  } catch (error) {
    console.log(error);
  }

}
