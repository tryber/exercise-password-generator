import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';

export default class Checkbox extends Component {
  render() {
    const { id, label, checked, onChange, name } = this.props;

    return (
      <label className="box_style switch" htmlFor={ id }>
        <span className="switch-text">{ label }</span>
        <div className="switch-wrapper">
          <input
          id={ id }
          type="checkbox"
          checked={ checked }
          onChange={ onChange }
          name={ name }
          />
          <span className="switch-button"></span>
        </div>
        
      </label>
    );
  }
}

Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
}.isRequired;
