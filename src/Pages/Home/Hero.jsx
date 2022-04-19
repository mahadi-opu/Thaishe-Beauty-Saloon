import React from 'react';
import BookNowBtn from '../../Components/Button/BookNowBtn';

const Hero = () => {
    return (
        <div className='hero-section'>
            <div className='hero-overly'></div>
            <div className='container'>
                <div className='hero__wrapper'>
                    <div className='hero-content'>
                        <h1>Welcome to <span> our shop </span></h1>
                        <p>Great skin doesn't happen by chance, it happens by appointment.</p>
                            
                        <BookNowBtn />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;