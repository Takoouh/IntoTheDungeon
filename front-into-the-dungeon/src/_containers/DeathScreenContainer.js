import { connect } from "react-redux"
import DeathScreen from "../fight/DeathScreen";
import { makeGetKilledAction, makeViewFloorListAction } from "../_actions/actions";

const mapStateToProps = state => ({
  adventurer: state.adventurer
})

const mapDispatchToProps = dispatch => ({
  getKilled: (adventurer) => dispatch(makeGetKilledAction(adventurer)),
  showFloorList: () => dispatch(makeViewFloorListAction()),
  getFloorList: (currentFloor) => dispatch(makeViewFloorListAction(currentFloor))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeathScreen)