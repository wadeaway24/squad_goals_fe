import React, { Component } from 'react';
import logo from './assets/logo/logo_l.png';

class NavBar extends Component {

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <img className="logo" src={logo} alt=""/>
        </div>
      </nav>
    )
  }
}

export default NavBar;