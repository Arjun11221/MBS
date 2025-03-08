import React from "react";
import { SERVICES } from "../utils/constant";
import Friend from "./Friend";
import Footer from "./Footer";

const Services = () => {
  return (
    <div>
      <div className="border-t border-gray-700 mt-1 lg:mt-2 pt-4 text-center"></div>
      <h2 className="md:text-5xl mt-12 md:mt-24 text-3xl text-center font-normal tracking-widest mb-6">
        Gallery
      </h2>
      {SERVICES.map((service, index) => (
        <div key={index} className="flex md:mt-24 flex-col md:flex-row justify-center items-center gap-6 p-4">

          <div className="w-64 h-64 md:w-80 md:h-80 p-2 flex justify-center">
            <img
              src={service.image1}
              alt="Gallery1"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="w-64 h-64 md:w-80 md:h-80 p-2 hidden md:flex justify-center">
            <img
              src={service.image2}
              alt="Gallery2"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

          <div className="w-64 h-64 md:w-80 md:h-80 p-2 flex justify-center">
            <img
              src={service.image3}
              alt="Gallery3"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="w-64 h-64 md:w-80 md:h-80 p-2 flex justify-center">
            <img
              src={service.image4}
              alt="Gallery3"
              className="w-full h-full object-cover rounded-md"
            />
          </div>

        </div>
      ))}
      <Friend />
      <hr className="md:mt-40 mt-24" />
      <Footer />
    </div>
  );
};

export default Services;
