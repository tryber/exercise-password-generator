import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LengthCaracters.css';

export default class LengthCaracters extends Component {

  render() {
    const { onChange, length } = this.props;

    return (
      <section className="main_length">
        <p className="legend">{`LENGTH: ${ length }`}</p>
        <div className="box_style input_length">
          <span className="min_length">4</span>
          <input
            className="slider"
            type="range"
            min="4"
            max="20"
            value={ length }
            onChange={ onChange }
          />
          
          <span className="max_length">20</span>
        </div>
        
      </section>
      
    );
  }
}

LengthCaracters.propTypes = {
  onChange: PropTypes.func,
  length: PropTypes.string,
}.isRequired;
