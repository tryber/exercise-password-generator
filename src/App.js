import './App.css';
import React from 'react';
import Header from './components/Header';
import LengthInput from './components/LengthInput';
import Settings from './components/Settings';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <LengthInput />
        <Settings />
      </div>
    );
  }
}

export default App;
