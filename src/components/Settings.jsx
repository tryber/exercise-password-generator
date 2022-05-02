import { useSelector, useDispatch } from 'react-redux';
import SettingsToggle from './SettingsToggle';
import * as actionCreators from '../slices/settingsSlice';
import { bindActionCreators } from '@reduxjs/toolkit'

function Settings() {
  const {
    upperCase, lowerCase, numbers, symbols
  } = useSelector((state) => state.settings);

  const dispatch = useDispatch();

  const {
    toggleUpperCase,
    toggleLowerCase,
    toggleNumbers,
    toggleSymbols,
  } = bindActionCreators(actionCreators, dispatch);

  return (
    <section>
      <p>SETTINGS</p>
      <SettingsToggle
        labelText="include Uppercase"
        checked={upperCase}
        toggle={toggleUpperCase}
      />
      <br />
      <SettingsToggle
        labelText="include Lowercase"
        checked={lowerCase}
        toggle={toggleLowerCase}
      />
      <br />
      <SettingsToggle
        labelText="include Numbers"
        checked={numbers}
        toggle={toggleNumbers}
      />
      <br />
      <SettingsToggle
        labelText="include Symbols"
        checked={symbols}
        toggle={toggleSymbols}
      />
    </section>
  );
}

export default Settings;