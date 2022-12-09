import React, { Component } from 'react';
import Layout from './HighOrderComponents/Layout';
import { Routes, Route } from 'react-router-dom-v5-compat';
import Home from './Components/Home'
import Team from './Components/Team';
import Notfound from './Components/Utils/Notfound';
export default class Routers extends Component {
  // constructor(props) {
  //   super(props);
  // this.state = {
  // };
  // }

  render() {
    return (
      <Layout>
        <Routes>
          <Route element={<Home />}  path="/" />
          <Route element={<Team />}  path="/the_team" />
          <Route  element={<Notfound />}  path="*"  />

        </Routes>
      </Layout>
    );
  }
}

