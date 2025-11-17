import React, { useContext } from "react";
import Logo from "./Logo";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, SignOut } = useContext(AuthContext);
  const handelLogout = () => {
    SignOut()
      .then(() => {
        console.log("User logged out");

        // SUCCESS ALERT
        Swal.fire({
          title: "Logged Out",
          text: "You have been logged out successfully.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        console.log(error);

        // ERROR ALERT
        Swal.fire({
          title: "Logout Failed",
          text: error.message,
          icon: "error",
        });
      });
  };

  const link = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#CAEB66] bg-black font-bold mr-2" : "mr-2"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#CAEB66] bg-black font-bold mr-2" : "mr-2"
          }
          to="/covarage"
        >
          Coverage
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#CAEB66] bg-black font-bold mr-2" : "mr-2"
          }
          to="/AboutUs"
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#CAEB66] bg-black font-bold mr-2" : "mr-2"
          }
          to="/pricing"
        >
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-[#CAEB66] bg-black font-bold mr-2" : "mr-2"
          }
          to="/beaRider"
        >
          Be a Rider
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-md mt-4 rounded-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl hidden md:flex">
          <Logo></Logo>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end mr-4 gap-3">
        {user ? (
          <div className="navbar-end mr-4 gap-3">
            <button
              onClick={handelLogout}
              className="btn text-white bg-red-600"
            >
              LogOut
            </button>
          </div>
        ) : (
          <div className="navbar-end mr-4 gap-3">
            <Link to="/login" className="btn btn-outline">
              Login
            </Link>
            <Link
              to="/register"
              className="btn bg-[#CAEB66] rounded-lg font-bold"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
