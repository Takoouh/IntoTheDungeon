import React, { Component } from 'react';
import './App.css';
import './navbar.css';
import { Route, Switch, Link } from "react-router-dom"
import { Container, Row, Col, Nav, NavItem } from "reactstrap"
import ShopContainer from './_containers/ShopContainer';
import StatsContainer from './_containers/StatsContainer';
import FloorContainer from './_containers/FloorsContainer';



class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="h-100">
          <Col xs="2" className="navBar d-flex align-items-end">



            <Nav className="d-flex w-100 flex-column text-center">
              <NavItem className="my-2">
                <Link to="/"><i className="pr-2 fas fa-dungeon"></i>Fight</Link>
              </NavItem>
              <NavItem className="my-2">
                <Link to="/shop"><i className="pr-2 fas fa-coins"></i>Shop</Link>
              </NavItem>
              <NavItem className="my-2">
                <Link to="#"><i className="pr-2 fas fa-beer"></i>Inn</Link>
              </NavItem>
              <NavItem className="my-2">
                <Link to="#"><i className="pr-2 fas fa-book-dead"></i>Journal</Link>
              </NavItem>
              <NavItem className="my-2">
                <Link disabled to="#"><i className="pr-2 fas fa-crown"></i>Ranking</Link>
              </NavItem>
            </Nav>
          </Col>
          <Col xs="7 content">
            <Switch>
              <Route exact path="/" component={FloorContainer} />
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
