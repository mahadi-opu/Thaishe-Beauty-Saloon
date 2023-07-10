import React from 'react';
import AboutCard from '../../Components/Card/AboutCard';
// import PricingCard from '../../Components/Card/PricingCard';

import SectionHeading from '../../Components/SectionHeading/SectionHeading';
import priceimg from '../../Assats/images/Pricing/prising.png';

// import aboutimg from '../../Assats/images/about/about.png'



const Pricing = () => {
    return (
        <div className='pricingSection'>
            <div className='back__design'></div>
            <div className='container'>
               
                <div className='priceing__headign'>
                        <SectionHeading 
                            headingLeft=" Our"
                            headingRight=" Pricing "
                            subheading="Welcome to Thai She Beauty Salon"
                        />
                </div>

                <div className="pricing__Wrapper">

                    <div className='pricing_left'>  
                        <AboutCard
                                cardimg={priceimg}
                            />
                    </div>

                    <div className='pricing_right'>
                        {/* <PricingCard/> */}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Pricing;