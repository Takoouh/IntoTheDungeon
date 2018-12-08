import React, { Component, Fragment } from "react"
import { Link } from "react-router-dom"
import { Nav, NavItem } from "reactstrap"

class NavComponent extends Component {
  render() {
    return (
      <Fragment>
        <Nav className="d-flex w-100 flex-column text-center">
          <NavItem className="my-2">
            <Link onClick={() => this.props.showFloorList()} to="/"><i className="pr-2 fas fa-dungeon"></i>Fight</Link>
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
      </Fragment>
    )
  }
}

export default NavComponent