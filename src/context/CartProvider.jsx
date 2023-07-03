/* eslint-disable react/prop-types */
import { useReducer } from "react";

import CartContext from "./CartContext";

//--------------------------------Reducer-------------------------------------------
const storedItems = JSON.parse(window.localStorage.getItem("cartItems"))
let storedItemsAmount = 0;
let storedItemsNum = 0;

if (storedItems) {
  storedItemsAmount = storedItems.reduce((totalAmount, item) => {
    return totalAmount +( item.amount * item.price);
  }, 0);
}

if (storedItems) {
  storedItemsNum = storedItems.reduce((totalAmount, item) => {
    return totalAmount + item.amount;
  }, 0);
}


const defaultCartState = {
  items: storedItems? storedItems : [],
  totalAmount: storedItems? storedItemsAmount : 0,
  totalItemsNum : storedItems? storedItemsNum : 0
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

    window.localStorage.setItem("cartItems",JSON.stringify(updatedItems))
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      totalItemsNum : updatedTotalItemsNum
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

    window.localStorage.setItem("cartItems",JSON.stringify(updatedItems))
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      totalItemsNum: updatedTotalItemsNum,
    };
  }

  if (action.type === "CLEAR") {
    window.localStorage.removeItem("cartItems")
    return {
      items: [],
      totalAmount: 0,
      totalItemsNum: 0,
    };
  }

  return defaultCartState;
}

//--------------------------------Provider-------------------------------------------

function CartProvider(props) {
  const [cartState, cartDispatch] = useReducer(CartReducer, defaultCartState);

  const cartContextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    totalItemsNum: cartState.totalItemsNum,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearCart: clearCartHandler,
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

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
}


export default CartProvider;