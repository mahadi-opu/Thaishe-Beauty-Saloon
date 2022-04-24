import React from 'react';
import './ContactUs.css'
import SectionHeading from '../../Components/SectionHeading/SectionHeading'
import LocationCard from '../../Components/Card/LocationCard';


const ContactUs = () => {
    return (
        <div className='contactUs'>
            <div className='container'>
                <div className="contactUs__wrapper">
                    <div className='constact_left'>

                    </div>
                    <div className='constact_right'>
                        <div className='contact__heading'>
                            <SectionHeading
                                headingLeft="Our"
                                headingRight=" Location "
                                subheading="Here is our location to get us firstly."
                            />
                        </div>
                        <div>
                            <LocationCard/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;