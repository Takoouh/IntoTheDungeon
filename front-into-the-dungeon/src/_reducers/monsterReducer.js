import { GET_RDM_MONSTER } from "../_actions/actionTypes";

// export const selectRandomMonster = (monsters) => Math.floor(Math.random() * monsters.length)

const monsterReducer = (previousState = {}, action) => {
  switch (action.type) {
    case GET_RDM_MONSTER:
      return action.monster
    default:
      return previousState
  }
}

export default monsterReducer