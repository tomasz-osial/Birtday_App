import React from "react";
import logo from './Images/bad-pig-icon_big.png';
import './Footer.scss'

const Footer = () => (
    <div className='footerContainer'>
        <span className='logoContainer'>
                <img src={logo} alt= {"Logotyp"} className='logo'/>
                <h1 className='name'>
                    Zagroda.pl
                </h1>
            </span>
    </div>
);

export default Footer;