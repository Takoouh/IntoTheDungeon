import { ADVENTURER_STATS } from "../_actions/actionTypes"

const statsReducer = (previousState = {}, action) => {
  switch (action.type) {
    case ADVENTURER_STATS:
      return action.stats
    default:
      return previousState
  }
}

export default statsReducer