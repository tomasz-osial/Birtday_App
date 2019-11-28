import React from "react";
import Footer from './Footer';
import {storiesOf} from "@storybook/react";
import Header from "../Header/header";

storiesOf('Footer', module)
    .add('default', () => <Footer />);