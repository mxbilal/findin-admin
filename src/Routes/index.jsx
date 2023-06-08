import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Dashboard from "../Pages/Dashboard";
import Messages from "../Pages/Messages";
import Layout from "../Pages/Layout";
import Business from "../Pages/Business";
import AddBusiness from "../Pages/Add Bussiness";
import AddCategory from "../Pages/Add Category";
import City from "../Pages/City";
import Reviews from "../Pages/Reviews";
import Category from "../Pages/Category";
import Bookings from "../Pages/Bookings";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


let RoutesPage = () => {
  let nonAuthenticatedPages = [
    "login",
    "forgot-password",
    "register",
  ];
  if (nonAuthenticatedPages.indexOf(window.location.pathname.split("/")[1]) > -1) {
    return <div className="public-route">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  }
  else return <Layout>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/business" element={<Business />} />
      <Route path="/add-business" element={<AddBusiness />} />
      <Route path="/add-category" element={<AddCategory />} />
      <Route path="/category" element={<Category />} />
      <Route path="/city" element={<City />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="*" element={<>no route</>} />
    </Routes>
    <ToastContainer />
  </Layout>
};

export default RoutesPage
