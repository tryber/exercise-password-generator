import React from 'react';

class LengthInput extends React.Component {
  constructor() {
    super();
    this.state = {
      chosenNumber: '16',
    }
  }
  render() {
    const { chosenNumber } = this.state;
    return (
      <label htmlFor="length-input">
        <h5>
          <span>Length: </span>
          <span className="white">{ chosenNumber }</span>
        </h5>
        <div className="input-container">
          <span>4</span>
          <input
            type="range"
            min="4"
            max="32"
            data-testid="length-input"
            value={ chosenNumber }
            onChange={({target}) => this.setState({chosenNumber: target.value})}
          />
          <span>32</span>
        </div>
      </label>
    )
  }
}

export default LengthInput;
