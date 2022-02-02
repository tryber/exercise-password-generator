import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox/Checkbox';
import BtnGenerate from '../BtnGenerate/BtnGenerate';
import './Settings.css';

export default class Settings extends Component {
  render() {
    const { onClick, onChange, uppercase, lowercase, numbers, symbols, buttonDisabled } = this.props;
    return (
      <form className="main__form">
        <p className="legend">SETTINGS</p>
        <Checkbox
          label="Include Uppercase"
          id="settings_uppercase"
          checked={ uppercase }
          onChange={ onChange }
          name="uppercase"
        />

        <Checkbox
          label="Include Lowercase"
          id="settings_lowercase"
          checked={ lowercase }
          onChange={ onChange }
          name="lowercase"
        />

        <Checkbox
          label="Include Numbers"
          id="settings_numbers"
          checked={ numbers }
          onChange={ onChange }
          name="numbers"
        />

        <Checkbox
          label="Include Symbols"
          id="settings_symbols"
          checked={ symbols }
          onChange={ onChange }
          name="symbols"
        />

        <BtnGenerate buttonDisabled={ buttonDisabled } onClick={ onClick }/>
      </form>
    );
  }
}

Settings.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  uppercase: PropTypes.bool,
  lowercase: PropTypes.bool,
  numbers: PropTypes.bool,
  symbols: PropTypes.bool,
  buttonDisabled: PropTypes.bool,
}.isRequired;
