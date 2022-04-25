import { useDispatch, useSelector } from "react-redux";
import { changeCheckbox } from "../redux/actions";

export default ({ field }) => {
  const value = useSelector((state) => state[field.toLowerCase()]);
  const dispatch = useDispatch();
  return (
    <label>
      <input
        type="checkbox"
        checked={value}
        onChange={({ target }) => dispatch(
          changeCheckbox(field.toLowerCase(), target.checked)
        )}
      />
      {` Include ${field}`}
    </label>
  );
};
