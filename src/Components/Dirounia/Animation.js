import React, { Component } from 'react'
import Zoom from 'react-reveal'
import Oualidvocat from '../../Resources/images/players/oualivocat.png'
export default class PromotionAnimation extends Component {
    render() {
        return (
            <div className='promotion_animation'>
                <div className='left' style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "column",
                    alignContent: "center"
                }}>
                    <Zoom>
                        <div>
                            <span style={{ color: "#C22323" }}>ديرو

                            </span>
                            <br></br>
                            <span style={{ color: "#215223" }}>
                                النية
                            </span>

                        </div>
                    </Zoom>
                </div>
                <div className='right'>
                    <Zoom>
                        <div style={{ background: `url(${Oualidvocat}) no-repeat` }}>


                        </div>
                    </Zoom>
                </div>
            </div>
        )
    }
}
