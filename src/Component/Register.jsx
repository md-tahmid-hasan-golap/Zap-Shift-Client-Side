import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { registerUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handelRegistation = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const photo = data.photo[0];

    // Photo URL (temporary local blob)
    const photoURL = photo ? URL.createObjectURL(photo) : "";

    registerUser(email, password)
      .then((result) => {
        const user = result.user;

        // Update Profile
        updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            Swal.fire({
              title: "Registration Successful!",
              text: "Welcome to our website ❤️",
              icon: "success",
              timer: 2000,
              showConfirmButton: false,
            });

            navigate("/");
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        Swal.fire({
          title: "Registration Failed!",
          text: error.message,
          icon: "error",
        });
      });
  };

  const handelsignInWithGoogle = () => {
    signInWithGoogle()
      .then(() => {
        Swal.fire({
          title: "Login Successful!",
          text: "Logged in with Google",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
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

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-md shadow-xl rounded-xl p-8 bg-white">
        <h1 className="text-3xl font-bold text-center mb-6">
          Create an Account
        </h1>

        <form onSubmit={handleSubmit(handelRegistation)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="label font-medium">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input input-bordered w-full"
              placeholder="Enter your Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">Name is required</p>
            )}
          </div>

          {/* Photo */}
          <div>
            <label className="label font-medium">Photo</label>
            <input
              type="file"
              {...register("photo", { required: true })}
              className="file-input input-bordered w-full"
            />
            {errors.photo && (
              <p className="text-red-500 text-sm mt-1">Photo is required</p>
            )}
          </div>

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
            {errors.password?.type === "required" && (
              <p className="text-red-500 text-sm mt-1">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500 text-sm mt-1">
                Password must be at least 6 characters
              </p>
            )}
          </div>

          <button className="btn btn-neutral w-full mt-2">Register</button>

          {/* OR */}
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

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
