import React from 'react';
import ReadMoreBtn from '../../Components/Button/ReadMoreBtn';
import AboutCard from '../../Components/Card/AboutCard';
import SectionHeading from '../../Components/SectionHeading/SectionHeading';

import aboutimg from '../../Assats/images/about/about.png'

const About = () => {
    return (
        <div className='about-section'>
            <div className='container'>
                <div className='about-wrapper'>
                    
                    <div className='about-content'>
                        <div className='about-heading'>
                            <SectionHeading
                               headingLeft="About Us"
                               headingRight=" Story "
                               subheading="Welcome to Thai She Beauty saloon"

                            />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua et dolore magna aliqua. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                        <ReadMoreBtn />
                    </div>

                    <div className='about__images'>
                        <AboutCard/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;