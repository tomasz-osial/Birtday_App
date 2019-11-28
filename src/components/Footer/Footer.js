import React from "react";
import logo from './Images/bad-pig-icon_big.png';
import './Footer.scss'

const Footer = () => (
    <div className='footerContainer'>
        <span className='logoContainer'>
             <a href='#header'>
                  <img src={logo} alt= {"Logotyp"} className='logo'/>
                <h1 className='name'>
                    Prosiakowo.pl
                </h1>
             </a>
        </span>
    </div>
);

export default Footer;