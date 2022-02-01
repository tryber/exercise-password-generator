import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';

export default class Checkbox extends Component {
  render() {
    const { id, label } = this.props;

    return (
      <label className="box_style switch" htmlFor={ id }>
        <span className="switch-text">{ label }</span>
        <div className="switch-wrapper">
          <input
          id={ id }
          type="checkbox"
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
}.isRequired;
