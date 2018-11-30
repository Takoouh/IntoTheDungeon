const initialState = []
const itemsReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case ITEMS_LIST:
      return action.items
    default:
      return previousState
  }
}

export default itemsReducer