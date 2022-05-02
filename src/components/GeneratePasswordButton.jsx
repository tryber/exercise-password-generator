import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../slices/passwordSlice';
import { bindActionCreators } from '@reduxjs/toolkit';
import passwordGenerator from '../functions/passwordGenerator';

function GeneratePasswordButton() {
  const { value } = useSelector((state) => state.length);
  const { settings } = useSelector((state) => state);

  const dispatch = useDispatch();

  const { setPassword } = bindActionCreators(actionCreators, dispatch);

  const handleClick = () => {
    try {
      const generatedPassword = passwordGenerator(value, settings);
      setPassword(generatedPassword);
      localStorage.setItem('lastPassword', JSON.stringify(generatedPassword));
    } catch (error) {
      alert('Escolha pelo menos uma opção');
    }
  }

  useEffect(() => {
    const lastPassword = JSON.parse(localStorage.getItem('lastPassword'));
    if (lastPassword) {
      setPassword(lastPassword);
    }
  }, [])

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      Generate Password
    </button>
  );
}

export default GeneratePasswordButton;