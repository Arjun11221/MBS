import React from "react";
import artistImage from "../assets/artist.jpg";

const Artist = () => {
  return (
    <div className="container text-white md:mt-24 mt-10 mx-auto p-6">
      <div className="flex flex-wrap md:ml-32 md:flex-nowrap items-center justify-between">
      <div className="md:w-1/2 w-full p-4">
          <img
            src={artistImage}
            alt="Manish Yadav"
            className="w-full h-96 object-contain"
          />
        </div>
        <div className="md:w-1/2 md:-mt-6 w-full p-4">
          <h2 className="text-lg text-center font-normal tracking-wider mb-4">
            MEET THE OWNER
          </h2>
          <h3 className="text-2xl text-center tracking-wider font-semibold mb-2">
            MANISH YADAV
          </h3>
          <p className="text-lg tracking-wider font-normal text-center mb-2">
            Bouncer
          </p>
          
        </div>
        
      </div>
    </div>
  );
};

export default Artist;
