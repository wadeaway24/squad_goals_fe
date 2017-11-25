import React, { Component } from 'react';
import './App.css';
import TeamTab from './TeamTab';
import NavBar from './NavBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      left: "350px",
      top: "0px",
    }
  }

  renderPlayerMovement() {
    return (
      this.state.data.forEach((tick, i) => {
        setTimeout(() => {
          this.setState({
            left: `${(Math.abs(-11000-tick.players[0].locationX)/22000)*1015}px`,
            top: `${(Math.abs(11000-tick.players[0].locationY)/22000)*1015}px`
          })
        }, 1000*i)
      })
    )
  }

  render() {
    const jpg = require("./Narva.png");

    return (
      <div>
        <NavBar/>
        <div className="game-play">
          <TeamTab team={names1}/>
          <div className="container" style={{backgroundImage: `url(${jpg})`}}>
            {/*<div className="player" style={{left: this.state.left,top: this.state.top}} />*/}
            <button className="start" onClick={this.renderPlayerMovement.bind(this)}>Start</button>
          </div>
          <TeamTab team={names2}/>
        </div>
      </div>
    );
  }
}

export default App;


const names1 = {
  name: "BANGERS",
  players: [
    {
      name: "Sander",
      is_dead: false
    },
    {
      name: "Kaarel",
      is_dead: false
    },
    {
      name: "Horm",
      is_dead: false
    },
    {
      name: "Hilari",
      is_dead: false
    }
  ]
};

const names2 = {
  name: "LOSERS",
  players: [
    {
      name: "Karl",
      is_dead: true
    },
    {
      name: "Välja",
      is_dead: true
    },
    {
      name: "Vuks",
      is_dead: true
    },
    {
      name: "Mell",
      is_dead: false
    }
  ]
};