import React, {Component} from "react";

import './RadioButtons.scss'

class RadioButtons extends Component{

    state = {
        selectedOption:''
    };

    handleOptionChange = event => {
        this.setState({
            selectedOption: event.target.value
        })
    };

    option1Cost = this.props.option1Cost;

    render() {
        return(
            <div className='radioContainer'>
                <label>
                    <input
                        type='radio'
                        value='option1'
                        checked={this.state.selectedOption === 'option1'}
                        onChange={this.handleOptionChange}
                    />
                    Do 10
                </label>
                <label>
                    <input
                        type='radio'
                        value='option2'
                        checked={this.state.selectedOption === 'option2'}
                        onChange={this.handleOptionChange}
                    />
                    11-20
                </label>
                <label>
                    <input
                        type='radio'
                        value='option3'
                        checked={this.state.selectedOption === 'option3'}
                        onChange={this.handleOptionChange}
                    />
                    21-30
                </label>
            </div>

        )
    }
}

export default RadioButtons;