import React from 'react';
import ReadMoreBtn from '../../Components/Button/ReadMoreBtn';
import AboutCard from '../../Components/Card/AboutCard';


const About = () => {
    return (
        <div className='about-section'>
            <div className='container'>
                <div className='about-wrapper'>
                    <div className='about-content'>
                        <div className='about-heading'>
                            <h1 className='heading'>About Us <span className='color-text'> Story  </span></h1>
                            <p className='sub-heading'>Welcome to Thai She Beauty saloon.</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua et dolore magna aliqua. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
                        <ReadMoreBtn />
                    </div>

                    <div className='about-images'>
                            <AboutCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;