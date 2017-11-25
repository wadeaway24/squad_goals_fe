import React, { Component } from 'react';
import logo from './assets/logo/logo_l.png';

class NavBar extends Component {

  renderNewGameRecap(e) {
    e.preventDefault();
    console.log("Inserted value:" + this.refs.match_id.value);
    console.log("you just pushed the BUTTON");
  }

  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <img className="logo" src={logo} alt=""/>
          <form className="navbar-form navbar-left" onSubmit={this.renderNewGameRecap.bind(this)}>
            <div className="form-group">
              <input type="text" className="form-control" ref="match_id" placeholder="Insert Match ID"/>
            </div>
            <button className="btn btn-default" button="submit">Find Recap</button>
          </form>
        </div>
      </nav>
    )
  }
}

export default NavBar;