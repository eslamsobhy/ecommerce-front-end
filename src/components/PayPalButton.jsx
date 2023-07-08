/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import CartContext from "../context/CartContext.jsx";
import emailjs from 'emailjs-com';

const ButtonWrapper = ({ currency, showSpinner }) => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const CartCTX = useContext(CartContext);
  const [amount, setAmount] = useState("");
  const style = { layout: "vertical" };
  emailjs.init('ieyQAv01RBSvsmGou');

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
    setAmount(Math.round(CartCTX.totalAmount /30))
  }, [currency, showSpinner]);

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[amount, currency, style]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              // Your code here after create the order
              return orderId;
            });
        }}
        onApprove={async function (data, actions) {
          await actions.order.capture();
          emailjs.sendForm('service_97xavkg', 'template_6bes58a', data, 'ieyQAv01RBSvsmGou');
          window.localStorage.setItem("purchasedItems", JSON.stringify(CartCTX.items));
          CartCTX.clearCart();
          window.localStorage.setItem("cartItems", "");
          window.localStorage.setItem("totalAmount", "")
            .then((result_2) => {
              console.log(result_2.text);
            }, (error) => {
              console.log(error.text);
            });
        }}
      />
    </>
  );
};

export default function PayPal() {
  const currency = "USD";

  return (
    <div className="w-full px-4  max-w-md mx-auto xl:m-10 md:m-10 sm:my-10">
      <PayPalScriptProvider
        options={{
          clientId: "test",
          components: "buttons",
          currency: "USD",
        }}
      >
        <ButtonWrapper currency={currency} showSpinner={false} />
      </PayPalScriptProvider>
    </div>
  );
}
