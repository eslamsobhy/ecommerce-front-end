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
    setAmount((CartCTX.totalAmount / 30).toFixed(2));
  }, [currency, showSpinner]);

  async function sendEmail(data) {
    try {
      await emailjs.sendForm(
        'service_97xavkg',
        'template_6bes58a',
        data,
        'ieyQAv01RBSvsmGou'
      );
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  }

  function handleCapture(actions) {
    return new Promise((resolve, reject) => {
      actions.order.capture().then(details => {
        console.log(details);
        resolve(details);
      }).catch(err => {
        console.error(err);
        reject(err);
      });
    });
  }

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
        onApprove={(data, actions) => {
          handleCapture(actions).then(() => {
            console.log("Payment successful!");
            sendEmail(data);
            window.localStorage.setItem("purchasedItems", JSON.stringify(CartCTX.items));
            CartCTX.clearCart();
            window.localStorage.setItem("cartItems", "");
            window.localStorage.setItem("totalAmount", "");
            console.log("Items purchased and cart cleared");
          }).catch((error) => {
            console.error("Error capturing transaction:", error);
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