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
import Cart from "./shop/Cart";


function App() {




  return (
    <div className="">
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
