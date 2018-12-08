import React, { Component, Fragment } from "react"
import axios from "axios"

class Stats extends Component {

  componentDidMount() {
    this.props.loadingStats()
    axios.get("http://localhost:3010/api/adventurer")
      .then(res => this.props.adventurerStats(res.data))
      .then(() => this.props.getCurrentFloor(this.props.stats[0].currentFloor))
  }
  render() {

    return (
      <div>
        {this.props.stats[0] ?
          (<Fragment>
            <h2>{this.props.stats[0].name}</h2>
            <p>{this.props.stats[0].gold}<i class="fas fa-coins pl-2"></i></p>
            <p>{this.props.stats[0].level}</p>
            <p>{this.props.stats[0].strength}<i class="fas fa-fist-raised pl-2"></i></p>
            <p>{this.props.stats[0].defense}<i class="fas fa-shield-alt pl-2"></i></p>
          </Fragment>)
          :

          (<div><p className="text-center"><i className="fas fa-cog fa-spin"></i></p></div>)
        }
      </div>
    )
  }

}

export default Stats