import React, { Component } from "react";

class Checkbox extends Component {
  render() {
    const { textLabel, name, handleChange, checked } = this.props;
    return (
      <div className="container">
        <label htmlFor={textLabel}>
          {textLabel}
          <input
            onChange={handleChange}
            name={name}
            id={textLabel}
            type="checkbox"
          />
          {checked ? (
            <div id={textLabel} className="check select">
              <div></div>
            </div>
          ) : (
            <div id={textLabel} className="check">
              <div></div>
            </div>
          )}
        </label>
      </div>
    );
  }
}

export default Checkbox;
