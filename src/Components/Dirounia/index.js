import React, { Component } from 'react'
import PromotionAnimation from './Animation'
export default class Promotion extends Component {
  render() {
    return (
      <div className='promotion_wrapper' style={{background:'#ffffff'}}>
      <div className='container'>
        <PromotionAnimation />
      </div>
      </div>
    )
  }
}
