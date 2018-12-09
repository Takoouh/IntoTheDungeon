import { connect } from "react-redux"
import { makeGetAdventurerStatsAction, makeLoadingStatsAction, makeGetFloorListAction, makeGetKilledAction } from "../_actions/actions"
import Stats from "../Stats"

const mapStateToProps = state => ({
  adventurer: state.adventurer,
  floorList: state.floorList,
  isLoadingStats: state.loadingStats
})

const mapDispatchToProps = dispatch => ({
  adventurerStats: stats => dispatch(makeGetAdventurerStatsAction(stats)),
  getCurrentFloor: currentFloor => dispatch(makeGetFloorListAction(currentFloor)),
  loadingStats: () => dispatch(makeLoadingStatsAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Stats)