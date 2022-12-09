import React, { Component } from 'react';
import { Link } from "react-router-dom-v5-compat";

export default class Misc extends Component {

    constructor(props) {
        super(props);
    }


    template = <div
        style={
            {
                background: this.props.bck,
                fontSize: this.props.size,
                color: this.props.color,
                padding: '5px 10px',
                display: 'inline-block',
                fontFamily: 'Righteous',
                ...this.props.add
            }}
    >
        {this.props.children}
    </div>
    render() {
        if (this.props.link) {
            return (
                <Link to={this.props.linkTo} >
                    {this.template}
                </Link>
            )
        } else {
            return this.template
        }
    }
}
