import React from 'react';
import Header from '../components/Header';
import RangeInput from '../components/RangeInput';
import Settings from '../components/Settings';

class GeneratePassword extends React.Component {
  render() {
    return (
      <div className="general">
        <Header />
        <RangeInput />
        <Settings />
      </div>
    );
  }
}

export default GeneratePassword;
