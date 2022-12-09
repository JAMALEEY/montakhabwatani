import React, { Component } from 'react';
import PlayerCard from '../Utils/playerCard';
import Fade from 'react-reveal/Fade';

import Stripes from '../../Resources/images/stripes.png';
import { firebasePlayers } from '../../Firebase/Firebase';
import { firebaseLooper } from '../Utils/FirebaseLooper';
import { Promise } from 'core-js';
  
class Team extends Component {

    state = {
        loading:true,
        players:[]
    }

    componentDidMount(){
        firebasePlayers.once('value').then(snapshot =>{
            const players = firebaseLooper(snapshot);
            let promises = [];
            
            // for(let key in players){
            //     promises.push(
            //         new Promise((resolve,reject)=>{
            //             firebase.storage().ref('players')
            //             .child(players[key].image).getDownloadURL()
            //             .then( url => {
            //                 players[key].url = url;
            //                 resolve();
            //             })
            //         })
            //     )
            // }

            // Promise.all(promises).then(()=>{
                this.setState({
                    players,
                    loading: false
                })
            // })



        })
    }

    showplayersByCategory = (category) => (
        this.state.players ?
            this.state.players.map((player,i)=>{

                return player.position === category ?
                    <Fade left delay={i*20} key={i}>
                        <div className="item">
                            <PlayerCard
                                name={player.name}
                                number={player.number}
                                lastname={player.lastname}
                                bck={ player.image == "bounou.png" ? "Bounou.png" : player.image}
                            />
                        </div>
                    </Fade>
                :null
            })
        :null
    )


    render() {
        return (
            <div className="the_team_container"
                style={{
                    background:`url(${Stripes}) repeat`
                }}
            >
                { !this.state.loading ?
                    <div>
                        <div className="team_category_wrapper">
                            <div className="title">Keepers</div>
                            <div className="team_cards">
                                {this.showplayersByCategory('Keeper')}
                            </div>
                        </div>

                        <div className="team_category_wrapper">
                            <div className="title">Defence</div>
                            <div className="team_cards">
                                {this.showplayersByCategory('Defence')}
                            </div>
                        </div>

                        <div className="team_category_wrapper">
                            <div className="title">Midfield</div>
                            <div className="team_cards">
                                {this.showplayersByCategory('Midfield')}
                            </div>
                        </div>
                        <div className="team_category_wrapper">
                            <div className="title">Forward</div>
                            <div className="team_cards">
                                {this.showplayersByCategory('Forward')}
                            </div>
                        </div>
                        <div className="team_category_wrapper">
                            <div className="title">Coach</div>
                            <div className="team_cards">
                                {this.showplayersByCategory('Coach')}
                            </div>
                        </div>


                    </div>
                    :null
                }
                
            </div>
        );
    }
}

export default Team;