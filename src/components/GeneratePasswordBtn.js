import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGeneratePassword } from "../redux/actions";

function GeneratePasswordBtn() {
  const dispatch = useDispatch();
  const { includeUppercase, includeLowercase, includeNumbers, includeSymbols } =
    useSelector((state) => state.settings);
  const settings = [
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
  ];

  return (
    <button
      type="button"
      onClick={() => dispatch(actionGeneratePassword())}
      disabled={settings.every((option) => option === false)}
    >
      generate password
    </button>
  );
}

export default GeneratePasswordBtn;
