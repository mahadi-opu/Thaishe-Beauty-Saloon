import React from 'react';
import './Home.css'
import SectionHeading from '../../Components/SectionHeading/SectionHeading';

const Location = () => {
    return (
        <section className='location'>
            <div className='back__design'></div>
            <div className='container'>
                <div className='location__wrapper'>
                    <div className='location-heading'>
                        <SectionHeading 
                            headingLeft="Our"
                            headingRight=" Service "
                            subheading="Welcome to Thai She Hair Dressers."
                            
                        />
                    </div>
                    <div className='contact__card'>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;