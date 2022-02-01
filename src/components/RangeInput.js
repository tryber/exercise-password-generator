import React from "react";
import { Form } from "react-bootstrap";

export default class RangeInput extends React.Component {
  render() {
    const { handleChange, name, length } = this.props;
    return(
      <>
        <Form.Label>{ `${name}: ${length}` }</Form.Label>
        <Form.Range min="4" max="32" step="1" value={ length } name={ name.toLowerCase() } onChange={ handleChange }/>
      </>
    )
  }
}