import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../assets/banner-1.png';
import banner2 from '../assets/banner-2.png';
import banner3 from '../assets/banner-3.png';
import banner4 from '../assets/banner-4.png';
import banner5 from '../assets/banner-5.png';
import banner6 from '../assets/banner-6.png';

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container my-5">
      <Slider {...settings}>
        <div>
          <img  className="w-full h-64 object-cover rounded-lg pr-2" src={banner1} alt="" />
        </div>
        <div>
          <img  className="w-full h-64 object-cover rounded-lg pr-2" src={banner2} alt="" />
        </div>
        <div>
          <img  className="w-full h-64 object-cover rounded-lg pr-2" src={banner3} alt="" />
        </div>
        <div>
          <img className="w-full h-64 object-cover rounded-lg pr-2" src={banner4} alt="" />
        </div>
        <div>
          <img className="w-full h-64 object-cover rounded-lg pr-2" src={banner5} alt="" />
        </div>
        <div>
          <img className="w-full h-64 object-cover rounded-lg pr-2" src={banner6} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;