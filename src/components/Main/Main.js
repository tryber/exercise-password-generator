import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LengthCaracters from '../LengthCaracters/LengthCaracters';
import Settings from '../Settings/Settings';
import './Main.css'

class Main extends Component {
  render() {
    const { password } = this.props;

    return (
      <main className="body_main">
        { password.length === 0
          ? <p className="main_password">CLICK GENERATE</p>
          : <p className="main_password">{ password }</p>
        }

        <LengthCaracters />
        <Settings />
      </main>
    );
  }
}

Main.propTypes = {
  password: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => {
  const { password } = state.passwordReducer;
  return { password };
}

export default connect(mapStateToProps, null)(Main);
