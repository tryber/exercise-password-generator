import React, { Component } from 'react';
import LengthCaracters from '../LengthCaracters/LengthCaracters';
import Settings from '../Settings/Settings';
import './Main.css'

export default class Main extends Component {
  render() {
    return (
      <main className="body_main">
        <p className="box_style main_password">CLICK GENERATE</p>

        <LengthCaracters />
        <Settings />
      </main>
    );
  }
}
