import React from 'react';
import './ServicePg.css';
import ServiceCard from "../../Components/Card/ServiceCard";
const ServicePg = () => {
    return (
        <div className='servicePg'>
            <div className='container'>
                <div className="servicePg__wrapper">
                    <ServiceCard/>
                    <ServiceCard/>
                    <ServiceCard/>
                    <ServiceCard/>
                    <ServiceCard/>
                    <ServiceCard/>
                    <ServiceCard/>
                    <ServiceCard/>
                    <ServiceCard/>
                    
                </div>
            </div>
        </div>
    );
};

export default ServicePg;