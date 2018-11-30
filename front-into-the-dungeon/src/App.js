import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage';
import { Container } from "reactstrap"

class App extends Component {
  render() {
    return (
      <Container fluid>
        <HomePage />
      </Container>
    );
  }
}

export default App;
