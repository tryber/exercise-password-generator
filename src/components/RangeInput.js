import React from "react";
import { Form } from "react-bootstrap";

export default class RangeInput extends React.Component {
  render() {
    return(
      <>
        <Form.Label>Range</Form.Label>
        <Form.Range min="4" max="32" step="1"/>
      </>
    )
  }
}