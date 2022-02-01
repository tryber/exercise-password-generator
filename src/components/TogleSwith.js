import React from "react";
import { Form } from "react-bootstrap";

export default class TogleSwith extends React.Component {
  render() {
    const { name,  handleChange } = this.props;
    return(
    <Form.Check
      type='checkbox'
      label={name}
      name={name.toLowerCase()}
      onChange={handleChange}
    />
    )
  }
}