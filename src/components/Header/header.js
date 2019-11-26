import React from "react";
import logo from './Images/bad-pig-icon_big.png';
import './style.scss'


const Header = () => {
    return (
        <div className='headContainer'>
            <span>
                <img src={logo} alt= {"Logotyp"}/>
                <h1>Zagroda.pl</h1>
            </span>
            <ul className='menu'>
                <li>O nas</li>
                <li>Galeria</li>
                <li>Zaplanuj urodziny</li>
                <li>Kontakt</li>
            </ul>
        </div>
    )
};

export default Header;