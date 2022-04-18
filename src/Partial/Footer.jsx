import React from 'react';
import './Partial.css';
import footerLogo from '../Assats/images/logo/f-logo.png';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { ImTelegram } from 'react-icons/im';
import SubscribeBtn from '../Components/Button/SubscribeBtn';

const Footer = () => {
    return (
        <footer id='footer'>
            <div className='container'>
                <div className="footer__wrapper">

                    <div className='about__footer'>
                        <img src={footerLogo} alt="footer Logo" className='footer__logo' />
                        <p className='footer_about_text'> Lorem Ipsum is simply dummy text of the printing and 
                        tydsaspesetting industry. <br/><br/>  
                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. that is cool idea. <br/><br/>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.that is cool idea.</p>
                    </div>

                    <div className='footer_menu'>
                        <div>
                            <h3 className='footer_menu_heading'>Pession</h3>
                            <ul className='footer_items'>
                                <li className='footer_menu_item'><a href="">Pession</a></li>
                                <li className='footer_menu_item'><a href="">Pession</a></li>
                                <li className='footer_menu_item'><a href="">Pession</a></li>
                                <li className='footer_menu_item'><a href="">Pession</a></li>
                                <li className='footer_menu_item'><a href="">Pession</a></li>
                                <li className='footer_menu_item'><a href="">Pession</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='footer_menu'>
                        <div>
                            <h3 className='footer_menu_heading'>Pession</h3>
                            <ul className='footer_items'>
                                <li className='footer_menu_item'><a href="">Pession</a></li>
                                <li className='footer_menu_item'><a href="">Pession</a></li>
                                <li className='footer_menu_item'><a href="">Pession</a></li>
                                <li className='footer_menu_item'><a href="">Pession</a></li>
                                <li className='footer_menu_item'><a href="">Pession</a></li>
                                <li className='footer_menu_item'><a href="">Pession</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='footer__contact'>
                        <h3 className='footer_menu_heading'>Contact</h3>

                        <div className='footer_contact_details'>
                            <p> Phone   :   00190854841555 </p>
                            <p> Email   :   thiashebeauty.com  </p>
                        </div>

                        <div className='footer__social_media'>
                            <ul className='social__items'>
                                <li className='social__item'> <a href=""> <FaFacebookF/> </a> </li>
                                <li className='social__item'> <a href=""> <BsTwitter/> </a> </li>
                                <li className='social__item'> <a href=""> <AiFillInstagram/> </a> </li>
                                <li className='social__item'> <a href=""> <AiFillLinkedin/> </a> </li>
                                <li className='social__item'> <a href=""> <ImTelegram/> </a> </li>
                            </ul>   
                        </div>
                        <SubscribeBtn/>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;