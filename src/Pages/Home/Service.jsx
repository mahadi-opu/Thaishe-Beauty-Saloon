import React from 'react';
import ServiceSlider from '../../Components/SlickSlider/ServiceSlider';


const Service = () => {
    return (
        <div className='our-service'>
            <div className='service-overly'></div>
            <div className='container'>
                <div className="service-wrapper">
                    
                    <div className='service-heading'>
                        <h1 className='heading'> <span className='color-text'> our </span> services </h1>
                        <p className='sub-heading'>Welcome to Thai She Hair Dressers.</p>
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