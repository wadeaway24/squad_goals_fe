import React, { Component } from 'react';
import './App.css';
import TeamTab from './TeamTab';
import NavBar from './NavBar';
import MDSpinner from 'react-md-spinner';
import map from './assets/maps/Narva_Minimap.jpg';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: {},
        }
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate() {
        if (this.myCanvas) {
            const c = this.myCanvas;
            const ctx = c.getContext('2d');
            let background = new Image();
            background.src = map;
            background.onload = () => {
                ctx.drawImage(background, 0, 0);
            }
        }
    }

    render() {
        const {isLoaded} = this.state;

        if (!isLoaded) {
            return (
                <MDSpinner />
            );
        }

        return (
          <div>
              <NavBar/>
              <div className="game-play">
                  <TeamTab team={names1}/>
                  <div className="container">
                      <canvas
                        ref={c => {
                          this.myCanvas = c;
                        }}
                        className="canvas"
                        width="1000"
                        height="1000"/>
                      <button className="start" onClick={this.handleStartClick.bind(this)}>Start</button>
                  </div>
                  <TeamTab team={names2}/>
              </div>
          </div>
        );
    };

    handleStartClick() {
        this.loopCanvas(this.myCanvas);
    }

    async loopCanvas(c) {
        const ctx = c.getContext('2d');
        let background = new Image();
        background.src = map;

        for (let obj of this.state.data) {

            ctx.drawImage(background, 0, 0);
            for (let player of obj.players) {

                // happy drawing from here on
                ctx.fillStyle = 'blue';
                ctx.fillRect(player.locationX, player.locationY, 15, 15);
            }
            await this.delay(300);
        }
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async loadData() {
        let response;
        let data;
        try {
            response = await fetch('http://localhost:8080/api/mock/getData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: '',
            });
            data = await response.json();
        } catch (e) {
            console.log(e)
        } finally {
            console.log(data);
            this.setState({ data: data.ticks, isLoaded: true });
        }
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