import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { lengthPassword } from '../../redux/actions';
import './LengthCaracters.css';

class LengthCaracters extends Component {
  constructor() {
    super();

    this.state = {
      lengthPassword: '4',
    }
  }

  handleLength = ({ target: { value } }) => {
    const { attLength } = this.props;
    this.setState({ lengthPassword: value });

    attLength(value);
  }

  render() {
    const { lengthPassword } = this.state;

    return (
      <section data-testid="option-length" className="main_length">
        <p className="legend">{`LENGTH: ${ lengthPassword }`}</p>
        <div className="box_style input_length">
          <span className="min_length">4</span>
          <input
            className="slider"
            type="range"
            min="4"
            max="20"
            value={ lengthPassword }
            onChange={ this.handleLength }
          />
          
          <span className="max_length">20</span>
        </div>
        
      </section>
      
    );
  }
}

LengthCaracters.propTypes = {
  attLength: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  attLength: (value) => dispatch(lengthPassword(value)),
})

export default connect(null, mapDispatchToProps)(LengthCaracters);
