import React from 'react';
import LengthRange from './LengthRange';
import SettingsButtons from './SettingsButtons';

function Settings() {
  return(
    <div>
      <SettingsButtons setting="Include Uppercase" />
      <SettingsButtons setting="Include Lowercase" />
      <SettingsButtons setting="Include Numbers" />
      <SettingsButtons setting="Include Symbols" />
      <LengthRange />
    </div>
  );
}

export default Settings;
