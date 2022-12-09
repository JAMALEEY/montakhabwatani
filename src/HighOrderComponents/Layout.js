import React, { Component } from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <h2>
                    <Header></Header>
                    {this.props.children}
                    <Footer></Footer>
                </h2>
            </div>
        );
    }
}

