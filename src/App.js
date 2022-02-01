import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GenerateButton from './components/GenerateButton';
import RangeInput from './components/RangeInput';
import TogleSwith from './components/TogleSwith';
import { Container, Form, Row } from 'react-bootstrap';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      length: 4,
      uppercase: false,
      lowercase: false,
      numbers: false,
      symbols: false,
      password: '',
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  // Codigo adaptado de webtutorial.com.br
  generatePass = () => {
    const { uppercase, lowercase, numbers, symbols, length} = this.state;
    let stringAleatoria = '';
    let caracteres = ''
    lowercase ? caracteres += 'abcdefghijklmnopqrstuvwxyz' : ''
    uppercase ? caracteres += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : ''
    numbers ? caracteres += '0123456789' : ''
    symbols ? caracteres += '!@#$%¨&*()_+': ''
    for (var i = 0; i < length; i++) {
      stringAleatoria += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    this.setState({
      password: stringAleatoria,
    })
  }

  render(){
    const { length, password } = this.state;
    return (
      <Container>
        <Row>
          <h1>Password Generator</h1>
        </Row>
        <Row>
          { password.length > 0 ? <h2>{ password }</h2> : <h2> CLICK TO GENERATE </h2> }
        </Row>
        <Form>
          <RangeInput handleChange= {this.handleChange} name='length' length={ length }/>

          <TogleSwith handleChange= {this.handleChange} name='uppercase'/>

          <TogleSwith handleChange= {this.handleChange} name='lowercase'/>

          <TogleSwith handleChange= {this.handleChange} name='numbers'/>

          <TogleSwith handleChange= {this.handleChange} name='symbols'/>

          <GenerateButton generatePass= {this.generatePass}/>
        </Form>
      </Container>
    );
  }
}
