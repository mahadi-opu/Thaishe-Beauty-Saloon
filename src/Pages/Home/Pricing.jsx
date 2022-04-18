import React from 'react';
import AboutCard from '../../Components/Card/AboutCard';
import SectionHeading from '../../Components/SectionHeading/SectionHeading';

import priceimg from '../../Assats/images/Pricing/prising.png';
import pricedsn from '../../Assats/images/Pricing/p-design.png';
import salunImg from '../../Assats/images/Pricing/salun-machine.png';


const Pricing = () => {
    return (
        <div className='pricingSection'>
            <div className='back__design'></div>
            <div className='priceing__headign'>
                    <SectionHeading 
                        headingLeft=" Our"
                        headingRight=" Pricing "
                        subheading="Welcome to Thai She Beauty Salon"
                    />
            </div>
            <div className='container'>
                <div className="pricing__Wrapper">

                    <div className='pricing_left'>
                        <div className='priching__picture'>
                        <AboutCard
                            cardimg={priceimg}
                        />
                        </div>
                    </div>

                    <div className='pricing_left'>
                        <div className='prizing__menu'>
                            <div className="prizing__card">
                                <div className='prizing__top__design'> </div>

                                <div className='prizing__wrapper'>
                                    <h2 className='pricing__title'> <span className='prizing_color'> Prizing </span> Menu</h2>
                                    <p className='pricing__subtitle'> look at some what you want </p>
                                    <div className='salun__picture'>
                                        <img src={salunImg} alt="" />
                                    </div>
                                    <div className='pricing__list'>
                                        
                                        <ul className='pricing__items'>
                                            <li className='pricing__item'> Hair Cut ...........................................  £ 10 </li>
                                            <li className='pricing__item'> Nail Shine........................................  £ 12 </li>
                                            <li className='pricing__item'> Skin Wash..........................................  £ 7 </li>
                                            <li className='pricing__item'> Massage .............................................  £ 8 </li>
                                            <li className='pricing__item'> Hot Air................................................ £ 7 </li>
                                            <li className='pricing__item'> Wax..................................................... £ 7</li>
                                        </ul>
                                    </div>

                                    <div className='pricing__design'>
                                        <img src={pricedsn} alt="" />
                                    </div>
                                </div>
                                
                                <div className='prizing__bottom__design'> </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Pricing;