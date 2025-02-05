import { Route, Routes } from "react-router-dom";

import LoginPage from "./Form/LoginPage";
import Protected from "./Form/Protected";
import RegisterPage from "./Form/Register";
import ChangePassword from "./Form/ChangeResetPassword";
import ResetPassword from "./Form/Reset_Password";
import ChangeResetPassword from "./Form/ChangeResetPassword";
import Profile from "./Form/Profile";
import ShopPage from "./shop/ShopPage";
import About from "./component/About";
import Blogs from "./component/Blogs";
import Footer from "./Layout/Footer";
import Inquiry from "./component/Inquiry";
import Contact from "./component/Contact";


function App() {




  return (
    <div className="">
      <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/inquiry" element={<Inquiry />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="/reset_password" element={<ChangeResetPassword />} />
      <Route path="/dashboard" element={<Profile />} />
      <Route path="/" element={
        <Protected>
        <ChangePassword />
        </Protected>
      } />
      </Routes>
   <Footer />
    </div>
  );
}

export default App;
