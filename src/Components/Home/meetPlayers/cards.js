import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

import PlayerCard from '../../Utils/playerCard';
import { firebasePlayers } from '../../../Firebase/Firebase'
import { firebaseLooper } from '../../Utils/FirebaseLooper'



class HomeCards extends Component {

    state = {
        cards:[
            {
                bottom: 90,
                left: 300
            },
            {
                bottom: 60,
                left: 200
            },
            {
                bottom: 30,
                left: 100
            },
            {
                bottom: 0,
                left: 0
            }
        ],
        playersToshow:[
     
        ]
    }

    componentDidMount(){
        firebasePlayers.limitToLast(5).once('value').then((snapshot) => {
            const players = firebaseLooper(snapshot)

            this.setState({
                playersToshow: players
            })
        })
    }

    showAnimateCards = () => (
        this.state.cards.map((card,i)=>(
            <Animate
                key={i}
                show={this.props.show}

                start={{
                    left:0,
                    bottom:0
                }}

                enter={{
                    left: [card.left],
                    bottom: [card.bottom],
                    timing: {duration: 500, ease: easePolyOut}
                }}
            >
                {({ left , bottom })=>{
                    return(
                        <div
                            style={{
                                position: 'absolute',
                                left,
                                bottom
                            }}
                        >
                            <PlayerCard
                                number={ i == 3 ? "01" : this.state.playersToshow[i].number}
                                name={ i == 3 ? "Yassine" : this.state.playersToshow[i].name}
                                lastname={ i == 3 ? "BOUNOU" : this.state.playersToshow[i].lastname}
                                bck={ i == 3 ? "Bounou.png" : this.state.playersToshow[i].image}
                            />
                            
                        </div>
                    )
                }}
            </Animate>
        ))
    )

    render() {
        return (
            <div>
                {this.showAnimateCards()}
            </div>
        );
    }
}

export default HomeCards;