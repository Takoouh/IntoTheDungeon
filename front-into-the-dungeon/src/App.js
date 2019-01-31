import React, { Component } from 'react';
import { Container } from "reactstrap"
import Auth from './auth/Auth';

import './App.scss';
import MainFrame from './MainFrame';

class App extends Component {
  render() {
    return (
      <Container fluid>

        {!localStorage.getItem('IntoTheDungeonJwt') ?
          <Auth />
          :
          <MainFrame />
        }

      </Container >
    );
  }
}

export default App;
