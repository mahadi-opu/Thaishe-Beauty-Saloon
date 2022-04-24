import React from 'react';
import PricelistCard from '../../Components/Card/PricelistCard';
import './PricingPg.css';
import pricingCategoryDesign from '../../Assats/images/Pricing/pricing_category_design.png'


const PricingPg = () => {
    return (
        <div className='pricingPg'>
            <div className='container'> 
                <div className="pricingpg_bg">
                    <div className="pricingpg_wrapper">
                        
                        <div className='pricing__category'>
                            <h2 className='pricing_category_title'> Cuts  and <span> Trims </span> </h2>
                            <img className='pricing_category_design' src={pricingCategoryDesign} alt="" />
                        </div>

                        <div className='pricing_category'>
                    
                            <PricelistCard/>
                            <PricelistCard/>
                            <PricelistCard/>
                        </div>

                        <div className='pricing__category'>
                            <h2 className='pricing_category_title'> Cuts  and <span> Trims </span> </h2>
                            <img className='pricing_category_design' src={pricingCategoryDesign} alt="" />
                        </div>

                        <div className='pricing_category'>
                            <PricelistCard/>
                            <PricelistCard/>
                            <PricelistCard/>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPg;