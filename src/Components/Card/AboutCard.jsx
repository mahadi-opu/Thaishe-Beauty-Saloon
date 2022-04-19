import React from 'react';
import '../Card/Card.css';



const AboutCard = (props) => {
    return (
       
        <div className='about-card_wrapper'>
            <div className='about_before_bg'></div>
            <div className='about_card_img'>
                 <img src={props.cardimg} alt="about-images"/>
            </div>
            <div className='about_after_bg'></div>
        </div>

    );
};

export default AboutCard;