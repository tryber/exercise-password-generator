import React from "react";
import { Button } from "react-bootstrap";

export default class GenerateButton extends React.Component {
  render() {
    return(
    <Button variant="primary" type="submit">
      GENERATE PASSWORD
    </Button>
    )
  }
}