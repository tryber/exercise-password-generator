import { useDispatch, useSelector } from "react-redux";
import { changeLength } from "../redux/actions";

export default () => {
  const length = useSelector((state) => state.length);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{`Length: ${length}`}</h2>
      <input
        type="range"
        min="4"
        max="32"
        value={ length }
        step="1"
        onChange={ ({ target }) => dispatch(changeLength(target.value)) }
      />
    </div>
  );
};
