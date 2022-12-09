import React, { Component } from 'react'
import Misc from '../../Utils/Misc'
import Blocks from './Blocks'
export default class MatchesHome extends Component {
    render() {
        return (
            <div className='home_matches_wrapper'>
                <div className='container'>
                    <Misc 
                    bck="rgb(86 4 44)"
                    size="50px"
                    color="#ffffff"
                    link={true} linkTo="/">
                        Matches
                    </Misc>


                    <Blocks>

                    </Blocks>

                    {/* <Misc 
                    bck="#ffffff"
                    size="22px"
                    color="rgb(86 4 44)"
                    link={true} linkTo="/the_team">
                        See more matches
                    </Misc> */}
                </div>
            </div>
        )
    }
}
