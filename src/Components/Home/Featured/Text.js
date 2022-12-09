import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';

import FeaturedTeam from '../../../Resources/images/rala.png'

class Text extends Component {

    animateFirst = () => (
        <Animate
            show={true}
            start={{
                opacity: 0,
                x: 503,
                y: 450
            }}
            enter={{
                opacity: [1],
                x: [211],
                y: [386],
                timing: { duration: 500, ease: easePolyOut }
            }}
        >
            {({ opacity, x, y }) => {
                return (
                    <div className="featured_first"
                        style={{
                            opacity,
                            transform: `translate(${x}px,${y}px)`
                        }}
                    >
                        FIFA World Cup 2022
                    </div>
                )
            }}
        </Animate>
    )

    animateSecond = () => (
        <Animate
            show={true}
            start={{
                opacity: 0,
                x: 503,
                y: 586
            }}
            enter={{
                opacity: [1],
                x: [211],
                y: [535],
                timing: { delay: 300, duration: 500, ease: easePolyOut }
            }}
        >
            {({ opacity, x, y }) => {
                return (
                    <div className="featured_second"
                        style={{
                            opacity,
                            transform: `translate(${x}px,${y}px)`
                        }}
                    >
                        History Made !!!
                    </div>
                )
            }}
        </Animate>
    )

    animatePlayer = () => (
        <Animate
            show={true}
            start={{
                opacity: 0,
            }}
            enter={{
                opacity: [1],
                timing: { delay: 900, duration: 510, ease: easePolyOut }
            }}
        >
            {({ opacity }) => {
                return (
                    <div className="featured_player"
                        style={{
                            opacity,
                            width: '855px',
                            height: '528px',
                            background: `url(${FeaturedTeam})`,
                            transform: `translate(212px, 13px)`
                        }}
                    >
                    </div>
                )
            }}
        </Animate>
    )

    render() {
        return (
            <div className="featured_text">
                {this.animatePlayer()}
                {this.animateFirst()}
                {this.animateSecond()}

            </div>
        );
    }
}

export default Text;