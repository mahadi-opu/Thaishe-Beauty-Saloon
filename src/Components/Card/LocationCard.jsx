import React from 'react';
import './Card.css';
import { MdLocationOn } from 'react-icons/md';
import { BiEnvelope } from 'react-icons/bi';
import { AiOutlineGlobal } from 'react-icons/ai';


const LocationCard = () => {
    return (
        <div className='location__card'>
            <div className='location__card_wrapper'>
               <div className='contact_info'>

                    <div className='contact'> 
                        <span> <MdLocationOn/>  </span>
                        <p className='location_text'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, </p> 
                    </div>

                    <div className='contact'> 
                        <span> <BiEnvelope/>  </span>
                        <p>thaishebeauty@gmailcom</p>
                    </div>

                    <div className='contact'> 
                        <span> <AiOutlineGlobal/> </span>
                        <p>www.thaishebeauty.com</p>
                    </div>

               </div>
            </div>
        </div>
    );
};

export default LocationCard;