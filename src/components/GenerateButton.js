import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePassword } from '../redux/password/passwordSlice';

function GenerateButton() {
  const dispatch = useDispatch()
  const password = useSelector((state) => state.password.password)

  return (
    <div>
      <button
        type="button"
        onClick={ () => dispatch(savePassword('mcacascasc'))}
      >
        Generate Password
      </button>
      { password }
    </div>
  );
}

export default GenerateButton;
