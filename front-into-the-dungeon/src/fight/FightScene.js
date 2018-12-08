import React, { Component, Fragment } from "react";
import FloorsContainer from "../_containers/FloorsContainer";
import StartBattleContainer from "../_containers/StartBattleContainer";
import EncounterContainer from "../_containers/EncounterContainer";

class FightScene extends Component {

  render() {

    return (
      <Fragment>
        {this.props.battleView === "floorList" ?
          <FloorsContainer />
          : this.props.battleView === "startBattle" ?
            <StartBattleContainer />
            : this.props.battleView === "encounter" ?
              <EncounterContainer />
              : ""
        }

      </Fragment>
    )
  }

}

export default FightScene