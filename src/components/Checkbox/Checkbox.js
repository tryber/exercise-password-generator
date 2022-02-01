import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Checkbox extends Component {
  render() {
    const { id, label } = this.props;

    return (
      <label className="box_style" htmlFor={ id }>
        { label }
        <input
        id={ id }
        type="checkbox"
        />
      </label>
    );
  }
}

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
}.isRequired;
