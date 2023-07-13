/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useReducer } from "react";

import CartContext from "./CartContext";
import { useCookies } from "react-cookie";
import axios from "axios";

//--------------------------------Reducer-------------------------------------------

const defaultCartState = {
  items: [],
  totalAmount: 0,
  totalItemsNum: 0,
  changed: false,
};

function CartReducer(state, action) {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    let updatedTotalItemsNum;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    updatedTotalItemsNum = updatedItems.reduce((total, item) => {
      return total + item.amount;
    }, 0);

    // window.localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      totalItemsNum: updatedTotalItemsNum,
      changed: true
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];

    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;
    let updatedTotalItemsNum;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    updatedTotalItemsNum = updatedItems.reduce((total, item) => {
      return total + item.amount;
    }, 0);

    // window.localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      totalItemsNum: updatedTotalItemsNum,
      changed: true
    };
  }

  if (action.type === "CLEAR") {
    // window.localStorage.removeItem("cartItems");
    return {
      items: [],
      totalAmount: 0,
      totalItemsNum: 0,
      changed: true
    };
  }
  if (action.type === "REPLACE") {
    
    return {
      items: action.items,
      totalAmount: action.totalAmount,
      totalItemsNum: action.totalItemsNum,
      changed: true
    };
  }

  return defaultCartState;
}

//--------------------------------Provider-------------------------------------------

function CartProvider(props) {
  const [cookies, setCookies] = useCookies(["User", "UserToken"]);

  const [cartState, cartDispatch] = useReducer(CartReducer, defaultCartState);

  const cartContextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    totalItemsNum: cartState.totalItemsNum,
    changed: cartState.changed,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearCart: clearCartHandler,
    fetchCartItems: fetchCartItems,
    sendCartItems: sendCartItems,
    replaceCart: replaceCart
  };

  function addItemHandler(item) {
    cartDispatch({ type: "ADD", item: item });
  }

  function removeItemHandler(id) {
    cartDispatch({ type: "REMOVE", id: id });
  }

  function clearCartHandler() {
    cartDispatch({ type: "CLEAR" });
  }

  function replaceCart(cartItems,totalAmount,totalItemsNum) {
    cartDispatch({ type: "REPLACE", items: cartItems, totalAmount: totalAmount ,totalItemsNum:totalItemsNum});
    console.log(totalItemsNum)
  }

  // ---------------------sync cart with backend methods------------------------------------

  async function fetchCartItems () {
      const sendRequest = async () => {
        const user = await axios.get(
          `http://localhost:8000/users/${cookies.User._id}`,
          { headers: { Authorization: cookies.UserToken } }
        );
        return user
      };

      try {
        const response = await sendRequest();
        console.log(await response.data.use)
        const cartItems = JSON.parse(await response.data.user.cart_items) ;
        console.log(cartItems)
        const totalAmount = JSON.parse(await cartItems.reduce((sum, item) => sum + item.amount * item.price, 0));
        cartDispatch({
          type: "REPLACE",
          items: cartItems || [],
          totalAmount: totalAmount,
          totalItemsNum: cartItems.reduce((sum, item) => sum + item.amount, 0)
        });
      
        console.log(response);
      } catch (error) {
        console.log(error);
      }

    }


    
  async function sendCartItems(cart) {
    const sendRequest = async () => {
      const reqData = {
        cart_items: cart.items.map((item) => ({
          product: item.id,
          quantity: item.amount
        }))
      };

      await axios.patch(
        `http://localhost:8000/users/${cookies.User._id}`,
        reqData,
        { headers: { Authorization: cookies.UserToken } }
      );
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
