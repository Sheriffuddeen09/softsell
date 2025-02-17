import { Route, Routes } from "react-router-dom";

import LoginPage from "./Form/LoginPage";
import Protected from "./Form/Protected";
import RegisterPage from "./Form/Register";
import ResetPassword from "./Form/Reset_Password";
import ChangeResetPassword from "./dashboard/ChangeResetPassword";
import Profile from "./dashboard/Profile";
import ShopPage from "./shop/ShopPage";
import About from "./component/About";
import Blogs from "./component/Blogs";
import Footer from "./Layout/Footer";
import Inquiry from "./component/Inquiry";
import Contact from "./component/Contact";
import HomePage from "./component/HomePage";
import Cart from "./cart/Cart";
import EditProfile from "./dashboard/EditProfile";
import Category from "./category/Category";
import Header from "./Layout/Header";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { useEffect, useState } from "react"
import { Api } from "./api/axios";
import ShopPageId from "./shop/ShopPageId";
import HomePageId from "./component/HomePageId";
import HomesPageId from "./component/HomesPageId";
import CategoryId from "./category/CategoryId";
import Shipment from "./checkout/Shipment";
import Checkout from "./checkout/Checkout";
import Payment from "./payment/Payment";
import OrderTracking from "./tracking/OrderTrack";
import Notifications from "./notification/Notification";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import OrderHistory from "./tracking/OrderHistory";
import Invoice from "./tracking/Invoice";


   
function App() {

  const stripePromise = loadStripe("your-stripe-public-key");



  const categories = [ {title:"Dogs"},{title:"Cats"}, {title:"Pet Clothing"},{title:"Pet Carriers"},{title:"Dog & Cat Beds"}];


    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)
    const [cart, setCart] = useState([])
    

    const [order, setOrder] = useState([])
    const [paymentMethod, setPaymentMethod] = useState('')
    const [totalPrice, setTotalPrice] = useState(0)


    const handlePaymentSuccess = async (transactionId) => {
      try {
        const userId = localStorage.getItem("user_id");
  
        // Send payment details to backend
        const response = await Api.post("/process_payment.php", {
          user_id: userId,
          total_price: totalPrice,
          payment_method: paymentMethod,
          transaction_id: transactionId,
          order_items: order.map((item) => ({
            product_id: item.product_id,
            quantity: item.quantity,
            size: item.size,
            color: item.color,
            pickup_date: item.pickup_date,
            dropoff_date: item.dropoff_date,
            pickup_time: item.pickup_time,
            dropoff_time: item.dropoff_time,
          })),
        });
  
        if (response.data.success) {
          alert("Payment Successful! Order confirmed.");
          setOrder([]);
        } else {
          alert("Payment was successful, but order processing failed.");
        }
      } catch (error) {
        console.error("Error processing payment:", error);
        alert("An error occurred while confirming your order.");
      }
    };

    const fetchProduct = async (category = '') =>{

      setError({})
      setLoading(true)
      
      let url = '/category.php'

      if (category && category !== 'All'){
        url += `?category=${encodeURIComponent(category)}`
      }
      setError({})
      setLoading(true)
        try{
          const response = await Api.get(url)
          if(Array.isArray(response.data.message)){
            setProducts(response.data.message)
          }
          else{
            setProducts([])
          }
        }
        catch (error) {
          console.error("Error Display Products", error);
          }
        finally{
          setLoading(false)
        }   
    }
    useEffect(() => {
    fetchProduct()
  }, []);

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
    // Add logic to store product in localStorage or global state
  };


  return (
    <div className="">
      <Header fetchProduct={fetchProduct} onSearch={fetchProduct} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} categories={categories} cart={cart} />
      <Routes>

        {/* register */}
      <Route path="/register" element={
        
        <RegisterPage />
       
      } />

      {/* login */}
      <Route path="/login" element={
        <LoginPage />
    } />

      {/* shoppage */}
      <Route path="/shop" element={
        <Protected>
          <ShopPage />
        </Protected>
      } />

      {/* shoppage */}
      <Route path="/shop/:id" element={
        <Protected>
          <ShopPageId />
        </Protected>
      } />

      {/* shoppage */}
      <Route path="/home/:id" element={
        <Protected>
          <HomePageId />
        </Protected>
      } />

       {/* shoppage */}
       <Route path="/homes/:id" element={
        <Protected>
          <HomesPageId />
        </Protected>
      } />

      {/* about */}
      <Route path="/about" element={
        <Protected>
          <About />
      </Protected>} />

      {/* blogs */}
      <Route path="/blogs" element={
        <Protected>
        <Blogs />
      </Protected>} />

    {/* inquiry */}
      <Route path="/inquiry" element={
        <Protected>
        <Inquiry />
        </Protected>
      } />

      {/* contact */}
      <Route path="/contact" element={
        <Protected>
        <Contact />
        </Protected>
      } />

      {/* Category */}
      <Route path="/category" element={
        <Protected>
        <Category products={products} loading={loading} />
        </Protected>
      } />

      {/* CategoryId */}
      <Route path="/category/:id" element={
        <Protected>
          <CategoryId />
        </Protected>
      } />

      {/* EditProfile */}
      <Route path="/edit" element={
        <Protected>
        <EditProfile />
        </Protected>
      } />
      {/* reset */}
      <Route path="/reset" element={
       
        <ResetPassword />
      } />

      {/* ChangeResetPassword */}
      <Route path="/reset_password" element={
        
        <ChangeResetPassword />
        
      } />

      {/* profile */}

      <Route path="/dashboard" element={
        <Protected>
        <Profile />
        </Protected>
      } />

      {/* cart */}

      <Route path="/cart" element={
        <Protected>
        <Cart cart={cart} setCart={setCart} />
        </Protected>
      } />

      {/* Shipment */}

      <Route path="/shipment" element={
        <Protected>
        <Shipment totalPrice={totalPrice} paymentMethod={paymentMethod} />
        </Protected>
      } />

      {/* Checkout */}

      <Route path="/checkout" element={
        <Protected>
        <Checkout totalPrice={totalPrice} setTotalPrice={setTotalPrice} paymentMethod={paymentMethod} order={order} setOrder={setOrder} ship />
        </Protected>
      } />

      {/* Payment */}

      <Route path="/payment" element={
        <Protected>
           <PayPalScriptProvider options={{ "client-id": "your-paypal-client-id" }}>
           <Elements stripe={stripePromise}>
        <Payment onPayment={handlePaymentSuccess} paymentMethod={paymentMethod} totalPrice={totalPrice} setOrder={setOrder} order={order}/>
        </Elements>
        </PayPalScriptProvider>
        </Protected>

      } />

      {/* OrderHistory */}

      <Route path="/order" element={
         <Protected>
          <OrderHistory />
         </Protected>
      } />


      {/* OrderTracking */}

      <Route path="/order/:order_id" element={
         <Protected>
          <OrderTracking />
         </Protected>
      } />

      {/* Invoice */}


    <Route path="/invoice/:order_id" element={
         <Protected>
          <Invoice />
         </Protected>
      } />


      {/* OrderTracking */}

      <Route path="/notification" element={
         <Protected>
          <Notifications />
         </Protected>
      } />
      {/* homepage */}

      <Route path="/" element={
         <Protected>
          <HomePage />
         </Protected>
      } />
      </Routes>
   <Footer />
    </div>
  );
}

export default App;
