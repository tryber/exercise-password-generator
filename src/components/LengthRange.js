import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleSettings } from '../redux/password/passwordSlice';

function LengthRange() {
  const dispatch = useDispatch();
  const length = useSelector((state) => state.password.settings.length);

  function handleRangeChange(event) {
    const { target: { name, value } } = event;
    const actionPayload = {
      settingName: name,
      settingOption: value,
    };
    dispatch(handleSettings(actionPayload));
  };

  return(
    <label>
      length: { length }
      <input
        defaultValue="4"
        type="range"
        id="length-range"
        min="4"
        max="32"
        name="length"
        onChange={ handleRangeChange }
      />
    </label>
  );
}

export default LengthRange;
