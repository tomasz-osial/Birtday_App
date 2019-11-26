import React from "react";
import Gallery from "./gallery";
import {storiesOf} from "@storybook/react";

storiesOf('Gallery', module)
    .add('default', ()=> <Gallery />);