import React from 'react';
import { connect } from 'react-redux';
import { inputsAction } from '../actions';

class Settings extends React.Component {
  constructor() {
    super();
    this.state = {
      firstChecked: false,
      secondChecked: false,
      thirdChecked: false,
      fourthChecked: false,
    }
  }

  handleChange = (name) => {
    this.setState((state) => ({[name]: !state[name]}))
  }

  handleClick = () => {
    const {
      firstChecked,
      secondChecked,
      thirdChecked,
      fourthChecked,
    } = this.state;
    const { inputsAction } = this.props;
    inputsAction({
      firstChecked,
      secondChecked,
      thirdChecked,
      fourthChecked,
    });
  }

  render() {
    const { firstChecked, secondChecked, thirdChecked, fourthChecked } = this.state;
    return (
      <form>
        <h5>Settings</h5>
        <section className="input-container" >
          <h4>Include Uppercase</h4>
          <label className="switch" htmlFor="upper-input">
            <input
              type="checkbox"
              data-testid="upper-input"
              checked={ firstChecked }
              onChange={() => this.handleChange('firstChecked')}
            />
            <span
              className="slider round"
              onClick={() => this.handleChange('firstChecked')}
            ></span>
          </label>
        </section>
        <section className="input-container" >
          <h4>Include Lowercase</h4>
          <label className="switch" htmlFor="lower-input">
            <input
              type="checkbox"
              data-testid="lower-input"
              checked={ secondChecked }
              onChange={() => this.handleChange('secondChecked')}
            />
            <span
              className="slider round"
              onClick={() => this.handleChange('secondChecked')}
            ></span>
          </label>
        </section>
        <section className="input-container" >
          <h4>Include Numbers</h4>
          <label className="switch" htmlFor="numbers-input">
            <input
              type="checkbox"
              data-testid="numbers-input"
              checked={ thirdChecked }
              onChange={() => this.handleChange('thirdChecked')}
            />
            <span
              className="slider round"
              onClick={() => this.handleChange('thirdChecked')}
            ></span>
          </label>
        </section>
        <section className="input-container" >
          <h4>Include Symbols</h4>
          <label className="switch" htmlFor="symbols-input">
            <input
              type="checkbox"
              data-testid="symbols-input"
              checked={ fourthChecked }
              onChange={() => this.handleChange('fourthChecked')}
            />
            <span
              className="slider round"
              onClick={() => this.handleChange('fourthChecked')}
            ></span>
          </label>
        </section>
        <button
          type="button"
          className="generate-button"
          onClick={ this.hadleClick }
        >GENERATE PASSWORD</button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  inputsAction: (e) => dispatch(inputsAction(e))});

export default connect(null, mapDispatchToProps)(Settings);
