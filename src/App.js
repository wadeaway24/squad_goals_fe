import React, {Component} from 'react';
import './App.css';
import TeamTab from './TeamTab';
import NavBar from './NavBar';
import MDSpinner from 'react-md-spinner';
import map from './assets/maps/Narva_Minimap.jpg';
import map_player from './assets/icons/usa_flag_s.png';
import map_player2 from './assets/icons/militia_flag_s.png';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: {},
            mapXmin: 0,
            mapYmin: 0,
            mapXmax: 0,
            mapYmax: 0,
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
            let icon2 = new Image();
            icon2.src = map_player2;
            icon2.onload = () => {
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
                <div className="loaderWrapper">
                    <div className="text">This might take a minute...</div>
                    <div className="smallText">or ten</div>

                    <MDSpinner className="loader" size={80}/>
                </div>
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

        let icon2 = new Image();
        icon2.src = map_player2;

        let team1 = [];
        let team2 = [];

        let generatedNames = [];
        const {mapYmin, mapXmin, mapYmax, mapXmax} = this.state;
        let playerPositions = {};

        // let firstLoad = true;
        for (let obj of this.state.data) {
            // console.log(obj);
            ctx.drawImage(background, 0, 0);
            for (let player of obj.players) {

                if (generatedNames.filter(name => name.playerId === player.playerId).length === 0) {
                    // console.log("Sees");
                    let min = Math.ceil(0);
                    let max = Math.floor(playerNames.length);
                    let randomNr = Math.floor(Math.random() * (max - min)) + min;
                    player.player_name = playerNames[randomNr] + '' + randomNr;
                    generatedNames.push({player_name: player.player_name, playerId: player.playerId});
                } else {
                    player.player_name = generatedNames.filter(name => name.playerId === player.playerId)[0].player_name;
                }

                const xCoord = (player.locationX - mapXmin) * 1000 / (mapXmax - mapXmin);
                const yCoord = (player.locationY - mapYmin) * 1000 / (mapYmax - mapYmin);

                if (!Object.keys(playerPositions).includes(player.playerId)) {
                    if (yCoord > 500) {
                        team1.push(player.player_name);
                    } else {
                        team2.push(player.player_name);
                    }
                }

                playerPositions = {
                    ...playerPositions,
                    [player.playerId]: {xCoord, yCoord, player_name: player.player_name},
                };

                // console.log(player.locationX, xCoord);
            }

            // console.log(playerPositions);

            for (let key in playerPositions) {
                let ply = playerPositions[key];

                // happy drawing from here on
                ctx.font = "15px Arial bold";
                ctx.fillStyle = "red";
                let member1 = team1.filter(name => name === ply.player_name)[0];
                let member2 = team2.filter(name => name === ply.player_name)[0];
                if (member1 || ply.yCoord < 500) {
                    ctx.drawImage(icon, ply.xCoord, ply.yCoord, 22, 16);

                } else if (member2 || ply.yCoord > 500) {
                    ctx.drawImage(icon2, ply.xCoord, ply.yCoord, 22, 16);
                }
                ctx.strokeText(ply.player_name, ply.xCoord - ply.player_name.length - 14, ply.yCoord - 3);
            }

            await this.delay(10);
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
            // console.log(data);

            const x0 = data.gameMap.corner0x;
            const x1 = data.gameMap.corner1x;
            const y0 = data.gameMap.corner0y;
            const y1 = data.gameMap.corner1y;

            this.setState({
                data: data.ticks,
                isLoaded: true,
                mapXmin: x0 > x1 ? x1 : x0,
                mapYmin: y0 > y1 ? y1 : y0,
                mapXmax: x0 > x1 ? x0 : x1,
                mapYmax: y0 > y1 ? y0 : y1,
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

const playerNames = [
    "NinjasInPyjamas",
    "Mistake",
    "SomeTacos",
    "12Nuns",
    "AHungryPolarBear",
    "aDistraction",
    "XBox",
    "ShutDown",
    "RollingBarrelz",
    "Something",
    "AllGoodNamesRGone",
    "Error404",
    "CerealKillah",
    "WarHawk",
    "Kladenstien",
    "Audacity",
    "JackSparrow",
    "RuthlessSlayer",
    "InfernalHeir",
    "TheSilentBang",
    "DarkLord",
    "NoTolerance",
    "DexterzProtege",
    "BeoWulf",
    "LoneWalker",
    "SavageHorseman",
    "GunnerBomb",
    "CapnBloodBeard",
    "LastSamurai",
    "PetalPrincess",
    "FallenAngel",
    "Hraefn",
    "IMTooPrettyToDie",
    "CatWoman",
    "SniperFemme",
    "Zeldarian",
    "CursedWings",
    "IceQueen",
    "SongbirdFatale",
    "LadyPhantom",
    "WarriorPriestess",
    "DeathWish",
    "SeekNDestroy",
    "BegForMercy",
    "ElNino",
    "FreakingOblin",
    "NineTees",
    "EndlessFacepalms",
    "KungFuMonk",
    "BrainAxe",
    "PlzJustDie",
    "Gridlock",
    "AndKeySinister",
    "Chill",
    "AlQaholic",
    "HoofHearted",
    "666Disaster",
    "MasterGhostlyPresence"
];
