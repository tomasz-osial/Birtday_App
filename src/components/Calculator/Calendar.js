import React, {Component} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Calendar extends Component {
    state = {
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    render() {
        return (
            <DatePicker
                dateFormat="dd/MM/yyyy"
                selected={this.state.startDate}
                onChange={this.handleChange}
            />
        );
    }
}

export default Calendar;