import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePassword } from '../redux/counter/counterSlice';

function GenerateButton() {
  const dispatch = useDispatch()
  const password = useSelector((state) => state.counter.password)

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
