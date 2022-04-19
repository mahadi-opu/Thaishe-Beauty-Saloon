import React,{useState} from "react";
import Slider from "react-slick";
import ServiceCard from "../Card/ServiceCard";

const ServiceSlider = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const sliders = [ 1,2,3,4];

  const settings = {
    infinite: true,
    lazyLoad: true,
    autoplay:true,
    dots: true,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };

  return (
    <div>
        <Slider {...settings}>
          {sliders.map((slide, index)=>(
            <div key={index} className={index === imageIndex ? "slide activeSlide" : "slide"}>
              <h3> 
                <ServiceCard/>
              </h3>
            </div>
          ))}

          {/* <div>
            <h3>
              <ServiceCard/>
            </h3>
          </div>
          <div>
            <h3>
              <ServiceCard/>
            </h3>
          </div>
          <div>
            <h3>
              <ServiceCard/>
            </h3>
          </div>
          <div>
            <h3>
            <ServiceCard/>
            </h3>
          </div>
          <div>
            <h3>
              <ServiceCard/>
            </h3>
          </div> */}

        </Slider>
      </div>
  );
}
 
export default ServiceSlider;