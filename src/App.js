import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      left: "0px",
      top: "0px",
      data: [
        {
          "timeStamp": 1500000000,
          "players": [
            {
              "locationX": 813.8579725137873,
              "locationY": 7077.310633531908,
              "player_name": "NQHVR1OSHI"
            }
          ]
        },
        {
          "timeStamp": 1500000500,
          "players": [
            {
              "locationX": 2578.5877725958658,
              "locationY": 1350.2404599513197,
              "player_name": "NQHVR1OSHI"
            }
          ]
        },
        {
          "timeStamp": 1500001000,
          "players": [
            {
              "locationX": 4054.041879346263,
              "locationY": 2214.503565581369,
              "player_name": "NQHVR1OSHI"
            }
          ]
        },
        {
          "timeStamp": 1500001500,
          "players": [
            {
              "locationX": 2162.26969688719,
              "locationY": 171.04614180097545,
              "player_name": "NQHVR1OSHI"
            }
          ]
        },
        {
          "timeStamp": 1500002000,
          "players": [
            {
              "locationX": 2817.895066980134,
              "locationY": 4906.533033670224,
              "player_name": "NQHVR1OSHI"
            }
          ]
        },
        {
          "timeStamp": 1500002500,
          "players": [
            {
              "locationX": 146.99733845831742,
              "locationY": 3763.7589348606093,
              "player_name": "NQHVR1OSHI"
            }
          ]
        },
        {
          "timeStamp": 1500003000,
          "players": [
            {
              "locationX": 2361.433240015315,
              "locationY": 68.81355352963952,
              "player_name": "NQHVR1OSHI"
            }
          ]
        },
        {
          "timeStamp": 1500003500,
          "players": [
            {
              "locationX": 6024.292103452213,
              "locationY": 1550.7328466891681,
              "player_name": "NQHVR1OSHI"
            }
          ]
        },
        {
          "timeStamp": 1500004000,
          "players": [
            {
              "locationX": 3685.0856821175344,
              "locationY": 1562.5934807556625,
              "player_name": "NQHVR1OSHI"
            }
          ]
        },
        {
          "timeStamp": 1500004500,
          "players": [
            {
              "locationX": 3493.1581896577586,
              "locationY": 1078.9058910994959,
              "player_name": "NQHVR1OSHI"
            }
          ]
        }
      ]
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
      <div className="container" style={{backgroundImage: `url(${jpg})`}}>
        <div className="player" style={{left: this.state.left,top: this.state.top}} />
        <button className="start" onClick={this.renderPlayerMovement.bind(this)}>Start</button>
      </div>
    );
  }
}

export default App;