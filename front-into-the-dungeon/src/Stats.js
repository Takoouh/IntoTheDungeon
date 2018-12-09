import React, { Component, Fragment } from "react"
import { Progress } from "reactstrap"
import axios from "axios"

class Stats extends Component {

  checkIfDead() {
    if (this.props.adventurer.healthPoint === 0) { this.props.viewdeathScreen() }
  }

  componentDidMount() {
    this.props.loadingStats()
    axios.get("http://localhost:3010/api/adventurer")
      .then(res => this.props.adventurerStats(res.data))
      .then(() => this.props.getCurrentFloor(this.props.adventurer.currentFloor))
  }
  render() {

    return (
      <div>
        {this.props.adventurer ?
          (<Fragment>
            <h2>{this.props.adventurer.name}</h2>
            <p>{this.props.adventurer.gold}<i className="fas fa-coins pl-2"></i></p>
            <p>{this.props.adventurer.level}</p>
            <p onChange={() => this.checkIfDead()} className="text-center">{this.props.adventurer.healthPoint} / {this.props.adventurer.maxHp}</p>
            <Progress color={((this.props.adventurer.healthPoint / this.props.adventurer.maxHp) * 100) > 25 ? "success" : "danger"} value={(this.props.adventurer.healthPoint / this.props.adventurer.maxHp) * 100} />
            <p>{this.props.adventurer.strength}<i className="fas fa-fist-raised pl-2"></i></p>
            <p>{this.props.adventurer.defense}<i className="fas fa-shield-alt pl-2"></i></p>
          </Fragment>)
          :

          (<div><p className="text-center"><i className="fas fa-cog fa-spin"></i></p></div>)
        }
      </div>
    )
  }

}

export default Stats