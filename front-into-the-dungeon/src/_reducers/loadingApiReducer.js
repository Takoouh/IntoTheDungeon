import { GET_ITEMS_LIST, LOADING_API } from "../_actions/actionTypes"

const loadingApiReducer = (previousState = false, action) => {
  switch (action.type) {
    case GET_ITEMS_LIST:
      return false
    case LOADING_API:
      return true
    default:
      return previousState
  }
}

export default loadingApiReducer