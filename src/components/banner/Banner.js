import React, { useState } from "react";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg"
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (next) => next + 1);
  };

  const bannerStyle = {
    transform: `translateX(-${currentSlide * 100}vw)`
  };
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[350] relative">
        <div
          style={bannerStyle}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          <img
            className="w-screen h-[300] object-cover"
            src={data[0]}
            alt="Image One"
            loading="priority"
          />
          <img
            className="w-screen h-[300] object-cover"
            src={data[1]}
            alt="Image two"
            loading="priority"
          />
          <img
            className="w-screen h-[300] object-cover"
            src={data[2]}
            alt="Image three"
            loading="priority"
          />
          <img
            className="w-screen h-[300] object-cover"
            src={data[3]}
            alt="Image four"
            loading="priority"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-10">
          <div onClick={prevSlide}>
            {/*<FaArrowAltCircleLeft className="hover:cursor-pointer" size={45} />*/}

            <i className="ri-arrow-right-circle-fill cursor-pointer arrow ri-3x"></i>
          </div>
          <div onClick={nextSlide}>
            {/*<FaArrowAltCircleRight className="cursor-pointer" size={45} />*/}

            <i className="ri-arrow-left-circle-fill cursor-pointer arrow ri-3x top-8"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
