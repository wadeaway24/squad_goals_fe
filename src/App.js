import React, { Component } from 'react';
import './App.css';
import TeamTab from './TeamTab';
import NavBar from './NavBar';
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
        const c = this.myCanvas;
        const ctx = c.getContext('2d');
        let background = new Image();
        background.src = map;
        background.onload = () => {
            ctx.drawImage(background, 0, 0);
        }
    }

    render() {
        return (
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
        );
    };

    handleStartClick() {
        this.loopCanvas(this.myCanvas);
    }

    async loopCanvas(c) {
        const ctx = c.getContext('2d');
        let background = new Image();
        background.src = map;

        for (let obj of data) {

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
}

const data = [
    {
        "timeStamp": 1500000000,
        "players": [
            {
                "locationX": 62.083438685876466,
                "locationY": 940.5925831879825,
                "player_name": "JQ3D3J7V0K"
            },
            {
                "locationX": 330.93412919203644,
                "locationY": 7.3827790437253045,
                "player_name": "TUA0AZ1ZFU"
            },
            {
                "locationX": 190.1943979692065,
                "locationY": 21.890230361807177,
                "player_name": "81QWV8B1UD"
            },
            {
                "locationX": 575.5746060547822,
                "locationY": 17.987698891147115,
                "player_name": "PJJB2PUWLC"
            },
            {
                "locationX": 95.5514453883801,
                "locationY": 4.3511917237200315,
                "player_name": "2KO59AQ9KJ"
            },
            {
                "locationX": 416.99067724910395,
                "locationY": 49.92259454377015,
                "player_name": "IWQX4N17R9"
            },
            {
                "locationX": 130.84440775622141,
                "locationY": 118.92216338745796,
                "player_name": "3OAR8U2JRZ"
            },
            {
                "locationX": 224.23312541761752,
                "locationY": 326.5467445867126,
                "player_name": "JRGRNX2DJT"
            },
            {
                "locationX": 340.02211958783585,
                "locationY": 169.09695387677152,
                "player_name": "XRQA4B4NSJ"
            },
            {
                "locationX": 53.016483711922874,
                "locationY": 191.33456022654792,
                "player_name": "5U2TVG99UL"
            }
        ]
    },
    {
        "timeStamp": 1500000500,
        "players": [
            {
                "locationX": 214.7068483835634,
                "locationY": 151.0010964827596,
                "player_name": "JQ3D3J7V0K"
            },
            {
                "locationX": 373.28027553617125,
                "locationY": 522.1798526154903,
                "player_name": "TUA0AZ1ZFU"
            },
            {
                "locationX": 0.31972573934934523,
                "locationY": 138.14002881307616,
                "player_name": "81QWV8B1UD"
            },
            {
                "locationX": 86.91277120919685,
                "locationY": 333.8686213328745,
                "player_name": "PJJB2PUWLC"
            },
            {
                "locationX": 540.8002369013407,
                "locationY": 173.70401542895914,
                "player_name": "2KO59AQ9KJ"
            },
            {
                "locationX": 1.5680676492726981,
                "locationY": 152.2023929808627,
                "player_name": "IWQX4N17R9"
            },
            {
                "locationX": 333.28602318661956,
                "locationY": 215.79560341000843,
                "player_name": "3OAR8U2JRZ"
            },
            {
                "locationX": 187.50361839265287,
                "locationY": 113.40620338202797,
                "player_name": "JRGRNX2DJT"
            },
            {
                "locationX": 446.7690108567061,
                "locationY": 65.1635813396017,
                "player_name": "XRQA4B4NSJ"
            },
            {
                "locationX": 575.3219080161407,
                "locationY": 13.405354079216906,
                "player_name": "5U2TVG99UL"
            }
        ]
    },
    {
        "timeStamp": 1500001000,
        "players": [
            {
                "locationX": 328.31643582584627,
                "locationY": 82.81718332781891,
                "player_name": "JQ3D3J7V0K"
            },
            {
                "locationX": 380.4101438453217,
                "locationY": 22.82698894338903,
                "player_name": "TUA0AZ1ZFU"
            },
            {
                "locationX": 518.0959141971005,
                "locationY": 49.83833182233029,
                "player_name": "81QWV8B1UD"
            },
            {
                "locationX": 208.68435406216307,
                "locationY": 495.44566386831895,
                "player_name": "PJJB2PUWLC"
            },
            {
                "locationX": 77.37602631387196,
                "locationY": 549.015844094173,
                "player_name": "2KO59AQ9KJ"
            },
            {
                "locationX": 3.510827759194716,
                "locationY": 236.41435845408853,
                "player_name": "IWQX4N17R9"
            },
            {
                "locationX": 159.3545270895646,
                "locationY": 409.60414362630104,
                "player_name": "3OAR8U2JRZ"
            },
            {
                "locationX": 4.523594207626477,
                "locationY": 2.1224502443087356,
                "player_name": "JRGRNX2DJT"
            },
            {
                "locationX": 28.75016316254555,
                "locationY": 258.9743779408811,
                "player_name": "XRQA4B4NSJ"
            },
            {
                "locationX": 124.62583778873905,
                "locationY": 308.1952469513033,
                "player_name": "5U2TVG99UL"
            }
        ]
    },
    {
        "timeStamp": 1500001500,
        "players": [
            {
                "locationX": 255.56284756209772,
                "locationY": 24.00273585939019,
                "player_name": "JQ3D3J7V0K"
            },
            {
                "locationX": 151.42544551931292,
                "locationY": 398.2299369726663,
                "player_name": "TUA0AZ1ZFU"
            },
            {
                "locationX": 340.6981210292639,
                "locationY": 4.8442029201469525,
                "player_name": "81QWV8B1UD"
            },
            {
                "locationX": 57.14108225947961,
                "locationY": 67.13896172425315,
                "player_name": "PJJB2PUWLC"
            },
            {
                "locationX": 224.47400460722824,
                "locationY": 248.66207530007003,
                "player_name": "2KO59AQ9KJ"
            },
            {
                "locationX": 35.817221361415726,
                "locationY": 606.5954877705168,
                "player_name": "IWQX4N17R9"
            },
            {
                "locationX": 849.2950884840192,
                "locationY": 21.153855578753188,
                "player_name": "3OAR8U2JRZ"
            },
            {
                "locationX": 68.20862307708877,
                "locationY": 125.38884421872255,
                "player_name": "JRGRNX2DJT"
            },
            {
                "locationX": 509.20110168436645,
                "locationY": 636.1586929417239,
                "player_name": "XRQA4B4NSJ"
            },
            {
                "locationX": 514.8452510563782,
                "locationY": 233.9242050531025,
                "player_name": "5U2TVG99UL"
            }
        ]
    },
    {
        "timeStamp": 1500002000,
        "players": [
            {
                "locationX": 509.5083689509663,
                "locationY": 18.919445543949816,
                "player_name": "JQ3D3J7V0K"
            },
            {
                "locationX": 111.66111760859316,
                "locationY": 159.99007570541892,
                "player_name": "TUA0AZ1ZFU"
            },
            {
                "locationX": 688.7417282411797,
                "locationY": 13.53511352312021,
                "player_name": "81QWV8B1UD"
            },
            {
                "locationX": 152.12071753451642,
                "locationY": 363.407735056269,
                "player_name": "PJJB2PUWLC"
            },
            {
                "locationX": 247.86402708433673,
                "locationY": 144.73045042733153,
                "player_name": "2KO59AQ9KJ"
            },
            {
                "locationX": 2.786432902597052,
                "locationY": 299.43944380036675,
                "player_name": "IWQX4N17R9"
            },
            {
                "locationX": 289.293322121951,
                "locationY": 33.496913515938594,
                "player_name": "3OAR8U2JRZ"
            },
            {
                "locationX": 175.70739720440162,
                "locationY": 44.75152001671147,
                "player_name": "JRGRNX2DJT"
            },
            {
                "locationX": 91.00092130215974,
                "locationY": 399.5703335944764,
                "player_name": "XRQA4B4NSJ"
            },
            {
                "locationX": 611.0856547484834,
                "locationY": 26.068072921542385,
                "player_name": "5U2TVG99UL"
            }
        ]
    },
    {
        "timeStamp": 1500002500,
        "players": [
            {
                "locationX": 115.32072196265526,
                "locationY": 53.98110676738546,
                "player_name": "JQ3D3J7V0K"
            },
            {
                "locationX": 308.7996928820385,
                "locationY": 42.177147143331034,
                "player_name": "TUA0AZ1ZFU"
            },
            {
                "locationX": 6.399397283670108,
                "locationY": 808.6142758828134,
                "player_name": "81QWV8B1UD"
            },
            {
                "locationX": 193.7081710968288,
                "locationY": 386.2150382647784,
                "player_name": "PJJB2PUWLC"
            },
            {
                "locationX": 201.11057139934806,
                "locationY": 102.2817277621912,
                "player_name": "2KO59AQ9KJ"
            },
            {
                "locationX": 351.8540887749334,
                "locationY": 11.421113535981872,
                "player_name": "IWQX4N17R9"
            },
            {
                "locationX": 192.718790343645,
                "locationY": 351.3751496306858,
                "player_name": "3OAR8U2JRZ"
            },
            {
                "locationX": 557.5130565601389,
                "locationY": 512.5765011965078,
                "player_name": "JRGRNX2DJT"
            },
            {
                "locationX": 135.4116118571637,
                "locationY": 17.874895311515292,
                "player_name": "XRQA4B4NSJ"
            },
            {
                "locationX": 98.861414751944,
                "locationY": 175.53412983024893,
                "player_name": "5U2TVG99UL"
            }
        ]
    },
    {
        "timeStamp": 1500003000,
        "players": [
            {
                "locationX": 4.9197052288736955,
                "locationY": 64.42177504280917,
                "player_name": "JQ3D3J7V0K"
            },
            {
                "locationX": 285.3565790917455,
                "locationY": 140.0395323093638,
                "player_name": "TUA0AZ1ZFU"
            },
            {
                "locationX": 670.3492199629292,
                "locationY": 504.28844045454025,
                "player_name": "81QWV8B1UD"
            },
            {
                "locationX": 112.56168900644,
                "locationY": 402.16724784563655,
                "player_name": "PJJB2PUWLC"
            },
            {
                "locationX": 1.2296320361813198,
                "locationY": 421.50872512680576,
                "player_name": "2KO59AQ9KJ"
            },
            {
                "locationX": 132.88304866557266,
                "locationY": 189.90143232410412,
                "player_name": "IWQX4N17R9"
            },
            {
                "locationX": 44.99508252771518,
                "locationY": 519.3733840220746,
                "player_name": "3OAR8U2JRZ"
            },
            {
                "locationX": 213.1383591865291,
                "locationY": 66.02268924826897,
                "player_name": "JRGRNX2DJT"
            },
            {
                "locationX": 341.8694107672933,
                "locationY": 43.3689656856692,
                "player_name": "XRQA4B4NSJ"
            },
            {
                "locationX": 158.19203992806712,
                "locationY": 151.4232981366488,
                "player_name": "5U2TVG99UL"
            }
        ]
    },
    {
        "timeStamp": 1500003500,
        "players": [
            {
                "locationX": 68.8880864724528,
                "locationY": 299.3410466988598,
                "player_name": "JQ3D3J7V0K"
            },
            {
                "locationX": 799.9519704435648,
                "locationY": 149.97595496590264,
                "player_name": "TUA0AZ1ZFU"
            },
            {
                "locationX": 83.7278929731095,
                "locationY": 288.4251395141444,
                "player_name": "81QWV8B1UD"
            },
            {
                "locationX": 591.1691438614426,
                "locationY": 323.1835787280461,
                "player_name": "PJJB2PUWLC"
            },
            {
                "locationX": 187.48263715443727,
                "locationY": 254.3461039424006,
                "player_name": "2KO59AQ9KJ"
            },
            {
                "locationX": 4.267369299353536,
                "locationY": 35.64154553619496,
                "player_name": "IWQX4N17R9"
            },
            {
                "locationX": 267.52689006710875,
                "locationY": 301.357806225631,
                "player_name": "3OAR8U2JRZ"
            },
            {
                "locationX": 1.0872824660594347,
                "locationY": 161.89405076412595,
                "player_name": "JRGRNX2DJT"
            },
            {
                "locationX": 143.18365862155696,
                "locationY": 153.66573270830403,
                "player_name": "XRQA4B4NSJ"
            },
            {
                "locationX": 21.21630302357188,
                "locationY": 584.2844493709357,
                "player_name": "5U2TVG99UL"
            }
        ]
    },
    {
        "timeStamp": 1500004000,
        "players": [
            {
                "locationX": 99.13398121021294,
                "locationY": 69.84837063545774,
                "player_name": "JQ3D3J7V0K"
            },
            {
                "locationX": 148.39923355801028,
                "locationY": 16.210278180114212,
                "player_name": "TUA0AZ1ZFU"
            },
            {
                "locationX": 402.01744633881196,
                "locationY": 146.96167518458586,
                "player_name": "81QWV8B1UD"
            },
            {
                "locationX": 812.3710792939486,
                "locationY": 318.73577035072464,
                "player_name": "PJJB2PUWLC"
            },
            {
                "locationX": 880.1647338249302,
                "locationY": 242.05667994588256,
                "player_name": "2KO59AQ9KJ"
            },
            {
                "locationX": 30.833050153804294,
                "locationY": 438.375195588298,
                "player_name": "IWQX4N17R9"
            },
            {
                "locationX": 561.5471183883288,
                "locationY": 552.6789883235431,
                "player_name": "3OAR8U2JRZ"
            },
            {
                "locationX": 272.9436406832626,
                "locationY": 377.0570576274006,
                "player_name": "JRGRNX2DJT"
            },
            {
                "locationX": 905.6950956216896,
                "locationY": 37.703503595042044,
                "player_name": "XRQA4B4NSJ"
            },
            {
                "locationX": 161.15044324365772,
                "locationY": 572.6132961224702,
                "player_name": "5U2TVG99UL"
            }
        ]
    },
    {
        "timeStamp": 1500004500,
        "players": [
            {
                "locationX": 35.874311595769434,
                "locationY": 39.66512498300705,
                "player_name": "JQ3D3J7V0K"
            },
            {
                "locationX": 182.73985781633556,
                "locationY": 107.7985441489084,
                "player_name": "TUA0AZ1ZFU"
            },
            {
                "locationX": 110.40811459340853,
                "locationY": 180.88807925063347,
                "player_name": "81QWV8B1UD"
            },
            {
                "locationX": 526.1974902221265,
                "locationY": 61.588959018051355,
                "player_name": "PJJB2PUWLC"
            },
            {
                "locationX": 363.4327435399834,
                "locationY": 247.3845035900697,
                "player_name": "2KO59AQ9KJ"
            },
            {
                "locationX": 84.33886441698561,
                "locationY": 218.5359502676878,
                "player_name": "IWQX4N17R9"
            },
            {
                "locationX": 191.40130054512647,
                "locationY": 145.06713969960106,
                "player_name": "3OAR8U2JRZ"
            },
            {
                "locationX": 848.2667302302496,
                "locationY": 178.3359543656648,
                "player_name": "JRGRNX2DJT"
            },
            {
                "locationX": 323.06682864557274,
                "locationY": 52.85837752741848,
                "player_name": "XRQA4B4NSJ"
            },
            {
                "locationX": 259.2782594867221,
                "locationY": 54.070497751547386,
                "player_name": "5U2TVG99UL"
            }
        ]
    }
]

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