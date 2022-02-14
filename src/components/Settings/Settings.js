import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Checkbox from '../Checkbox/Checkbox';
import BtnGenerate from '../BtnGenerate/BtnGenerate';
import './Settings.css';
import { savePassword, copyPassword } from '../../redux/actions';
import createPassword from '../../helpers/functions';

class Settings extends Component {
  constructor() {
    super();

    this.state = {
      uppercase: false,
      lowercase: false,
      numbers: false,
      symbols: false,
      buttonDisabled: true,
    }
  }

  handleClick = (event) => {
    const { savePassword, copyPassword, lengthPassword } = this.props;
    const options = Object.entries(this.state).filter((entrie) => entrie[1]);
    const password = createPassword(lengthPassword, options);

    savePassword(password);
    copyPassword();
  }

  handleChangeCheckbox = ({ target }) => {
    const { name } = target;
    this.setState((prevState) => ({
      [name]: !prevState[name],
    }), () => this.validationButton() );
  }

  validationButton = () => {
    const { uppercase, lowercase, numbers, symbols } = this.state;

    const checkedCases = [ uppercase, lowercase, numbers, symbols ];
    const validationButton = checkedCases.some((elem) => elem);

    this.setState({ buttonDisabled: !validationButton })
  }

  render() {
    const { uppercase, lowercase, numbers, symbols, buttonDisabled } = this.state;

    return (
      <form onSubmit={ (event) => event.preventDefault() } className="main__form">
        <p className="legend">SETTINGS</p>
        <Checkbox
          label="Include Uppercase"
          id="settings_uppercase"
          checked={ uppercase }
          onChange={ this.handleChangeCheckbox }
          name="uppercase"
        />

        <Checkbox
          label="Include Lowercase"
          id="settings_lowercase"
          checked={ lowercase }
          onChange={ this.handleChangeCheckbox }
          name="lowercase"
        />

        <Checkbox
          label="Include Numbers"
          id="settings_numbers"
          checked={ numbers }
          onChange={ this.handleChangeCheckbox }
          name="numbers"
        />

        <Checkbox
          label="Include Symbols"
          id="settings_symbols"
          checked={ symbols }
          onChange={ this.handleChangeCheckbox }
          name="symbols"
        />

        <BtnGenerate
          buttonDisabled={ buttonDisabled }
          onClick={ this.handleClick }
        />
      </form>
    );
  }
}

Settings.propTypes = {
  savePassword: PropTypes.func,
  lengthPassword: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => {
  const { length } = state.lengthPasswordReducer;
  return { lengthPassword: length };
}

const mapDispatchToProps = (dispatch) => ({
  savePassword: (password) => dispatch(savePassword(password)),
  copyPassword: () => dispatch(copyPassword()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
