import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionChangeSettings } from "../redux/actions";

function Length() {
  const { length } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  return (
    <fieldset>
      <legend>
        length: <span>{length}</span>
      </legend>
      <input
        type="range"
        min="4"
        max="32"
        name="length"
        value={length}
        onChange={({ target }) =>
          dispatch(actionChangeSettings(target.name, target.value))
        }
      />
    </fieldset>
  );
}

export default Length;
