import React from 'react';
import './Home.css'
import SectionHeading from '../../Components/SectionHeading/SectionHeading';
import LocationCard from '../../Components/Card/LocationCard';

const Location = () => {
    return (
        <section className='location'>
            <div className='back__design'></div>
            <div className='container'>
                <div className='location__wrapper'>
                    <div className='location-heading'>
                        <SectionHeading 
                            headingLeft="Our"
                            headingRight=" Location "
                            subheading="Here is our location to get us firstly."
                        />
                    </div>
                    <div className='contact__card'>
                        <LocationCard />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;