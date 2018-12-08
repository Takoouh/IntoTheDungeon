import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import axios from "axios"

class StartBattle extends Component {

  getSelectedMonsterStats = () => {
    this.props.showEncounter()
    const rdmIdMonster = Math.floor(Math.random() * this.props.monsterList.length)
    axios
      .get(`http://localhost:3010/api/monster/${rdmIdMonster}`)
      .then(res => this.props.getMonsterStats(res.data))
  }

  render() {
    return (
      <Fragment>
        <Button onClick={() => this.props.showFloorList()}>Change Floor</Button>
        <Button onClick={() => this.getSelectedMonsterStats()}>Start</Button>
      </Fragment>
    )
  }
}

export default StartBattle