import { ITEMS_LIST, FETCH_API } from "../_actions/actionTypes"


const loadingReducer = (previousState = false, action) => {
  switch (action.type) {
    case ITEMS_LIST:
      return false
    case FETCH_API:
      return true
    default:
      return previousState
  }
}

export default loadingReducer