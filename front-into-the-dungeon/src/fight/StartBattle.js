import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";

class StartBattle extends Component {
  render() {
    return (
      <Fragment>
        <Button onClick={() => this.props.showFloorList()}>Change Floor</Button>
        <Button>Start</Button>
      </Fragment>
    )
  }
}

export default StartBattle