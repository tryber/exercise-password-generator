import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import icone from '../images/default.png';
import stringShape from '../functions/shape';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      imagem: icone,
      exhibition: false,
      lastPassword: '',
      hasImage: false,
    };
  }

  componentDidMount() {
    this.getLastPassword();
  }

  getLastPassword = () => {
    const { passwordData: { savedPassword } } = this.props;
    const lastPassword = savedPassword || localStorage.getItem('savedPassword');
    this.setState({ lastPassword });
  }

  handleChange = ({ target }) => {
    this.setState({
      imagem: URL.createObjectURL(target.files[0]),
      hasImage: true,
    });
  }

  handleClick = () => {
    this.setState((prevState) => ({ exhibition: !prevState.exhibition }));
  }

  render() {
    const { userData } = this.props;
    const { imagem, exhibition, lastPassword, hasImage } = this.state;

    return (
      <main className="profile">
        <nav>
          <Link to="/generate-password">Password Generator</Link>
        </nav>
        <section>
          <label htmlFor="photo-input">
            { !hasImage && <span>Insira uma foto do perfil:</span> }
            <input
              type="file"
              id="photo-input"
              onChange={ this.handleChange }
            />
          </label>
          <img src={ imagem } alt="" />
          <p>{ userData.email }</p>
        </section>
        <section className="senha">
          <p>Minha Senha:</p>
          <button onClick={ this.handleClick } type="button">
            <h2>
              { exhibition ? lastPassword : <i className="far fa-eye" /> }
            </h2>
          </button>
        </section>
      </main>
    );
  }
}

Profile.propTypes = {
  userData: stringShape('email'),
  passwordData: stringShape('savedPassword'),
}.isRequired;

const mapStateToProps = (state) => ({
  userData: state.login,
  passwordData: state.changingWord,
});

export default connect(mapStateToProps)(Profile);
