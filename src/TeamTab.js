import React, { Component } from 'react';

class TeamTab extends Component {

  renderTeamMembers(players) {
    return players.map((player, i) => {
      return (
        <tr key={i}>
          <td><h4 key={i}>{player.name}</h4></td>
          <td>{player.is_dead ? <i className="fa fa-wheelchair" />: <i className="fa fa-check" />}</td>
        </tr>
        )
      })

  }

  render() {
    return (
      <div className="team-tab">
        <h2>{this.props.team.name}:</h2>
        <table>
          <tbody>
          <tr>
            <td><div className="data-column">Name</div></td>
            <td><div className="data-column">Bueno?</div></td>
          </tr>
          {this.renderTeamMembers(this.props.team.players)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default TeamTab;