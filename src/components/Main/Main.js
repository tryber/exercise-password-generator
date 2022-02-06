import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import copy from 'copy-to-clipboard';
import { copiedPassword } from '../../redux/actions';
import LengthCaracters from '../LengthCaracters/LengthCaracters';
import Settings from '../Settings/Settings';
import './Main.css'

class Main extends Component {
  copyPassword = () => {
    const { password, copied } = this.props;
    copy(password);
    copied();
  }

  render() {
    const { password, btnCopy } = this.props;

    return (
      <main className="body_main">
        { password.length === 0
          ? <p className="main_password">CLICK GENERATE</p>
          : (
            <>
              <button
                type="button"
                onClick={ this.copyPassword }
                className={ btnCopy }
              >
                { btnCopy }
              </button>
              <p className="main_password">{ password }</p>
            </>
            )
        }

        <LengthCaracters />
        <Settings />
      </main>
    );
  }
}

Main.propTypes = {
  password: PropTypes.string,
  btnCopy: PropTypes.string,
  copied: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => {
  const { password } = state.passwordReducer;
  const { btnCopy } = state.copyPasswordReducer;
  return { password, btnCopy };
}

const mapDispatchToProps = (dispatch) => ({
  copied: () => dispatch(copiedPassword()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
