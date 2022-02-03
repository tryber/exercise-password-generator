import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import generateWord from '../functions';
import icone from '../images/default.png';

class Header extends React.Component {
  render() {
    const { passwordData, inputsData } = this.props;
    const password = generateWord(passwordData.passwordLength, inputsData);
    localStorage.setItem('savedPassword', password);

    return (
      <header>
        <h1 className='perfil'>
          <span>Password Generator</span>
          <Link to="/profile"><img src={ icone } alt='Ícone Usuário'/></Link>
        </h1>
        <section>
          <h3>{password}</h3>
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
