import paypal from './image/paypal.png'
import googlepay from './image/googlepay.png'
import visa from './image/visa.png'
import GooglePayButton from "@google-pay/button-react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
 import { useState } from 'react';

const stripePromise = loadStripe("your-stripe-public-key");
function Payment({paymentMethod, totalPrice, onPayment}){

    
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [paypalView, setPaypalView] = useState(false)
    const [visaView, setVisaView] = useState(false)
    const [googleView, setGoogleView] = useState(false)
    const stripe = useStripe();
    const elements = useElements();
  
    const handlePayPalPayment = async (details) => {
      console.log("PayPal payment successful:", details);
      onPayment(details.id);
    };
  
    const handleStripePayment = async () => {
      if (!stripe || !elements) return;
  
      setIsProcessing(true);
      const cardElement = elements.getElement(CardElement);
  
      const { paymentIntent, error } = await stripe.confirmCardPayment("your-stripe-client-secret", {
        payment_method: { card: cardElement },
      });
  
      if (error) {
        alert("Payment failed. Try again.");
      } else {
        setPaymentSuccess(true);
        onPayment(paymentIntent.id);
      }
      setIsProcessing(false);
    };

    const handlePayPalView = () =>{
        setPaypalView(!paypalView)
    }
    const handleVisaView = () =>{
        setVisaView(!visaView)
    }
    const handleGoogleView = () =>{
        setGoogleView(!googleView)
    }
    return(

        <div>

<div className="flex flex-col justify-center items-center mb-20 gap-4 mt-20">
        <h2 className="font-bold mb-4 text-3xl">Payment Details</h2>
<div className="flex justify-center flex-wrap items-center mb-20 gap-4">

                    <img
                    src={paypal}
                    alt="PayPal"
                    className={`w-72 h-72 border border-black rounded-xl cursor-pointer`}
                    onClick={handlePayPalView}
                />
                <img
                    src={googlepay}
                    alt="Google Pay"
                    className={`w-72 h-72 border border-black rounded-xl cursor-pointer`}
                    onClick={handleGoogleView}
                />
       
        
                <img
                    src={visa}
                    alt="Visa"
                    className={`w-72 h-72 border border-black rounded-xl cursor-pointer`}
                    onClick={handleVisaView}
                />
       
            </div>
            </div>

            <div className={`fixed trans top-0 flex justify-center items-center right-0 w-full h-full ${paypalView ? "block" : 'hidden'}`}>
        <div className={`sm:w-96 w-72 bg-white flex flex-col justify-center items-center h-96 rounded-xl `}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 relative -top-40 sm:-top-32 cursor-pointer  sm:left-40 left-28" onClick={handlePayPalView}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
        
    <PayPalScriptProvider options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID" }}>
      <div className="flex justify-center mt-4">
        <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold text-center mb-4">Complete Your Payment</h2>
          <PayPalButtons
            className="w-full" // Tailwind class for full width
            style={{ layout: "vertical", shape: "rect" }} // Ensure proper PayPal button display
            createOrder={(data, actions) =>
              actions.order.create({
                purchase_units: [{ amount: { value: totalPrice.toString() } }],
              })
            }
            onApprove={(data, actions) =>
              actions.order.capture().then((details) => handlePayPalPayment(details))
            }
          />
        </div>
      </div>
    </PayPalScriptProvider>

            </div>
            </div>

            <div className={`fixed trans top-0 flex justify-center items-center right-0 w-full h-full ${visaView ? "block" : 'hidden'}`}>
        <div className={`sm:w-96 w-72 bg-white flex flex-col justify-center items-center h-96 rounded-xl `}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 relative -top-10 sm:-top-14 cursor-pointer  sm:left-40 left-28" onClick={handleVisaView}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
        <Elements stripe={stripePromise}>
  <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg w-64">
    <h2 className="text-lg font-semibold text-gray-700 mb-4 text-center">
      Pay with Visa
    </h2>
    <div className="border p-4 rounded-lg bg-gray-50">
      <CardElement className="p-3 border rounded-md bg-white" />
      <button
        onClick={handleStripePayment}
        className="w-full mt-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isProcessing}
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>
    </div>
  </div>
</Elements>

            </div>
        </div>
        <div className={`fixed trans top-0 flex justify-center items-center right-0 w-full h-full ${googleView ? "block" : 'hidden'}`}>
        <div className={`sm:w-96 w-72 bg-white flex flex-col justify-center items-center h-96 rounded-xl `}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 relative -top-40 sm:top-6 cursor-pointer  sm:left-40 left-28" onClick={handleGoogleView}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
        <div className="flex justify-center items-center h-screen">
      <GooglePayButton
        environment="TEST" // Change to "PRODUCTION" for live payments
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: "CARD",
              parameters: {
                allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                allowedCardNetworks: ["MASTERCARD", "VISA"],
              },
              tokenizationSpecification: {
                type: "PAYMENT_GATEWAY",
                parameters: {
                  gateway: "stripe", // Replace with your gateway
                  "stripe:publishableKey": "your-stripe-publishable-key",
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: "your-merchant-id", // Required for PRODUCTION mode
            merchantName: "Your Store Name",
          },
          transactionInfo: {
            totalPriceStatus: "FINAL",
            totalPrice: "10.00",
            currencyCode: "USD",
            countryCode: "US",
          },
        }}
        onLoadPaymentData={(paymentRequest) => {
          console.log("Payment Success:", paymentRequest);
        }}
      />
    </div>
            </div>
        </div>
        </div>
    )
}

export default Payment