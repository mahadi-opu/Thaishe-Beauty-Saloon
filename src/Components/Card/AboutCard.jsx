import React from 'react';
import '../Card/Card.css';



const AboutCard = (props) => {
    return (
       
        <div className='about-card_wrapper'>
            <div className='about-images1'></div>
            <div className='about-images2'> <img src={props.cardimg} alt="about-images"/></div>
            <div className='about-images3'></div>
        </div>

    );
};

export default AboutCard;