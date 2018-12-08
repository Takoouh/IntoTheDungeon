import { GET_MONSTER_LIST } from "../_actions/actionTypes"

export const buildMonsterList = (monsters) => monsters.map((monster) => monster.monsterId)

const getMonstersReducer = (previousState = [], action) => {
  switch (action.type) {
    case GET_MONSTER_LIST:
      return buildMonsterList(action.monsters)
    default:
      return previousState
  }
}

export default getMonstersReducer