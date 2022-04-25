import React from 'react';

function LengthRange() {
  return(
    <label>
      length:
      <input
        type="range"
        id="length-range"
        min="4"
        max="32"
      />
    </label>
  );
}

export default LengthRange;
