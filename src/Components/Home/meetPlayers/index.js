import React, { Component } from 'react';
import Stripes from '../../../Resources/images/stripes.png';
import Misc from '../../Utils/Misc';
import Reveal from 'react-reveal/Reveal';
import HomeCards from './cards';
import { Link } from "react-router-dom-v5-compat";


class MeetPlayers extends Component {

    state = {
        show:false
    }

    render() {
        return (
            <Reveal
                fraction={0.7}
                onReveal={()=>{
                    this.setState({
                        show:true
                    })
                }}
            >
                <div className="home_meetplayers"
                    style={{ background: `#ffffff url(${Stripes})` }}
                >
                    <div className="container">
                        <div className="home_meetplayers_wrapper">
                            <div className="home_card_wrapper">
                                <HomeCards
                                    show={this.state.show}
                                />
                            </div>
                            <div className="home_text_wrapper">
                                <div>
                                    <Misc bck="#215223" size="100px" color="#ffffff" add={{
                                        display: 'inline-block',
                                        marginBottom: '20px',
                                    }}>
                                        Meet
                                </Misc>
                                </div>
                                <div>
                                    <Misc bck="#215223" size="100px" color="#ffffff" add={{
                                        display: 'inline-block',
                                        marginBottom: '20px',
                                    }}>
                                        The
                                </Misc>
                                </div>
                                <div>
                                    <Misc bck="#215223" size="100px" color="#ffffff" add={{
                                        display: 'inline-block',
                                        marginBottom: '20px',
                                    }}  >
                                        Lions
                                </Misc>
                                </div>
                                <div>
                                    <Misc
                                        bck="#ffffff"
                                        size="27px"
                                        color="#215223"
                                        link={true}
                                        linkto="/the_team"
                                        add={{
                                            display: 'inline-block',
                                            marginBottom: '27px',
                                            border: '1px solid #0e1731'
                                        }}
                                    >
                                    <Link to={'/the_team'}>

                                        Lion Walk Here &#x1F446;
                                    </Link>
                                </Misc>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Reveal>

        );
    }
}

export default MeetPlayers;