import { connect } from "react-redux"
import Encounter from "../fight/Encounter";
import { makeDoAttackAction, makeViewDeathScreenAction } from "../_actions/actions";

const mapStateToProps = state => ({
  adventurer: state.adventurer,
  monster: state.monster
})

const mapDispatchToProps = dispatch => ({
  resolveAttack: (monster, adventurer) => dispatch(makeDoAttackAction(monster, adventurer)),
  viewDeathScreen: () => dispatch(makeViewDeathScreenAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Encounter)