import React, { Component } from "react";

class Number extends Component {
  render() {
    const { handleChange, name } = this.props;
    return (
      <div className="container">
        <label htmlFor="number">
          Include Number
          <input
            name={name}
            onChange={handleChange}
            id="number"
            type="number"
						min="8"
          />
        </label>
      </div>
    );
  }
}

export default Number;
