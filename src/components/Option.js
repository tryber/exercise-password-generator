import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionChangeSettings } from "../redux/actions";

function Option({ label, name }) {
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  return (
    <label>
      {label}
      <input
        type="checkbox"
        name={name}
        checked={settings[name]}
        onChange={({ target }) =>
          dispatch(actionChangeSettings(target.name, target.checked))
        }
      />
    </label>
  );
}

Option.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Option;
