import React, { Component } from 'react';
import './App.css';
import Shop from './Shop';
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap"

class App extends Component {
  render() {
    return (
      <Container fluid><Row className="h-100 d-flex align-items-stretch">
        <Col xs="3" className="navBar">
          <Nav>
            <NavItem>
              <NavLink href="#">Fight</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Shop</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Inn</NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled href="#">Ranking</NavLink>
            </NavItem>
          </Nav>
        </Col>
        <Col xs="6">
          <Shop />
        </Col>
        <Col xs="3 charaStatus">
        </Col>
      </Row >
      </Container>
    );
  }
}

export default App;
