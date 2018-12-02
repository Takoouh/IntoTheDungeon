import { connect } from "react-redux"
import { makeAdventurerStatsAction, makeLoadingStatsAction } from "../_actions/actions"
import Stats from "../Stats"

const mapStateToProps = state => ({
  stats: state.stats,
  loadingStats: state.loadingStats
})

const mapDispatchToProps = dispatch => ({
  adventurerStats: stats => dispatch(makeAdventurerStatsAction(stats)),
  loadingStats: () => dispatch(makeLoadingStatsAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Stats)