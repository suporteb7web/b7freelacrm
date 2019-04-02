import React, { Component } from 'react';
import { Link } from "react-router-dom";
import style from './style.scss';

export class Header extends Component {
  render() {
    return (
      <header className="style.header">
        <ul>
          <li><Link to="/">Raiz</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/home">Home</Link></li>
        </ul>
      </header>
    );
  }
}