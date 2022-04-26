import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getPassword from '../helpers/generatePassword';
import { savePassword } from '../redux/password/passwordSlice';

function GenerateButton() {
  const dispatch = useDispatch()
  const password = useSelector((state) => state.password.password)
  const length = useSelector((state) => state.password.settings.length);
  const settings = useSelector((state) => state.password.settings);

  return (
    <div>
      <button
        type="button"
        onClick={ () => dispatch(savePassword('mcacascasc'))}
      >
        Generate Password
      </button>
      <button onClick={ () => getPassword(Number(length), settings) }> teste </button>
      { password }
    </div>
  );
}

export default GenerateButton;
