import React from 'react';
import '../Card/Card.css';
import aboutimg from '../../Assats/images/about/about.png'


const AboutCard = () => {
    return (
       
        <div className='about-card_wrapper'>
            <div className='about-images1'></div>
            <div className='about-images2'> <img src={aboutimg} alt="about-images"/></div>
            <div className='about-images3'></div>
        </div>

    );
};

export default AboutCard;