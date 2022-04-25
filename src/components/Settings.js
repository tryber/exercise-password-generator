import React from 'react';
import Option from './Option';

function Settings() {
  return (
    <fieldset>
      <legend>settings</legend>
      <Option label="include uppercase" />
      <Option label="include lowercase" />
      <Option label="include numbers" />
      <Option label="include symbols" />
    </fieldset>
  );
}

export default Settings;
