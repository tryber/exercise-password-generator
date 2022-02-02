import React, { Component } from 'react';
import './BtnGenerate.css';

export default class BtnGenerate extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <button
        className="btn"
        type="submit"
        onClick={ onClick }
      >
        GENERATE PASSWORD
      </button>  
    );
  }
}
