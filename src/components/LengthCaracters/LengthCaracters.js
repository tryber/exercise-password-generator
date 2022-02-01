import React, { Component } from 'react';
import './LengthCaracters.css';

export default class LengthCaracters extends Component {
  constructor() {
    super ();

    this.state = {
      length: '4',
    }
  }

  handleChange = ({ target }) => {
    this.setState({ length: target.value })
  }

  render() {
    const { length } = this.state;

    return (
      <section className="main_length">
        <p className="legend">{`LENGTH: ${ length }`}</p>
        <div className="box_style input_length">
          <span className="min_length">4</span>
          <input
            className="slider"
            onChange={ this.handleChange }
            type="range"
            min="4"
            max="32"
            value={ length }
          />
          
          <span className="max_length">32</span>
        </div>
        
      </section>
      
    );
  }
}
