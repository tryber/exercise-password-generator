import React from "react";
import { Button } from "react-bootstrap";

export default class GenerateButton extends React.Component {
  render() {
    const { generatePass } = this.props
    return(
    <Button variant="primary" type="button" onClick={ generatePass }>
      GENERATE PASSWORD
    </Button>
    )
  }
}