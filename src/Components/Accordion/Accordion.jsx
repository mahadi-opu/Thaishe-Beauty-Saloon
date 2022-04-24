import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import './accordion.css';



const Accordion = () => {
    return (
        <div className='accordion'>
            <div className='accordion_wrap'>
                
                <div className='accordion__heading'>
                    <h2 className='accordian_title'> Wedding blog </h2>
                    <IoIosArrowForward/>
                </div>

                 <div className='accordion__items'>
                        <div className='accordion__item'>
                            <p>Real Wedding</p>
                        </div>
                        <div className='accordion__item'>
                            <p>Engagement photos</p>
                        </div>
                        <div className='accordion__item'>
                            <p>Ideas and Inspiration</p>
                        </div>
                 </div>
            </div>
            <div className='accordion_wrap'>
                <div className='accordion__heading'>
                    <h2 className='accordian_title'> Wedding blog </h2>
                    <IoIosArrowForward/>
                </div>
                 <div className='accordion__items'>
                        <div className='accordion__item'>
                            <p>Real Wedding</p>
                        </div>
                        <div className='accordion__item'>
                            <p>Engagement photos</p>
                        </div>
                        <div className='accordion__item'>
                            <p>Ideas and Inspiration</p>
                        </div>
                 </div>
            </div>
            <div className='accordion_wrap'>
                <div className='accordion__heading'>
                    <h2 className='accordian_title'> Wedding blog </h2>
                    <IoIosArrowForward/>
                </div>
                 <div className='accordion__items'>
                        <div className='accordion__item'>
                            <p>Real Wedding</p>
                        </div>
                        <div className='accordion__item'>
                            <p>Engagement photos</p>
                        </div>
                        <div className='accordion__item'>
                            <p>Ideas and Inspiration</p>
                        </div>
                 </div>
            </div>
        </div>
    );
};

export default Accordion;