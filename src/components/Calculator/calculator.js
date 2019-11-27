import React, {Component} from "react";
import WebFont from 'webfontloader';

import './calculator.scss';
import Calendar from "./Calendar";
import RadioButtons from "./RadioButtons";
import SelectMotives from "./Select";
import AddOptions from "./Checkboxes";

WebFont.load({
    google: {
        families: ['Fredoka+One', 'sans-serif']
    }
});

class Calculator extends Component{

    state = {
        option1Cost: 500,
        option2Cost: 750,
        option3Cost: 1000,
        extraHourCost: 250,
        facePaintingCost: 350,
        piniataCost: 300,
        extraAnimatorCost: 200,
        illusionistCost: 450
    };

    handleOption1Cost = () => {
        let option1Cost='';
        if (this.state.selectedOption === 'option1') {
            option1Cost = this.state.option1Cost
        } else {option1Cost = 0}
    };


    render() {
        return (
            <>
                <div className='calcTitle'>Zaplanuj urodziny</div>
                <div className='mainContainer'>
                    <div className='calcContainer'>
                        <div className='offerContainer'>
                            <div className='basicOffer'>
                                <h3>Co zawiera pakiet podstawowy</h3>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto asperiores assumenda,
                                aut cum doloremque esse eveniet, ex illum odio optio perferendis saepe sunt tenetur veritatis.
                                Aliquid maxime perspiciatis rerum.
                            </div>
                            <h4>Usługi dodatkowe</h4>
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
                            <h2 className='headLines'>
                                Kalkulator oferty imprezy
                            </h2>
                            <h4 className='headLines'>
                                Data imprezy
                            </h4>
                            <p className='info'>
                                Preferowana data - Podaj datę DD/MM/RRRR
                            </p>
                            <Calendar />
                            <h4 className='headLines'>
                                Wybierz liczbę uczestników:
                            </h4>
                            <RadioButtons option1Cost = {this.handleOption1Cost} />
                            <h4 className='headLines'>
                                Motyw przewodni imprezy
                            </h4>
                            <SelectMotives />
                            <h4 className='headLines'>
                                Dodatkowe atrakcje
                            </h4>
                            <div className='additionalOptions'>
                                <p className='info'>
                                    Wybierz dodatkowe opcje
                                </p>
                                <AddOptions />
                            </div>
                            <h3 className='headLines'>
                                Orientacyjna wycena imprezy
                            </h3>
                            <p className='offerInfo'>
                                Przybliżony koszt imprezy: zł
                            </p>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}


export default Calculator;