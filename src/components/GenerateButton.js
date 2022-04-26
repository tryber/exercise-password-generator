import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getPassword from '../helpers/generatePassword';
import { savePassword } from '../redux/password/passwordSlice';

function GenerateButton() {
  const dispatch = useDispatch()
  const length = useSelector((state) => state.password.settings.length);
  const settings = useSelector((state) => state.password.settings);

  return (
    <div>
      <button
        type="button"
        onClick={ () => {
          const generatedPassword = getPassword(Number(length), settings);
          return dispatch(savePassword(generatedPassword));
        } }
      >
        Generate Password
      </button>
    </div>
  );
}

export default GenerateButton;
