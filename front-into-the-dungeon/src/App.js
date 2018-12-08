import React, { Component } from 'react';
import './App.css';
import './navbar.css';
import { Route, Switch } from "react-router-dom"
import { Container, Row, Col } from "reactstrap"
import ShopContainer from './_containers/ShopContainer';
import StatsContainer from './_containers/StatsContainer';
import BattleViewContainer from './_containers/BattleViewContainer';
import NavContainer from './_containers/NavContainer';



class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="h-100">
          <Col xs="2" className="navBar d-flex align-items-end">
            <NavContainer />
          </Col>
          <Col xs="7 content">
            <Switch>
              <Route exact path="/" component={BattleViewContainer} />
              <Route path="/shop" component={ShopContainer} />
            </Switch>
          </Col>
          <Col xs="3 charaStatus">
            <StatsContainer />
          </Col>
        </Row >
      </Container>
    );
  }
}

export default App;
