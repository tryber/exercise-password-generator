import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BtnGenerate.css';

export default class BtnGenerate extends Component {
  render() {
    const { onClick, buttonDisabled } = this.props;

    return (
      <button
        className="btn"
        type="submit"
        onClick={ onClick }
        disabled={ buttonDisabled }
      >
        GENERATE PASSWORD
      </button>  
    );
  }
}

BtnGenerate.propTypes = {
  onClick: PropTypes.func,
  buttonDisabled: PropTypes.bool,
}
