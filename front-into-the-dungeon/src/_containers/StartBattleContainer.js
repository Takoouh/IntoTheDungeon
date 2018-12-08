import { connect } from "react-redux"
import { makeViewFloorListAction } from "../_actions/actions"
import StartBattle from "../fight/StartBattle"

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  showFloorList: () => dispatch(makeViewFloorListAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(StartBattle)