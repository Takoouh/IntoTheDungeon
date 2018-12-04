import { connect } from "react-redux"
import { makeFloorListAction } from "../_actions/actions"
import FloorChoice from "../fight/FloorChoice"

const mapStateToProps = state => ({
  floorList: state.floorList,
  stats: state.stats
})

const mapDispatchToProps = dispatch => ({
  getCurrentFloor: currentFloor => dispatch(makeFloorListAction(currentFloor))
})

export default connect(mapStateToProps, mapDispatchToProps)(FloorChoice)