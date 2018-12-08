import React, { Component, Fragment } from "react"
import { Row, Col } from "reactstrap"

class Encounter extends Component {
  render() {
    return (
      <Fragment>
        {this.props.monster[0] ?
          <Fragment>
            <Row>
              <Col xs="12">{this.props.monster[0].name}</Col>
            </Row>
            <Row>
              <Col xs="12"><img src={this.props.monster[0].picture} /></Col>
            </Row>
            <Row>
              <Col xs="4">{this.props.monster[0].healthPoint}</Col>
              <Col xs="4">{this.props.monster[0].strength}</Col>
              <Col xs="4">{this.props.monster[0].defense}</Col>
            </Row>
          </Fragment>
          : ""
        }

      </Fragment>
    )
  }
}

export default Encounter