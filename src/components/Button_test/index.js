import React, {Component} from "react";



class ButtonStory extends Component{
    render() {
        const {title} = this.props;
        return (
            <button>{title}</button>
        )
    }

}
export default ButtonStory;


// prosty button z zajęć
// export default () => <button>Test</button>