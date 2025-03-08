import React from "react";
import { Link } from "react-router-dom";
import backimage from "../assets/background.jpg";

const Friend = () => {
  return (
    <div className="relative md:mt-32 mt-20 md:mb-10 h-screen">
      <div className="absolute inset-0">
        <img
          src={backimage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="text-2xl md:text-5xl font-semibold mb-4">
            DID WE JUST BECOME BEST FRIENDS?
          </h1>
          <p className="text-base md:my-10 md:text-xl font-normal mb-8">
            Every person we meet is a new chapter in our story, a connection to
            a new world waiting to be explored.
          </p>
          <Link to="/contact">
            <button className="px-10 py-5 font-medium bg-slate-900 hover:bg-slate-950 rounded">
              GET IN TOUCH
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Friend;
