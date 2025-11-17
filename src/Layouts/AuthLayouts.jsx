import React from "react";
import Logo from "../Component/Logo";
import { Outlet } from "react-router";
import authImg from "../../src/assets/banner/authImage.png";

const AuthLayouts = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Logo></Logo>
      <div className="mt-16 flex">
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
        <div lassName="flex-1">
          <img src={authImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayouts;
