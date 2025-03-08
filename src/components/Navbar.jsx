import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="p-4 relative">
      <div className="container mx-auto flex justify-around items-center">
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src={image}
              alt="Logo"
              className="md:h-32 w-24 h-20 rounded-md md:w-40 md:mr-96"
            />
          </Link>
        </div>
        <Link
          to="/"
          className="text-white md:text-xl hover:text-gray-400 cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="/services"
          className="text-white md:text-xl hover:text-gray-400 cursor-pointer"
        >
          Gallery
        </Link>
        <Link
          to="/contact"
          className="text-white md:text-xl hover:text-gray-400 cursor-pointer"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
