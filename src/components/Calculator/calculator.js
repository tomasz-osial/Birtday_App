import React, {Component} from "react";

import './calculator.scss';
import Calendar from "./Calendar";

class Calculator extends Component{
    render() {
        return (
            <>
                <div className='calcTitle'>Kalkulator imprezy</div>
                <div className='mainContainer'>
                    <div className='calcContainer'>
                        <div className='offerContainer'>
                            <div className='basicOffer'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto asperiores assumenda,
                                aut cum doloremque esse eveniet, ex illum odio optio perferendis saepe sunt tenetur veritatis.
                                Aliquid maxime perspiciatis rerum.
                            </div>
                            <ul className='extraOffer'>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, impedit!
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, impedit!
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, impedit!
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, impedit!
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, impedit!
                                </li>
                            </ul>
                        </div>
                        <form className='calcForm'>
                            <h2>Kalkulator ofertowy imprezy</h2>
                            <h4>Data imprezy</h4>
                            <p>Preferowana data - Podaj datę DD/MM/RRRR</p>
                            <Calendar />
                            <h4>Wybierz liczbę uczestników: </h4>
                            <div>
                                <input type='radio'/>
                                <label> Do 10</label>
                                <input type='radio'/>
                                <label> 11-20</label>
                                <input type='radio'/>
                                <label> 21-30</label>
                            </div>
                            <p>Przewidywana liczba uczestników</p>
                            <h4>Usługi dotatkowe</h4>
                            <h3>Orientacyjna wycena imprezy</h3>
                            <p>Pzybliżony koszt imprezy: </p>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}


export default Calculator;