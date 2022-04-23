import React from 'react';
import './ContactUs.css'
import SectionHeading from '../../Components/SectionHeading/SectionHeading'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const ContactUs = () => {
    return (
        <div className='contactUs'>
            <div className='container'>
                <div className="contactUs__wrapper">
                    <div className='constact_left'>
                        <Map google={this.props.google} zoom={14}>
                            <Marker onClick={this.onMarkerClick}
                                    name={'Current location'} />

                            <InfoWindow onClose={this.onInfoWindowClose}>
                              
                            </InfoWindow>
                        </Map>
                    </div>
                    <div className='constact_right'>
                        <div className='contact__heading'>
                            <SectionHeading
                                headingLeft="Our"
                                headingRight=" Location "
                                subheading="Here is our location to get us firstly."
                            />
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBrsj7z8Q_lkCy6iopjiJm6awyPoY4k8Lw")
  })(ContactUs)