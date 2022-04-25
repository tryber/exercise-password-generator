import React from 'react';

function LengthRange() {
  return(
    <label htmlFor="length-range">
      length:
      <input
        type="range"
        className="form-range"
        id="length-range"
        min="4"
        max="32"
      />
    </label>
  );
}

export default LengthRange;
