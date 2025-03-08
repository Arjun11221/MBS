import React from "react";
import { DATA } from "../utils/constant";
import Artist from "./Artist";

const Feature = () => {
  return (
    <div className="text-white flex flex-col items-center -mt-20 md:mt-24">
      <h2 className="md:text-5xl text-3xl text-center font-normal tracking-normal mb-24">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-96 md:gap-y-20 w-full max-w-5xl px-4">
        {DATA.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <div className="w-72 h-72 md:h-96 md:w-96">
              <img
                src={item.image}
                alt="Background"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-base font-normal tracking-widest mt-4 text-center">
              {item.title}
            </h1>
          </div>
        ))}
      </div>
      <Artist/>
    </div>
  );
};

export default Feature;
