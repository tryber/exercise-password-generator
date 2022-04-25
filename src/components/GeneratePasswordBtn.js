import React from "react";
import { useDispatch } from "react-redux";
import { actionGeneratePassword } from "../redux/actions";

function GeneratePasswordBtn() {
  const dispatch = useDispatch();

  return (
    <button type="button" onClick={() => dispatch(actionGeneratePassword())}>
      generate password
    </button>
  );
}

export default GeneratePasswordBtn;
