import { useDispatch, useSelector } from "react-redux";
import { changeCheckbox } from "../redux/actions";

export default ({ field }) => {
  const value = useSelector((state) => state[field.toLowerCase()]);
  const dispatch = useDispatch();
  return (
    <div class="form-check form-switch field-cont switch-cont">
      <label class="form-check-label" for={`checkbox-${field.toLowerCase()}`}>
        {` Include ${field}`}
      </label>
      <input
        id={`checkbox-${field.toLowerCase()}`}
        class="form-check-input"
        type="checkbox"
        role="switch"
        checked={value}
        onChange={({ target }) => dispatch(
          changeCheckbox(field.toLowerCase(), target.checked)
        )}
      />
    </div>
  );
};
