import { ITEMS_LIST, LOADING_ITEMS } from "../_actions/actionTypes"


const loadingItemsReducer = (previousState = false, action) => {
  switch (action.type) {
    case ITEMS_LIST:
      return false
    case LOADING_ITEMS:
      return true
    default:
      return previousState
  }
}

export default loadingItemsReducer