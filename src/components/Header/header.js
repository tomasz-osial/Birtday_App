import React from "react";
import WebFont from 'webfontloader';

import logo from './Images/bad-pig-icon_big.png';
import './style.scss'

WebFont.load({
    google: {
        families: ['Gloria Hallelujah', 'sans-serif']
    }
});


const Header = () => {
    return (
        <div id='header' className='headContainer'>
            <span className='logoContainer'>
                <img src={logo} alt= {"Logotyp"} className='logo'/>
                <h1 className='name'>
                    Prosiakowo.pl
                </h1>
            </span>
            <ul className='menu'>
                <a href="#about_us">
                    <li className='menuElement'>O nas!</li>
                </a>
                <a href='#gallery'>
                    <li className='menuElement'>Galeria</li>
                </a>
                <a href='#calculator'>
                    <li className='menuElement'>Zaplanuj urodziny</li>
                </a>
            </ul>
        </div>
    )
};

export default Header;