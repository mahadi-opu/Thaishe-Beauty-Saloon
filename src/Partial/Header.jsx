import React, { useState } from 'react';
import '../Partial/Partial.css';
import logo from '../Assats/images/logo/Thai She Saloon logo.png';
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import BookNowBtn from '../Components/Button/BookNowBtn';


const Header = () => {

    const [nav, setNav] = useState(false)
    const handleClick = ()=> setNav (!nav)

    return (
        <div className='header'>
            <div className='container'>
                <div className="header__wrapper">

                    <div className="logo">
                        <a href="#"> <img src={logo} alt="/" /></a>
                    </div>

                    <nav>
                        <ul>
                            <li><a href=""> Home </a></li>
                            <li><a href=""> About</a></li>
                            <li><a href=""> services </a></li>
                            <li><a href=""> Pricing </a></li>
                            <li><a href=""> MakeOver</a></li>
                            <li><a href=""> gallary  </a></li>
                            <li><a href=""> Blog  </a></li>
                            <li><a href=""> Contact</a></li>
                        </ul>
                    </nav>

                    <div className="booking-btn">
                        <BookNowBtn />
                    </div>

                    <div className='mobile-menu'>
                        <div className='mobile-icon' onClick={handleClick} >
                            {!nav ? <BiMenu /> : <AiOutlineClose /> }
                        </div>

                        { 
                        
                            nav ?

                                <ul className='mobile-menu-link'>
                                    <li><a href=""> Home </a></li>
                                    <li><a href=""> About us </a></li>
                                    <li><a href=""> our services </a></li>
                                    <li><a href=""> Pricing </a></li>
                                    <li><a href=""> gallary  </a></li>
                                    <li><a href=""> Blog  </a></li>
                                    <li><a href=""> Contact us  </a></li>
                                </ul>
                            :
                                null
                        }

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;


