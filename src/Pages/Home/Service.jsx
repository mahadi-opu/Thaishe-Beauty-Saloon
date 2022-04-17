import React from 'react';
import SectionHeading from '../../Components/SectionHeading/SectionHeading';
import ServiceSlider from '../../Components/SlickSlider/ServiceSlider';


const Service = () => {
    return (
        <div className='our-service'>
            <div className='service-overly'></div>
            <div className='container'>
                <div className="service-wrapper">
                    
                    <div className='service-heading'>
                        <SectionHeading 
                            headingLeft="Our"
                            headingRight=" Service "
                            subheading="Welcome to Thai She Hair Dressers."
                            colorRight="text-white"
                            colorSubHeading="text-white"
                        />
                    </div>

                    <div className='service-slider'>
                        <ServiceSlider />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;