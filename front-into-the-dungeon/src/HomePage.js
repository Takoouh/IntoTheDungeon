import React from "react"
import "./HomePage.css"
import { Row, Col, Nav, NavItem, NavLink } from "reactstrap"

const HomePage = () => {
  return (
    <Row className="h-100 d-flex align-items-stretch">
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
        <p>BattleScene</p>
      </Col>
      <Col xs="3 charaStatus">
      </Col>
    </Row >
  )
}

export default HomePage