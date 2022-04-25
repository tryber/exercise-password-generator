import React from 'react';
import SettingsButtons from './SettingsButtons';

function Settings() {
  return(
    <div>
      <SettingsButtons setting="Include Uppercase" />
      <SettingsButtons setting="Include Lowercase" />
      <SettingsButtons setting="Include Numbers" />
      <SettingsButtons setting="Include Symbols" />
    </div>
  );
}

export default Settings;
