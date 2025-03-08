import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/img9.jpg';
import img2 from '../assets/img11.jpg';
import img3 from '../assets/img10.jpg';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';

const Body = () => {
  
  return (
    <div className="h-[550px] -mt-32 md:mt-6 w-screen flex justify-center items-center overflow-hidden">
      
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute top-1/2 transform -translate-y-1/2 left-2 z-10 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center"
            >
              <BiLeftArrow />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute mr-4 top-1/2 transform -translate-y-1/2 right-2 z-10 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center"
            >
              <BiRightArrow />
            </button>
          )
        }
      >
        <div className="w-full h-full">
          <img src={img1} alt="Slide 1" className="w-full h-full object-contain" />
        </div>
        <div className="w-full h-full">
          <img src={img2} alt="Slide 2" className="w-full h-full object-contain" />
        </div>
        <div className="w-full h-full">
          <img src={img3} alt="Slide 3" className="w-full md:mt-64 h-full object-contain" />
        </div>
      </Carousel>
    </div>
  );
};

export default Body;
