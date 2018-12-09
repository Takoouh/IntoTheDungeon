import { GET_RDM_MONSTER, DO_ATTACK } from "../_actions/actionTypes";

const monsterReducer = (previousState = {}, action) => {
  switch (action.type) {
    case GET_RDM_MONSTER:
      return { ...action.monster[0], currentHp: action.monster[0].healthPoint }
    case DO_ATTACK:
      return { ...action.monster, currentHp: (action.monster.currentHp - action.adventurer.strength) }
    default:
      return previousState
  }
}

export default monsterReducer