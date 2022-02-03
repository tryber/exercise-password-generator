import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginAction } from '../actions';

const MINPASSWORDLENGTH = 5;
const src = 'https://media0.giphy.com/media/wmAXQIWefVYW3e3ra3/200w.gif?cid=82a1493btc3m2rkj1qonawyvc7389dm9aokms43u28pmiz1w&rid=200w.gif&ct=g';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.type]: target.value,
    });
  }

  handleClick = () => {
    const { email } = this.state;
    const { createLogin, history } = this.props;
    createLogin({ email });
    history.push('/generate-password');
  }

  render() {
    const { email, password } = this.state;
    return (
      <form className="login">
        <h1>LOGIN</h1>
        <img src={ src } alt="Gif Gerando Senha" />
        <label htmlFor="email-input">
          <input
            type="email"
            id="email-input"
            placeholder="Email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password-input">
          <input
            type="password"
            id="password-input"
            placeholder="Senha"
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="submit"
          disabled={ !email || password.length < MINPASSWORDLENGTH }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  createLogin: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  createLogin: (e) => dispatch(loginAction(e)) });

export default connect(null, mapDispatchToProps)(Login);
