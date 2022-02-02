import React, { Component } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import BtnGenerate from '../BtnGenerate/BtnGenerate';
import './Settings.css';

export default class Settings extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <form className="main__form">
        <p className="legend">SETTINGS</p>
        <Checkbox
          label="Include Uppercase"
          id="settings_uppercase"
        />

        <Checkbox
          label="Include Lowercase"
          id="settings_lowercase"
        />

        <Checkbox
          label="Include Numbers"
          id="settings_numbers"
        />

        <Checkbox
          label="Include Symbols"
          id="settings_symbols"
        />

        <BtnGenerate onClick={ onClick }/>
      </form>
    );
  }
}
