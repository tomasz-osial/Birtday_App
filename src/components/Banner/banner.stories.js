import React from "react";
import Banner from "./banner";
import {storiesOf} from "@storybook/react";


storiesOf('Banner', module)
    .add('default', () => <Banner />);