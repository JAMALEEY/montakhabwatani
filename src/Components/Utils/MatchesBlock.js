import React, { Component } from 'react'

export default class MatchesBlock extends Component {
  constructor({ props }) {
    super(props);

  }

  render() {
    return (
      <div className='match_block'>
        <div className='match_date'>
          {this.props.match.DateUtc.substr(0, this.props.match.DateUtc.length - 9)}
        </div>
        <div className='match_wrapper'>
          <div className='match_top'>
            <div className='left'>
              <div className='icon' style={{ background: `url(/images/team_icons/${this.props.match.AwayTeam}.png)` }}>
              </div>
              <div className='team_name'>
                {this.props.match.AwayTeam}
              </div>
            </div>
            <div className='right'>
            {this.props.match ? this.props.match.AwayTeamScore : "-"}
            </div>
          </div>
          <div className='match_bottom'>
            <div className='left'>
              <div className='icon' style={{ background: `url(/images/team_icons/${this.props.match.HomeTeam}.png)` }}>
              </div>
              <div className='team_name'>
                {this.props.match.HomeTeam}
              </div>
            </div>
            
            <div className='right'>
              {this.props.match ? this.props.match.HomeTeamScore : "-"}


            </div>
          </div>

        </div>
      </div>
    )
  }
}
