import { connect } from "react-redux"
import { makeLoadingStatsAction, makeViewStartBattleAction, makeGetMonsterListAction, makeGetFloorListAction } from "../_actions/actions"
import FloorChoice from "../fight/FloorChoice"

const mapStateToProps = state => ({
  floorList: state.floorList,
  adventurer: state.adventurer,
  isLoadingStats: state.loadingStats,
  floorList: state.floorList
})

const mapDispatchToProps = dispatch => ({
  loadingStats: () => dispatch(makeLoadingStatsAction()),
  showStartBattle: () => dispatch(makeViewStartBattleAction()),
  getCurrentFloor: currentFloor => dispatch(makeGetFloorListAction(currentFloor)),
  getMonsters: (monsters) => dispatch(makeGetMonsterListAction(monsters))
})

export default connect(mapStateToProps, mapDispatchToProps)(FloorChoice)