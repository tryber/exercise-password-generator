import React from 'react';
import Header from './components/Header';
import Settings from './components/Settings';
import LengthSlider from './components/LengthSlider';
import GeneratePasswordButton from './components/GeneratePasswordButton';

function App() {
  return (
    <div>
      <Header />
      <LengthSlider />
      <Settings />
      <GeneratePasswordButton />
    </div>
  );
}

export default App;
