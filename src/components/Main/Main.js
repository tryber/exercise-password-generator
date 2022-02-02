import React, { Component } from 'react';
import LengthCaracters from '../LengthCaracters/LengthCaracters';
import Settings from '../Settings/Settings';
import letters from '../../data/letters';
import './Main.css'

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      password: '',
      lengthPassword: '4',
      uppercase: false,
      lowercase: false,
      numbers: false,
      symbols: false,
      buttonDisabled: true,
    }
  }

  handleLength = ({ target: { value } }) => {
    this.setState({ lengthPassword: value });
  }

  createPassword = () => {
    const { lengthPassword } = this.state;
    let password = '';

    for (let index = 1; index <= lengthPassword; index += 1) {
      const index = Math.ceil(Math.random() * letters.length) - 1;
      password += letters[index];
    };

    return password;
  }

  validationButton = () => {
    const { uppercase, lowercase, numbers, symbols } = this.state;

    const checkedCases = [ uppercase, lowercase, numbers, symbols ];
    const validationButton = checkedCases.some((elem) => elem);

    this.setState({ buttonDisabled: !validationButton })
  }

  handleChangeCheckbox = ({ target }) => {
    const { name } = target;
    this.setState((prevState) => ({
      [name]: !prevState[name],
    }), () => this.validationButton() );
  }

  handleClick = (event) => {
    event.preventDefault();
    const password = this.createPassword();

    this.setState({ password });
  }

  render() {
    const { password, lengthPassword, uppercase, lowercase, numbers, symbols, buttonDisabled } = this.state;

    return (
      <main className="body_main">
        { password.length === 0
          ? <p className="main_password">CLICK GENERATE</p>
          : <p className="main_password">{ password }</p>
        }

        <LengthCaracters length={ lengthPassword } onChange={ this.handleLength } />
        <Settings
          onClick={ this.handleClick }
          onChange={ this.handleChangeCheckbox }
          uppercase={ uppercase }
          lowercase={ lowercase }
          numbers={ numbers }
          symbols={ symbols }
          buttonDisabled={ buttonDisabled }
        />
      </main>
    );
  }
}
