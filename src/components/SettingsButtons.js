import react from 'react';
import { useDispatch } from 'react-redux';
import { handleSettings } from '../redux/password/passwordSlice';

function SettingsButtons({ setting }) {
  const dispatch = useDispatch();

  function handleCheckboxChange(event) {
    const { target: { name, checked } } = event;
    const actionPayload = {
      settingName: name,
      settingOption: checked,
    };
    dispatch(handleSettings(actionPayload));
  };

  return (
    <div>
      <label
        htmlFor={ `switch-${setting}` }
      >
        <input
          type="checkbox"
          id={ `switch-${setting}` }
          name={ setting.replace(' ', '') }
          onChange={ handleCheckboxChange }
        />
        { setting }
      </label>
    </div >
  );
}

export default SettingsButtons;
