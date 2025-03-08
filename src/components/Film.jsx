import React from 'react';
import ReactPlayer from 'react-player';
import video from "../assets/bouncerVideo.mp4";

const Film = () => {
  return (
    <div className="md:mt-32 mt-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-8">
        <div className="md:col-span-4 text-lg md:mt-28">
          <h2 className="text-2xl text-center tracking-wider font-semibold mb-4">
          Testimonials
          </h2>
          <p className="text-center tracking-wide">
          Professional and polite, these two made us feel perfectly safe. More than protecting us, We are friendly and entertaining.    </p>
        </div>
        
        <div className="relative md:mt-0 mt-5 md:col-span-6" style={{ paddingTop: '56.25%' }}>
          <ReactPlayer
            url={video}
            className="absolute top-0 left-0"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      </div>
      <hr className="md:mt-36 mt-28 "  />
    </div>
  );
};

export default Film;
