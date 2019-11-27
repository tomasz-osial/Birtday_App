import React, {Component} from "react";

import './Checkboxes.scss'
class AddOptions extends Component{

    state = {
        isExtraHour: false,
        isFacePainting: false,
        isPiniata: false,
        isAnimator: false,
        isIllusionist: false
    };

    onChangeExtraHour = () => {
        this.setState(initialState =>({
            isExtraHour: !initialState.isExtraHour
        }))
    };

    onFacePainting = () => {
        this.setState(initialState =>({
            isFacePainting: !initialState.isFacePainting
        }))
    };

    onChangePiniata = () => {
        this.setState(initialState =>({
            isPiniata: !initialState.isPiniata
        }))
    };

    onAnimator = () => {
        this.setState(initialState =>({
            isAnimator: !initialState.isAnimator
        }))
    };

    onIllusionist = () => {
        this.setState(initialState =>({
            isIllusionist: !initialState.isIllusionist
        }))
    };

    render() {
        return (
            <div className='optionsContainer'>
                <label>
                    <input
                        name='extraHour'
                        type='checkbox'
                        checked={this.state.isExtraHour}
                        onChange={this.onChangeExtraHour}

                    />
                    <span className='checkbox'>
                        Dodatkowa godzina zabawy
                    </span>
                </label>
                <label>
                    <input
                        name='facePainting'
                        type='checkbox'
                        checked={this.state.isFacePainting}
                        onChange={this.onFacePainting}
                    />
                    <span className='checkbox'>
                        Malowanie buziek
                    </span>
                </label>
                <label>
                    <input
                        name='piniata'
                        type='checkbox'
                        checked={this.state.isPiniata}
                        onChange={this.onChangePiniata}
                    />
                    <span className='checkbox'>
                        Piniata
                    </span>
                </label>
                <label>
                    <input
                        name='animator'
                        type='checkbox'
                        checked={this.state.isAnimator}
                        onChange={this.onAnimator}
                    />
                    <span className='checkbox'>
                        Dodatkowy animator
                    </span>
                </label>
                <label>
                    <input
                        name='illusionist'
                        type='checkbox'
                        checked={this.state.isIllusionist}
                        onChange={this.onIllusionist}
                    />
                    <span className='checkbox'>
                        Pokaz iluzjonisty
                    </span>
                </label>
            </div>
        )
    }
}

export default AddOptions;