import React from 'react';
import Slider from "react-slick";
import slider1 from"../../assets/images/banner-4.jpeg"
import slider2 from"../../assets/images/mokasiny-1-1200x675-1.jpg"
import slider3 from"../../assets/images/slider-image-3.jpeg"
import "./MainSlider.css"
function MainSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        // autoplay:true
      };
    return (
        <div style={{height:"50vh"}}> 
            <Slider {...settings} >
                <img src={slider1} alt="" />
                <img src={slider2} alt="" />
                <img src={slider3} alt="" />
            </Slider> 
        </div>
    );
}

export default MainSlider;