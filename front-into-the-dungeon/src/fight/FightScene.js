import React, { Component, Fragment } from "react";
import FloorsContainer from "../_containers/FloorsContainer";
import StartBattleContainer from "../_containers/StartBattleContainer";

class FightScene extends Component {

  render() {

    return (
      <Fragment>
        {this.props.battleView === "floorList" ?
          <FloorsContainer />
          : this.props.battleView === "startBattle" ?
            <StartBattleContainer />
            : ""
        }

      </Fragment>
    )
  }

}

export default FightScene