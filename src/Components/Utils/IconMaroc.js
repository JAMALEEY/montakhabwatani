import React, { Component } from 'react';
import { Link } from "react-router-dom-v5-compat";
import malogo from '../../Resources/images/logos/frmflogo.png'

export default class IconMaroc extends Component {
    constructor(props) {
        super(props);

}
         template = <div
            className='img_cover'
            style={{ width: this.props.width, height:  this.props.height, background: `url(${malogo}) no-repeat` }}
        > </div>

render() {
            if (this.props.link) {
                return (
                    <Link to={this.props.linkTo} className="link_logo">
                        {this.template}
                    </Link>
                )
            } else {
                return this.template
            }
    }
}

