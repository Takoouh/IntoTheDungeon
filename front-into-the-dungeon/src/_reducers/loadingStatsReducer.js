import { LOADING_STATS, GET_ADVENTURER_STATS } from "../_actions/actionTypes"


const loadingStatsReducer = (previousState = false, action) => {
  switch (action.type) {
    case GET_ADVENTURER_STATS:
      return false
    case LOADING_STATS:
      return true
    default:
      return previousState
  }
}

export default loadingStatsReducer