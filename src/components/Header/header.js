import React from "react";
import WebFont from 'webfontloader';

import logo from './Images/bad-pig-icon_big.png';
import './style.scss'

WebFont.load({
    google: {
        families: ['Fredoka+One', 'sans-serif']
    }
});


const Header = () => {
    return (
        <div className='headContainer'>
            <span className='logoContainer'>
                <img src={logo} alt= {"Logotyp"} className='logo'/>
                <h1 className='name'>
                    Zagroda.pl
                </h1>
            </span>
            <ul className='menu'>
                <a href="#div_id">
                    <li className='menuElement'>O nas!</li>
                </a>
                <li className='menuElement'>Galeria</li>
                <li className='menuElement'>Zaplanuj urodziny</li>
                <li className='menuElement'>Kontakt</li>
            </ul>
        </div>
    )
};

export default Header;