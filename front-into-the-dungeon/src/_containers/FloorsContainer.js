import { connect } from "react-redux"
import { makeGetFloorListAction, makeLoadingStatsAction, makeViewStartBattleAction, makeGetMonsterListAction } from "../_actions/actions"
import FloorChoice from "../fight/FloorChoice"

const mapStateToProps = state => ({
  floorList: state.floorList,
  stats: state.stats,
  isLoadingStats: state.loadingStats
})

const mapDispatchToProps = dispatch => ({
  getCurrentFloor: currentFloor => dispatch(makeGetFloorListAction(currentFloor)),
  loadingStats: () => dispatch(makeLoadingStatsAction()),
  showStartBattle: () => dispatch(makeViewStartBattleAction()),
  getMonsters: (monsters) => dispatch(makeGetMonsterListAction(monsters))
})

export default connect(mapStateToProps, mapDispatchToProps)(FloorChoice)