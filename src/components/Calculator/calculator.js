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

const option1Cost = 500;
const option2Cost = 750;
const option3Cost = 1000;

const costs = {
    isExtraHour: 250,
    isFacePainting: 350,
    isPiniata: 300,
    isAnimator: 200,
    isIllusionist: 450
};

class Calculator extends Component {

    state = {
        initialCost: 0,
        selectedOption: '',
        isExtraHour: false,
        isFacePainting: false,
        isPiniata: false,
        isAnimator: false,
        isIllusionist: false
    };

    handleOptionChange = event => {
        this.setState({
            selectedOption: event.target.value
        })
    };

    onChangeCheckbox = (key) => {
        this.setState(initialState => ({
            [key]: !initialState[key]
        }))
    };

    calculateAmountCosts = () => {
        const {selectedOption, initialCost} = this.state;
        if (selectedOption === 'option1') {
            return option1Cost
        } else if (selectedOption === 'option2') {
            return option2Cost
        } else if (selectedOption === 'option3') {
            return option3Cost
        } else {
            return initialCost
        }
    };

    calculateCosts = () => {
        const keys = Object.keys(costs);

        const result = keys.reduce(( agr, el) => this.state[el]  ? costs[el] + agr : agr ,0);
        return result;

        // const {isExtraHour, isFacePainting, isPiniata, isAnimator, isIllusionist, initialCost} = this.state;
        // if (isExtraHour && isFacePainting && isPiniata
        //     && isAnimator === true && isIllusionist === true) {
        //     return extraHourCost + facePaintingCost + piniataCost + extraAnimatorCost + illusionistCost
        // } else if (isFacePainting === true && isPiniata === true
        //     && isAnimator === true && isIllusionist === true) {
        //     return facePaintingCost + piniataCost + extraAnimatorCost + illusionistCost
        // } else if (isPiniata === true && isAnimator === true && isIllusionist === true) {
        //     return piniataCost + extraAnimatorCost + illusionistCost
        // } else if (isExtraHour === true && isFacePainting === true && isPiniata === true) {
        //     return extraHourCost + facePaintingCost + piniataCost
        // } else if (isExtraHour === true && isFacePainting === true && isPiniata === true &&
        //     isAnimator === true) {
        //     return extraHourCost + facePaintingCost + piniataCost + isAnimator
        // } else if (isAnimator === true && isIllusionist === true) {
        //     return extraAnimatorCost + illusionistCost
        // } else if (isExtraHour === true && isFacePainting === true) {
        //     return extraHourCost + facePaintingCost
        // } else if (isIllusionist === true) {
        //     return illusionistCost
        // } else if (isExtraHour === true) {
        //     return extraHourCost
        // } else if (isFacePainting === true) {
        //     return facePaintingCost
        // } else if (isPiniata === true) {
        //     return piniataCost
        // } else if (isAnimator === true) {
        //     return extraAnimatorCost
        // } else {
        //     return initialCost
        // }
    };

    render() {
        return (
            <>
                <div id='calculator' className='calcTitle'>Zaplanuj urodziny</div>
                <div className='mainContainer'>
                    <div className='calcContainer'>
                        <div className='offerContainer'>
                            <div className='basicOffer'>
                                <h3 className='offerTitle'>Pakiet podstawowy</h3>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto asperiores
                                assumenda,
                                aut cum doloremque esse eveniet, ex illum odio optio perferendis saepe sunt tenetur
                                veritatis.
                                Aliquid maxime perspiciatis rerum.
                            </div>
                            <h4 className='offerTitle'>Usługi dodatkowe</h4>
                            <ul className='extraOffer'>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium eius id impedit inventore odio perspiciatis repudiandae ullam ut
                                    veritatis voluptatibus?
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Amet, dicta ducimus laudantium magni perspiciatis quisquam!
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, impedit!
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Animi dolores doloribus enim eos error iste, nobis non quibusdam reprehenderit
                                    suscipit, vel voluptatum?
                                </li>
                                <li>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat iste nesciunt nulla
                                    recusandae velit.
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
                            <Calendar/>
                            <h4 className='headLines'>
                                Wybierz liczbę uczestników:
                            </h4>
                            <RadioButtons selectedOption={this.state.selectedOption}
                                          handleOptionChange={this.handleOptionChange}/>
                            <h4 className='headLines'>
                                Motyw przewodni imprezy
                            </h4>
                            <SelectMotives/>
                            <h4 className='headLines'>
                                Dodatkowe atrakcje
                            </h4>
                            <div className='additionalOptions'>
                                <p className='info'>
                                    Wybierz dodatkowe opcje
                                </p>
                                <AddOptions
                                    onChangeExtraHour={() => this.onChangeCheckbox('isExtraHour')}
                                    onChangeFacePainting={() => this.onChangeCheckbox('isFacePainting')}
                                    onChangePiniata={() => this.onChangeCheckbox('isPiniata')}
                                    onChangeAnimator={() => this.onChangeCheckbox('isAnimator')}
                                    onChangeIllusionist={() => this.onChangeCheckbox('isIllusionist')}
                                    isExtraHour={this.state.isExtraHour}
                                    isFacePainting={this.state.isFacePainting}
                                    isPiniata={this.state.isPiniata}
                                    isAnimator={this.state.isAnimator}
                                    isIllusionist={this.state.isIllusionist}
                                />
                            </div>
                            <h3 className='headLines'>
                                Orientacyjna wycena imprezy
                            </h3>
                            <div className='offerInfo'>
                                Przybliżony koszt imprezy:
                                <p className='totalCost'>
                                    {this.calculateCosts() + this.calculateAmountCosts()} zł
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}


export default Calculator;