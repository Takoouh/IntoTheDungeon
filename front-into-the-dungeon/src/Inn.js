import React, { Component, Fragment } from "react"
import { Button } from "reactstrap"
import axios from "axios";


class Inn extends Component {

  componentDidUpdate(prevProps) {
    if (prevProps.adventurer !== this.props.adventurer) {
      axios
        .put('http://localhost:3010/api/adventurer/1', { ...this.props.adventurer })
    }
  }
  askToUseInn(adventurer) {
    if (adventurer.healthPoint < adventurer.maxHp) {
      if (adventurer.gold >= 10) {
        this.props.useInn(this.props.adventurer)
      }
    }
  }

  render() {
    return (
      <Fragment>
        <h1>Welcome to the Inn, Adventurer</h1>
        {this.props.adventurer.healthPoint === this.props.adventurer.maxhp ?
          <Fragment>
            <p>You don't look like you need to rest</p>
          </Fragment>
          :
          <Fragment>
            <p>Do you want to rest for 10 Gold ?</p>
            <Button onClick={() => this.askToUseInn(this.props.adventurer)}>Rest</Button>
          </Fragment>
        }

      </Fragment>
    )
  }
}

export default Inn