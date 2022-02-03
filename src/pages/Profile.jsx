import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import icone from '../images/default.png';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      imagem: icone,
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      imagem: URL.createObjectURL(target.files[0]),
    });
  }

  render() {
    const { userData } = this.props;
    const { imagem } = this.state;

    return (
      <main className="profile">
        <section>
          <label htmlFor="photo-input">
            <span>Insira uma foto do perfil:</span>
            <input
              type="file"
              id="photo-input"
              onChange={ this.handleChange }
            />
          </label>
          <img src={ imagem } alt="" />
          <p>{ userData.email }</p>
        </section>
        <section>
          <p>Minha Senha:</p>
        </section>
      </main>
    );
  }
}

Profile.propTypes = {
  userData: PropTypes.shape({
    email: PropTypes.string,
  }),
}.isRequired;

const mapStateToProps = (state) => ({
  userData: state.login,
});

export default connect(mapStateToProps)(Profile);
