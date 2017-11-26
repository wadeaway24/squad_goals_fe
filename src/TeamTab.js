import React, { Component } from 'react';
import skull from './assets/icons/skull.png';

class TeamTab extends Component {

  renderTeamMembers(players) {
    return players.map((player, i) => {
      return (
        <tr key={i}>
          <td><h4 key={i}>{player.name}</h4></td>
          <td>{player.is_dead ? <img src={ skull } className="skull" alt=""/>: <i className="fa fa-check" />}</td>
        </tr>
        )
      })

  }

  render() {
    return (
      <div className="team-tab">
        <h2>Team:</h2>
        <table>
          <tbody>
          <tr>
            <td><div className="data-column">Name</div></td>
            <td><div className="data-column">Alive</div></td>
          </tr>
          {this.renderTeamMembers(this.props.team.players)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default TeamTab;