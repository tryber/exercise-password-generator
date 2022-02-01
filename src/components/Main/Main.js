import React, { Component } from 'react';
import LengthCaracters from '../LengthCaracters/LengthCaracters';
import Settings from '../Settings/Settings';

export default class Main extends Component {
  render() {
    return (
      <main className="body_main">
        <p>CLICK GENERATE</p>

        <LengthCaracters />
        <Settings />
      </main>
    );
  }
}
