import { useDispatch, useSelector } from "react-redux";
import { changeLength } from "../redux/actions";

export default () => {
  const length = useSelector((state) => state.length);
  const dispatch = useDispatch();
  return (
    <>
      <p className="subtitle">
        {'Length: '}
        <span className="length">{length}</span>
      </p>
      <div className="field-cont">
        <span className="boundaries">4</span>
        <input
          className="slider"
          type="range"
          min="4"
          max="32"
          value={ length }
          onChange={ ({ target }) => dispatch(changeLength(target.value)) }
        />
        <span className="boundaries">32</span>
      </div>
    </>
  );
};
