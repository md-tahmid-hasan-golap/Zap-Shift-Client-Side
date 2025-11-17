import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-7xl md:text-9xl font-extrabold text-blue-600 mb-4">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
        Page Not Found
      </h2>

      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-6">
        The page you're looking for doesn't exist or has been moved. Please
        check the URL or return to home.
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white text-lg rounded-xl shadow-md hover:bg-blue-700 transition-all"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
