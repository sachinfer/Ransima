import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "../pages/signup/signup";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import NoPage from "../pages/NoPage";
import NavigationBar from "../navigation/navbar";
import AdminPage from "../pages/Admin";
import Product from "../pages/Product";
import Login from "../pages/login/login";
import Maps from "../pages/Maps";
import Cart from "../pages/Cart";

function RoutesComponent() {
  return (
    <BrowserRouter>
      <NavigationBar /> {/* NavigationBar will be displayed on all pages */}
      <Routes>
        {/* Route definitions */}
        <Route path="/" element={<NoPage />} /> {/* Home component at the root path */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="product" element={<Product />} />
        <Route path="maps" element={<Maps />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NoPage />} /> {/* Catch-all route for 404 page */}
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesComponent;
