import React from "react";
import logo from './Images/bad-pig-icon_big.png';
import './style.scss'


const Header = () => {
    return (
        <div className='headContainer'>
            <span className='logoContainer'>
                <img src={logo} alt= {"Logotyp"} className='logo'/>
                <h1>Zagroda.pl</h1>
            </span>
            <ul className='menu'>
                <li className='menuElement'>O nas</li>
                <li className='menuElement'>Galeria</li>
                <li className='menuElement'>Zaplanuj urodziny</li>
                <li className='menuElement'>Kontakt</li>
            </ul>
        </div>
    )
};

export default Header;