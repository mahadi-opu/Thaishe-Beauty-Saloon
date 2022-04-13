import React from 'react';
import '../Card/Card.css';
import serviceimg from '../../Assats/images/service/service-1.png'
import ServiceBookbtn from '../Button/ServiceBookbtn';


const ServiceCard = () => {
    return (
     
        <div className='service-item'>
            <div className='item'>
                <div>
                    <img src={serviceimg} alt="service-1" />
                    <h2> <span className='color-text'> Hair </span> massage </h2>
                    <p> Cut your hair only 15min </p>
                    <ServiceBookbtn/>
                </div>
            </div>
        </div>
 
    );
};

export default ServiceCard;