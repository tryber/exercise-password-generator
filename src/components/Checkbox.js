import React, { Component } from 'react';

export default class Checkbox extends Component {
  render() {
    const { id, label } = this.props;

    return (
      <label htmlFor={ id }>
        { label }
        <input
        id={ id }
        type="checkbox"
        />
      </label>
    );
  }
}
