import { connect } from "react-redux"
import { makeViewFloorListAction, makeGetRdmMonsterAction, makeViewEncounterAction } from "../_actions/actions"
import StartBattle from "../fight/StartBattle"

const mapStateToProps = state => ({
  monsterList: state.monsterList,
  monster: state.monster
})

const mapDispatchToProps = dispatch => ({
  showFloorList: () => dispatch(makeViewFloorListAction()),
  getMonsterStats: (monsters) => dispatch(makeGetRdmMonsterAction(monsters)),
  showEncounter: () => dispatch(makeViewEncounterAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(StartBattle)