import React, { Component, Fragment } from "react"
import { Link } from "react-router-dom"
import { Nav, NavItem } from "reactstrap"

class NavComponent extends Component {

  disconnect() {
    localStorage.removeItem("IntoTheDungeonJwt")
  }

  render() {
    return (
      <Fragment>
        <Nav className="w-100 flex-column text-left px-2">
          <NavItem className="my-2">
            <Link onClick={() => this.props.showFloorList()} to="/"><i className="px-2 fas fa-dungeon"></i>{this.props.collapsed ? "Fight" : ""}</Link>
          </NavItem>
          <NavItem className="my-2">
            <Link to="/shop"><i className="px-2 fas fa-coins"></i>{this.props.collapsed ? "Shop" : ""}</Link>
          </NavItem>
          <NavItem className="my-2">
            <Link to="/inn"><i className="px-2 fas fa-beer"></i>{this.props.collapsed ? "Inn" : ""}</Link>
          </NavItem>
          <NavItem className="my-2">
            <Link to="#"><i className="px-2 fas fa-book-dead"></i>{this.props.collapsed ? "Journal" : ""}</Link>
          </NavItem>
          <NavItem className="my-2">
            <Link disabled to="#"><i className="px-2 fas fa-crown"></i>{this.props.collapsed ? "Ranking" : ""}</Link>
          </NavItem>
          <NavItem className="my-2">
            <Link disabled to="#" onClick={() => this.disconnect()}><i className="px-2 fas fa-sign-out-alt"></i>{this.props.collapsed ? "Log off" : ""}</Link>
          </NavItem>
        </Nav>
      </Fragment>
    )
  }
}

export default NavComponent