import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../slices/lengthSlice';
import { bindActionCreators } from '@reduxjs/toolkit'

function LengthSlider() {
  const value = useSelector((state) => state.length.value);
  const dispatch = useDispatch();

  const { changeValue } = bindActionCreators(actionCreators, dispatch);

  const handleChange = ({ target: { value } }) => {
    changeValue(value);
  }

  return (
    <section>
      <label>
        LENGTH: {value}
        <br />
        <input
          type="range"
          min="4"
          max="32"
          onChange={handleChange}
          value={value}
        />
      </label>
    </section>
  );
}

export default LengthSlider;