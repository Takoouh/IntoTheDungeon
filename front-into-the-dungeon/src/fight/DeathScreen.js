import React, { Component, Fragment } from "react"
import { Row, Col, Button } from "reactstrap"

class DeathScreen extends Component {

  reincarnate(adventurer) {
    this.props.getKilled(adventurer)
    this.props.showFloorList()
    this.props.getFloorList(this.props.adventurer.currentFloor)
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Col xs="12">
            <h2>You died</h2>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <Button onClick={() => this.reincarnate(this.props.adventurer)}>Reincarnate ?</Button>
          </Col>
        </Row>
      </Fragment>
    )
  }
}

export default DeathScreen