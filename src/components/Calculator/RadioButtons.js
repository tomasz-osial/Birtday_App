import React from "react";

import './RadioButtons.scss'

const  RadioButtons = ({selectedOption,handleOptionChange }) => (
            <div className='radioContainer'>
                <label>
                    <input
                        className='radioBtn'
                        type='radio'
                        value='option1'
                        checked={selectedOption === 'option1'}
                        onChange={handleOptionChange}
                    />
                    Do 10
                </label>
                <label>
                    <input
                        className='radioBtn'
                        type='radio'
                        value='option2'
                        checked={selectedOption === 'option2'}
                        onChange={handleOptionChange}
                    />
                    11-20
                </label>
                <label>
                    <input
                        className='radioBtn'
                        type='radio'
                        value='option3'
                        checked={selectedOption === 'option3'}
                        onChange={handleOptionChange}
                    />
                    21-30
                </label>
            </div>

        );

export default RadioButtons;