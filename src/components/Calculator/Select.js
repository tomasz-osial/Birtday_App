import React, {Component} from "react";

class SelectMotives extends Component{

    state = {
        selectedOption:'ChooseOption'
    };

    handleChange = event => {
      this.setState({
          selectedOption: event.target.value
      })

};
    render() {
        return (
            <select
                value={this.state.selectedOption}
                onChange={this.handleChange}
                >
                <option value='ChooseOption' disabled>Wybierz motyw imprezy</option>
                <option value='Star Wars'>Star Wars</option>
                <option value='Minecraft'>Minecraft</option>
                <option value='Królowa Lodu'>Królowa Lodu</option>
                <option value='Harry Potter'>Harry Potter</option>
                <option value='Piraci'>Piraci</option>
                <option value='Księżniczki i rycerze'>Księżniczki i rycerze</option>
            </select>
        )
    }
}


export default SelectMotives;