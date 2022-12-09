import React, { Component } from 'react'
import Featured from './Featured'
import MatchesHome from './Matches'
import MeetPlayers from './meetPlayers'
import Promotion from '../Dirounia'
export default class Home extends Component {
  render() {
    return (
      <div className='bck_blue'>
        <Featured />
        <MatchesHome />
        <MeetPlayers></MeetPlayers>
        <Promotion />
      </div>
    )
  }
}
