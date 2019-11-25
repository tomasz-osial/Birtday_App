import React from "react";
import Banner from "./index";
import {storiesOf} from "@storybook/react";


storiesOf('Task', module)
    .add('default', () => <Banner />);