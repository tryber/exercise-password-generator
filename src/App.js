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

  render(){
    return (
      <Container>
        <Row>
          <h1>Password Generator</h1>
        </Row>
        <Form>
          <RangeInput handleChange= {this.handleChange} />

          <TogleSwith handleChange= {this.handleChange} name='Uppercase'/>

          <TogleSwith handleChange= {this.handleChange} name='Lowercase'/>

          <TogleSwith handleChange= {this.handleChange} name='Numbers'/>

          <TogleSwith handleChange= {this.handleChange} name='Symbols'/>

          <GenerateButton />
        </Form>
      </Container>
    );
  }
}
