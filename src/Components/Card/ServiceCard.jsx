import React from 'react';
import '../Card/Card.css';
import serviceimg from '../../Assats/images/service/service-1.png'
import ServiceBookbtn from '../Button/ServiceBookbtn';


const ServiceCard = () => {
    return (
     
        <div className='service__card'>
            <div className='service_card_wrapper'>
                <div className='service_content'>

                    <div className='service_img'>
                        <img src={serviceimg} alt="service-1" />
                    </div>

                    <div className='service_details'>
                        <h2> <span className='color-text'> Hair </span> massage </h2>
                        <p> Cut your hair only 15min </p>
                        <ServiceBookbtn/>
                    </div>

                </div>
            </div>
        </div>
 
    );
};

export default ServiceCard;