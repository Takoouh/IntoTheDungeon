import { GET_ITEMS_LIST } from "../_actions/actionTypes";

const initialState = []
const itemsReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS_LIST:
      return action.items
    default:
      return previousState
  }
};

export default itemsReducer