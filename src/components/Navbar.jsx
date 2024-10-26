import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="flex justify-center items-center gap-8 py-4 px-6 bg-white shadow-md rounded-lg mx-auto max-w-5xl mt-4">
      <Link
        to="/"
        className={`text-lg text-gray-600 hover:text-blue-500 transition-all duration-200 ${
          location.pathname === "/" ? "text-blue-600 font-bold underline" : ""
        }`}
      >
        Home
      </Link>
      <Link
        to="/about"
        className={`text-lg text-gray-600 hover:text-blue-500 transition-all duration-200 ${
          location.pathname === "/about" ? "text-blue-600 font-bold underline" : ""
        }`}
      >
        About
      </Link>
      <Link
        to="/contact"
        className={`text-lg text-gray-600 hover:text-blue-500 transition-all duration-200 ${
          location.pathname === "/contact" ? "text-blue-600 font-bold underline" : ""
        }`}
      >
        Contact
      </Link>
      <Link
        to="/service"
        className={`text-lg text-gray-600 hover:text-blue-500 transition-all duration-200 ${
          location.pathname === "/service" ? "text-blue-600 font-bold underline" : ""
        }`}
      >
        Services
      </Link>
      <Link
        to="/product"
        className={`text-lg text-gray-600 hover:text-blue-500 transition-all duration-200 ${
          location.pathname === "/product" ? "text-blue-600 font-bold underline" : ""
        }`}
      >
        Products
      </Link>
    </nav>
  );
};

export default Navbar;
