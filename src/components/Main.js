import React, { Component } from 'react';
import LengthCaracters from './LengthCaracters';
import Settings from './Settings';

export default class Main extends Component {
  render() {
    return (
      <main>
        <p>CLICK GENERATE</p>

        <LengthCaracters />
        <Settings />
      </main>
    );
  }
}
