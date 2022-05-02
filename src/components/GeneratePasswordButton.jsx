import React from 'react';
import { useSelector } from 'react-redux';
import passwordGenerator from '../functions/passwordGenerator';

function GeneratePasswordButton() {
  const { value } = useSelector((state) => state.length);
  const { settings } = useSelector((state) => state);

  const handleClick = () => {
    try {
      passwordGenerator(value, settings);
    } catch (error) {
      alert('Escolha pelo menos uma opção');
    }
  }

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