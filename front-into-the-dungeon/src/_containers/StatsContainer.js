import { connect } from "react-redux"
import { makeGetAdventurerStatsAction, makeLoadingStatsAction, makeGetFloorListAction } from "../_actions/actions"
import Stats from "../Stats"

const mapStateToProps = state => ({
  stats: state.stats,
  floorList: state.floorList,
  isLoadingStats: state.loadingStats
})

const mapDispatchToProps = dispatch => ({
  adventurerStats: stats => dispatch(makeGetAdventurerStatsAction(stats)),
  getCurrentFloor: currentFloor => dispatch(makeGetFloorListAction(currentFloor)),
  loadingStats: () => dispatch(makeLoadingStatsAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Stats)