import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AllergyAdvice from "./Pages/AllergyAdvice";
import Login from "./Pages/Login";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Register from "./Pages/Register";
import PageNotFound from "./Pages/PageNotFound";
import UserProfile from "./Pages/UserProfile";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";
import Menu from "./Pages/Menu";
import ProductDescriptionPage from "./Pages/ProductDescriptionPage";
import Footer from "./Components/Footer";
import Cart from "./Pages/Cart";
import Payment from "./Pages/Payment";
import Sucess from "./Payment/Sucess";
import Failure from "./Payment/Failure";
import ProtectedRoutes from "./Pages/ProtectedRoutes";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="/menu"
          element={<ProtectedRoutes components={<Menu />} />}
        />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="allergyadvice" element={<AllergyAdvice />} />
        <Route path="login" element={<Login />} />
        <Route
          path="cart"
          element={<ProtectedRoutes components={<Cart />} />}
        />
        <Route path="register" element={<Register />} />
        <Route
          path="userprofile"
          element={<ProtectedRoutes components={<UserProfile />} />}
        />
        <Route
          path="payment"
          element={<ProtectedRoutes components={<Payment />} />}
        />
        <Route path="sucess" element={<Sucess />} />
        <Route path="failure" element={<Failure />} />

        <Route
          path="productdescriptionpage"
          element={<ProductDescriptionPage />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
