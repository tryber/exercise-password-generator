import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import icone from '../images/default.png';
import stringShape from '../functions/shape';

class Header extends React.Component {
  render() {
    const { passwordData: { savedPassword } } = this.props;
    return (
      <header>
        <h1 className='perfil'>
          <span>Password Generator</span>
          <Link to="/profile"><img src={ icone } alt='Ícone Usuário'/></Link>
        </h1>
        <section>
          <h3>{savedPassword || 'CLICK GENERATE'}</h3>
        </section>
      </header>
    )
  }
}

Header.propTypes = {
  passwordData: stringShape('savedPassword'),
}.isRequired;

const mapStateToProps = (state) => ({
  passwordData: state.changingWord,
});

export default connect(mapStateToProps)(Header);
