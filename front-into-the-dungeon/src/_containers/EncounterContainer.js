import { connect } from "react-redux"
import Encounter from "../fight/Encounter";
import {
  makeDoAttackAction,
  makeViewDeathScreenAction,
  makeGetRewardAction,
  makeGetRdmMonsterAction,
  makeViewEncounterAction,
  makeUnlockUpperFloorAction,
  makeViewFloorListAction
} from "../_actions/actions";

const mapStateToProps = state => ({
  monsterList: state.monsterList,
  adventurer: state.adventurer,
  monster: state.monster,
  floorList: state.floorList
})

const mapDispatchToProps = dispatch => ({
  resolveAttack: (monster, adventurer) => dispatch(makeDoAttackAction(monster, adventurer)),
  viewDeathScreen: () => dispatch(makeViewDeathScreenAction()),
  getReward: (adventurer, monster) => dispatch(makeGetRewardAction(adventurer, monster)),
  unlockUpperFloor: (adventurer, monster) => dispatch(makeUnlockUpperFloorAction(adventurer, monster)),
  getMonsterStats: (monsters) => dispatch(makeGetRdmMonsterAction(monsters)),
  showEncounter: () => dispatch(makeViewEncounterAction()),
  viewFloorList: () => dispatch(makeViewFloorListAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Encounter)