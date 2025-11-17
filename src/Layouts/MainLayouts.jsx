import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const MainLayouts = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
