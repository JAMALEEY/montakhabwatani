import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
import { Link } from "react-router-dom-v5-compat";
import { Button } from '@mui/material';
import IconMaroc from '../Utils/IconMaroc';

export default class Header extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     };
    // }

    render() {
        return (
            <AppBar position="fixed"
                style={{
                    backgroundColor: '#56042C',
                    boxShadow: 'none',
                    padding: '10px 0px',
                    borderBottom: '2px solid #215223'
                }}
            >
                <Toolbar style={{ display: 'flex' }}>
                    <div style={{ flexGrow: 1 }} >
                        <div className='header_logo'>
                            <IconMaroc link={true} linkTo="/" width="70px" height="70px" />

                        </div>

                    </div>
                    <Link to={'/the_team'}>
                        <Button color='inherit'>THE TEAM</Button>
                    </Link>
                    {/* <Button color='inherit'>THE MATCHES</Button>

                    <Link to={'/the_matches'}>

                    </Link> */}


                </Toolbar>
            </AppBar>
        );
    }
}

