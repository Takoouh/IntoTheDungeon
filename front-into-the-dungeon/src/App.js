import React, { Component } from 'react';
import './App.css';
import './navbar.css';
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap"
import ShopContainer from './_containers/ShopContainer';
import StatsContainer from './_containers/StatsContainer';
import FloorChoice from './fight/FloorChoice';



class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="h-100">
          <Col xs="2" className="navBar d-flex align-items-end">
            <Nav className="d-flex w-100 flex-column text-center">
              <NavItem className="my-2">
                <NavLink href="#"><i className="pr-2 fas fa-dungeon"></i>Fight</NavLink>
              </NavItem>
              <NavItem className="my-2">
                <NavLink href="#"><i className="pr-2 fas fa-coins"></i>Shop</NavLink>
              </NavItem>
              <NavItem className="my-2">
                <NavLink href="#"><i className="pr-2 fas fa-beer"></i>Inn</NavLink>
              </NavItem>
              <NavItem className="my-2">
                <NavLink href="#"><i className="pr-2 fas fa-book-dead"></i>Journal</NavLink>
              </NavItem>
              <NavItem className="my-2">
                <NavLink disabled href="#"><i className="pr-2 fas fa-crown"></i>Ranking</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col xs="7 content">
            <FloorChoice />

            {/* <ShopContainer /> */}
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
