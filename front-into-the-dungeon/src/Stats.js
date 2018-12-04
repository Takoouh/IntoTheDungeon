import React, { Component } from "react"
import axios from "axios"

class Stats extends Component {

  componentDidMount() {
    this.props.loadingStats()
    axios.get("http://localhost:3010/api/adventurer")
      .then(res => this.props.adventurerStats(res.data))
  }
  render() {

    return (
      <div>
        {this.props.isLoadingStats ?
          (<div><p className="text-center"><i className="fas fa-cog fa-spin"></i></p></div>)
          :
          (<div>HELLO
            {/* <h2>{this.props.stats[0].name}</h2> */}
            {/* <p>{this.props.stats[0].gold}</p> */}
          </div>)
        }
      </div>
    )
  }

}

export default Stats