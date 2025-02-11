import { Route, Routes } from "react-router-dom";

import LoginPage from "./Form/LoginPage";
import Protected from "./Form/Protected";
import RegisterPage from "./Form/Register";
import ResetPassword from "./Form/Reset_Password";
import ChangeResetPassword from "./Form/ChangeResetPassword";
import Profile from "./Form/Profile";
import ShopPage from "./shop/ShopPage";
import About from "./component/About";
import Blogs from "./component/Blogs";
import Footer from "./Layout/Footer";
import Inquiry from "./component/Inquiry";
import Contact from "./component/Contact";
import HomePage from "./component/HomePage";
import Cart from "./cart/Cart";
import EditProfile from "./Form/EditProfile";
import Category from "./category/Category";
import Header from "./Layout/Header";

import { useEffect, useState } from "react"
import { Api } from "./api/axios";

import AOS from 'aos'
import 'aos/dist/aos.css'
import ShopPageId from "./shop/ShopPageId";


   
function App() {

  useEffect(() =>{
    AOS.init({duration: 2000})
}, [])


  const categories = [ {title:"Dogs"},{title:"Cats"}, {title:"Pet Clothing"},{title:"Pet Carriers"},{title:"Dog & Cat Beds"}];


  const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [error, setError] = useState({})
    const [loading, setLoading] = useState(false)


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
      <Header fetchProduct={fetchProduct} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} categories={categories} />
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
        <Cart />
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
