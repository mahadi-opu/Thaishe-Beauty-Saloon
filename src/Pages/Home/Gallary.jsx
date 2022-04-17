import React from 'react';
import SectionHeading from '../../Components/SectionHeading/SectionHeading';
import GallarySlider from '../../Components/SlickSlider/GallarySlider';



const Gallary = () => {
    return (
        <section className='gallary'>
             <div className='service-overly'></div>
            <div className='container'>
                <div className='gallary__wrapper'>
                    <div className='galary__heading'>
                        <SectionHeading
                      
                            headingLeft="Our"
                            headingRight=" Gallary "
                            subheading="Welcome to Thai She Beauty Salon."
                            colorRight="text-white"
                            colorSubHeading="text-white"
                            
                        />
                    </div>
                    <div className='galary__slider'>
                        <GallarySlider />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallary;