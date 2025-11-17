import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle Email/Password Login
  const handelLogin = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        Swal.fire({
          title: "Login Successful!",
          text: "Welcome back!",
          icon: "success",
          confirmButtonText: "Okay",
        });

        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Login Failed!",
          text: error.message,
          icon: "error",
        });
      });
  };

  // Handle Google Login
  const handelsignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        Swal.fire({
          title: "Login Successful!",
          text: "Logged in with Google!",
          icon: "success",
          confirmButtonText: "Okay",
        });

        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          title: "Google Login Failed!",
          text: error.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-md shadow-xl rounded-xl p-8 bg-white">
        <h1 className="text-3xl font-bold text-center mb-6">Login Now!</h1>

        <form onSubmit={handleSubmit(handelLogin)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="label font-medium">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input input-bordered w-full"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">Email is required</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="label font-medium">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="input input-bordered w-full"
              placeholder="Enter password"
            />
            {errors.password?.type === "minLength" && (
              <p className="text-red-500 text-sm mt-1">
                Password must be at least 6 characters
              </p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a className="link link-hover text-sm">Forgot password?</a>
          </div>

          {/* Login Button */}
          <button className="btn btn-neutral w-full mt-2">Login</button>

          {/* OR Divider */}
          <div className="flex items-center gap-4 my-4">
            <div className="h-[1px] bg-gray-300 w-full"></div>
            <span className="text-gray-500 font-medium">OR</span>
            <div className="h-[1px] bg-gray-300 w-full"></div>
          </div>

          {/* Google Login */}
          <button
            type="button"
            onClick={handelsignInWithGoogle}
            className="btn btn-outline w-full flex items-center justify-center gap-2"
          >
            <FcGoogle size={25} /> Sign In With Google
          </button>
        </form>

        {/* Go to Register */}
        <p className="text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
