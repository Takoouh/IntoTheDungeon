import { connect } from "react-redux"
import { makeViewFloorListAction, makeViewStartBattleAction } from "../_actions/actions"
import FightScene from "../fight/FightScene"

const mapStateToProps = state => ({
  battleView: state.battleView,
  adventurer: state.adventurer
})

const mapDispatchToProps = dispatch => ({
  showFloorList: () => dispatch(makeViewFloorListAction()),
  showStartBattle: () => dispatch(makeViewStartBattleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(FightScene)