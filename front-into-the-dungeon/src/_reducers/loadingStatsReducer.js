import { LOADING_STATS, ADVENTURER_STATS } from "../_actions/actionTypes"


const loadingStatsReducer = (previousState = false, action) => {
  switch (action.type) {
    case ADVENTURER_STATS:
      return false
    case LOADING_STATS:
      return true
    default:
      return previousState
  }
}

export default loadingStatsReducer