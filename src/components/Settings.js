import React from 'react';
import Option from './Option';

function Settings() {
  return (
    <fieldset>
      <legend>settings</legend>
      <Option label="include uppercase" name="includeUppercase" />
      <Option label="include lowercase" name="includeLowercase" />
      <Option label="include numbers" name="includeNumbers" />
      <Option label="include symbols" name="includeSymbols" />
    </fieldset>
  );
}

export default Settings;
