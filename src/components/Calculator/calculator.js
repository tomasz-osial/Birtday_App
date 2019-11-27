import React, {Component} from "react";

import './calculator.scss';
import Calendar from "./Calendar";
import RadioButtons from "./RadioButtons";
import SelectMotives from "./Select";
import AddOptions from "./Checkboxes";

class Calculator extends Component{
    render() {
        return (
            <>
                <div className='calcTitle'>Zaplanuj imprezę</div>
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
                            <RadioButtons />
                            <h4>Motyw przewodni imprezy</h4>
                            <SelectMotives />
                            <h4>Dodatkowe atrakcje</h4>
                            <p>Wybierz dodatkowe opcje</p>
                            <AddOptions />
                            <h3>Orientacyjna wycena imprezy</h3>
                            <p>Przybliżony koszt imprezy: zł</p>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}


export default Calculator;