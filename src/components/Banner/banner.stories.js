import React from "react";
import Banner from "./index";
import {storiesOf} from "@storybook/react";


storiesOf('Banner', module)
    .add('default', () => <Banner />);