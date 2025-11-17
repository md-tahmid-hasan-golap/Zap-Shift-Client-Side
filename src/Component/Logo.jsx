import React from "react";
import logos from "../../src/assets/banner/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center hover:opacity-80 transition-all">
      <img
        src={logos}
        alt="ZapShift Logo"
        className="w-8 h-8 md:w-10 md:h-10 object-contain"
      />

      <h2 className="text-lg md:text-2xl font-bold tracking-wide mt-5">
        Zap<span className="text-black">Shift</span>
      </h2>
    </Link>
  );
};

export default Logo;
