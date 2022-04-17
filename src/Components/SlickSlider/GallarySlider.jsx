import React from "react";
import Slider from "react-slick";
import './Slider.css'
import GallaryCard from "../Card/GallaryCard";
import galarypicture1 from '../../Assats/images/gallery/picture-1.png'
import galarypicture2 from '../../Assats/images/gallery/picture-2.png'
import galarypicture3 from '../../Assats/images/gallery/picture-3.png'
import galarypicture4 from '../../Assats/images/gallery/picture-4.png'

const GallarySlider = () => {

    const settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
    };
  
    return (
        <div className="galary__slider__wrapper">
          <Slider {...settings}>
            <div>
              
                  <GallaryCard
                     gallaryimg={galarypicture1}
                  />
             
            </div>
            <div>
              
                <GallaryCard
                    gallaryimg={galarypicture2}
                />
             
            </div>
            <div>
              
                <GallaryCard
                    gallaryimg={galarypicture3}
                />
            
            </div>
            <div>
          
                <GallaryCard
                    gallaryimg={galarypicture4}
                />
            
            </div>
            <div>
             
                <GallaryCard
                    gallaryimg={galarypicture1}
                />
              
            </div>
            <div>
              
                <GallaryCard
                    gallaryimg={galarypicture2}
                />
             
            </div>
            <div>
              
                <GallaryCard
                    gallaryimg={galarypicture3}
                />
             
            </div>
            <div>
              
                <GallaryCard
                    gallaryimg={galarypicture4}
                />
             
            </div>
            <div>
              
                <GallaryCard
                    gallaryimg={galarypicture1}
                />
            
            </div>
          </Slider>
        </div>
      );
};

export default GallarySlider;
