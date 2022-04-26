import React from 'react';
import { useSelector } from 'react-redux';


function GeneratedPassword() {
  const password = useSelector((state) => state.password.password);

  return (
    <div>
      <h2>{ password }</h2>
    </div>
  );
}

export default GeneratedPassword;
