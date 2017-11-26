import React, {Component} from 'react';
import './App.css';
import TeamTab from './TeamTab';
import NavBar from './NavBar';
import MDSpinner from 'react-md-spinner';
import map from './assets/maps/Narva_Minimap.jpg';
import map_player from './assets/icons/usa_flag_s.png';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: {},
            mapXlen: 0,
            mapYlen: 0,
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
            let icon = new Image();
            icon.src = map_player;
            icon.onload = () => {
            }
        }

    }

    renderNewGameRecap(e) {
        e.preventDefault();
        console.log("Inserted value:" + this.refs.match_id.value);
        console.log("you just pushed the BUTTON");
    }

    render() {
        const {isLoaded} = this.state;

        if (!isLoaded) {
            return (
                <MDSpinner/>
            );
        }

        return (
            <div>
                <NavBar/>
                <form className="navbar-form center" onSubmit={this.renderNewGameRecap.bind(this)}>
                    <div className="form-group">
                        <input type="text" className="form-control" ref="match_id" placeholder="Insert Match ID"/>
                    </div>
                    <button className="btn btn-default" button="submit">Find Recap</button>
                    <button className="start" onClick={this.handleStartClick.bind(this)}>Start</button>
                </form>
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
        let icon = new Image();
        icon.src = map_player;

        const { mapYlen, mapXlen } = this.state;

        for (let obj of this.state.data) {

            console.log(obj);
            ctx.drawImage(background, 0, 0);
            for (let player of obj.players) {
                const xCoord = 1000 * player.locationX / mapXlen;
                const yCoord = 1000 * player.locationY / mapYlen;

                // happy drawing from here on
                ctx.font = "15px Arial bold";
                ctx.fillStyle = "red";
                // ctx.strokeText(player.player_name, player.locationX - player.player_name.length - 14, player.locationY - 3);

                ctx.drawImage(icon, xCoord, yCoord, 22, 16);

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
            response = await fetch('http://localhost:8080/api/gameSession/getData/37575701', {
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

            const x0 = data.gameMap.corner0x;
            const x1 = data.gameMap.corner1x;
            const y0 = data.gameMap.corner0y;
            const y1 = data.gameMap.corner1y;

            this.setState({
                data: data.ticks,
                isLoaded: true,
                mapXlen: x0 > x1 ? x0 - x1 : x1 - x0,
                mapYlen: y0 > y1 ? y0 - y1 : y1 - y0,
            });
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