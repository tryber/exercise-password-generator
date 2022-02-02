import React from 'react';
import { connect } from 'react-redux';
import generateWord from '../functions';

class Header extends React.Component {
  render() {
    const { passwordData, inputsData } = this.props;
    const password = generateWord(passwordData.passwordLength, inputsData);
    return (
      <header>
        <h1>Password Generator</h1>
        <section>
          <h3>{password}</h3>
          {/* <h4>{inputsData.firstChecked ? 'é vdd' : 'not'}</h4>
          <h4>{inputsData.secondChecked ? 'é vdd' : 'not'}</h4>
          <h4>{inputsData.thirdChecked ? 'é vdd' : 'not'}</h4>
          <h4>{inputsData.fourthChecked ? 'é vdd' : 'not'}</h4> */}
        </section>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  passwordData: state.lengthInput,
  inputsData: state.changingInputs,
});

export default connect(mapStateToProps)(Header);
