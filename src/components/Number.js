import React, { Component } from "react";

class Number extends Component {
  render() {
    const { handleChange, name } = this.props;
    return (
      <div className="container">
        <label htmlFor="number">
        4
          <input
            name={name}
            onChange={handleChange}
            id="number"
            type="range"
						min="4"
            max="30"
          />
          32
        </label>
      </div>
    );
  }
}

export default Number;
