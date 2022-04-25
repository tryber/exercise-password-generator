import React from "react";
import { useSelector } from "react-redux";

function Password() {
  const { password } = useSelector((state) => state.settings);

  return <p>{password}</p>;
}

export default Password;
