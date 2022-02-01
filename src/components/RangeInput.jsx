import React from 'react';
import { connect } from 'react-redux';
import { lengthAction } from '../actions';

class RangeInput extends React.Component {
  constructor() {
    super();
    this.state = {
      chosenNumber: '16',
    }
  }

  handleChange = ({target}) => {
    this.setState({chosenNumber: target.value});
    const { lengthAction } = this.props;
    lengthAction({ passwordLength: target.value });
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
            onChange={ this.handleChange }
          />
          <span>32</span>
        </div>
      </label>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  lengthAction: (e) => dispatch(lengthAction(e))});

export default connect(null, mapDispatchToProps)(RangeInput);
