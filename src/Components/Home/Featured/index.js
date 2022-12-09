import React, { Component } from 'react'
import Stripes from './Stripes';
import Text from './Text'
export default class Featured extends Component {
  render() {
    return (
     <div className='featured_wrapper'>
        <Stripes />
        <Text />
     </div>
    );
  };
}  

