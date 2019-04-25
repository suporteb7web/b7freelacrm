import React, { Component } from 'react';
import style from './style.scss';

export class Header extends Component {
  render() {
    return (
      <header>
        <img src="assets/logo.png" class="logo" />
      </header>
    );
  }
}