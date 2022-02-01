import './App.css';
import React from 'react';
import Header from './components/Header';
import RangeInput from './components/RangeInput';
import Settings from './components/Settings';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RangeInput />
        <Settings />
      </div>
    );
  }
}

export default App;
