import React from "react";
import Calculator from './calculator'
import {storiesOf} from "@storybook/react";

storiesOf('Calculator', module)
    .add('deafult', ()=> <Calculator />);