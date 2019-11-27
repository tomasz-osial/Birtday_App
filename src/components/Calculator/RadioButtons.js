import React, {Component} from "react";


class RadioButtons extends Component{

    state = {
        selectedOption:''
    };

    handleOptionChange = event => {
        this.setState({
            selectedOption: event.target.value
        })
    };

    render() {
        return(
            <div className='RadioContainer'>
                <label>
                    <input
                        type='radio'
                        name='radioButton'
                        value='option1'
                        checked={this.state.selectedOption === 'option1'}
                        onChange={this.handleOptionChange}
                    />
                    Do 10
                </label>
                <label>
                    <input
                        type='radio'
                        name='radioButton'
                        value='option2'
                        checked={this.state.selectedOption === 'option2'}
                        onChange={this.handleOptionChange}
                    />
                    11-20
                </label>
                <label>
                    <input
                        type='radio'
                        name='radioButton'
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