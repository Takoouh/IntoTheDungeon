import React, { Component, Fragment } from 'react';
import './App.css';
import './navbar.css';
import { Route, Switch } from "react-router-dom"
import { Container, Row, Col } from "reactstrap"
import ShopContainer from './_containers/ShopContainer';
import StatsContainer from './_containers/StatsContainer';
import BattleViewContainer from './_containers/BattleViewContainer';
import NavContainer from './_containers/NavContainer';
import InnContainer from './_containers/InnContainer';
import Login from './auth/Login';
import Register from './auth/Register';


class App extends Component {
  render() {
    return (
      <Container fluid>
        {!localStorage.getItem('IntoTheDungeonJwt') ?
          <Login />
          :
          <Fragment>
            <Row className="h-100">
              <Col xs="2" className="navBar d-flex align-items-end">
                <NavContainer />
              </Col>
              <Col xs="7 content">
                <Switch>
                  <Route exact path="/" component={BattleViewContainer} />
                  <Route path="/shop" component={ShopContainer} />
                  <Route path="/inn" component={InnContainer} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                </Switch>
              </Col>
              <Col xs="3 charaStatus">
                <StatsContainer />
              </Col>
            </Row >
          </Fragment>
        }
      </Container>
    );
  }
}

export default App;
