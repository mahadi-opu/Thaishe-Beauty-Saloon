import React from 'react';
import AboutCard from '../../Components/Card/AboutCard';

const Pricing = () => {
    return (
        <div className='pricingSection'>
            <div className='container'>
                <div className="pricingWrapper">
                    <div className='priching'>
                       <AboutCard/>
                    </div>

                    <div className='about-images'>
                            <AboutCard />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Pricing;