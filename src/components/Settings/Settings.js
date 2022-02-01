import React, { Component } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import BtnGenerate from '../BtnGenerate/BtnGenerate';

export default class Settings extends Component {
  render() {
    return (
      <form className="main__form">
        <p>Settings</p>
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

        <BtnGenerate />
      </form>
    );
  }
}
