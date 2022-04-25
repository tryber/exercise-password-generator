import React from 'react';
import GenerateButton from './GenerateButton';
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
      <GenerateButton />
    </div>
  );
}

export default Settings;
