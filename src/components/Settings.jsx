import React from 'react';
import { connect } from 'react-redux';
import generateWord from '../functions';
import { wordAction } from '../actions';
import PropTypes from 'prop-types';

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
    const { passwordData, createWord } = this.props;
    const savedPassword = generateWord(passwordData.passwordLength, this.state);
    localStorage.setItem('savedPassword', savedPassword);
    createWord({ savedPassword });
  }

  render() {
    const { firstChecked, secondChecked, thirdChecked, fourthChecked } = this.state;
    const isEnabled = firstChecked || secondChecked || thirdChecked || fourthChecked;

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
          onClick={ this.handleClick }
          disabled={ !isEnabled }
        >GENERATE PASSWORD</button>
      </form>
    )
  }
}

Settings.propTypes = {
  passwordData: PropTypes.objectOf(PropTypes.string).isRequired,
  createWord: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  passwordData: state.lengthInput,
});

const mapDispatchToProps = (dispatch) => ({
  createWord: (e) => dispatch(wordAction(e))
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
