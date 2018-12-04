import { FLOOR_LIST } from "../_actions/actionTypes"

const floorsReducer = (previousState = [], action) => {
  switch (action.type) {
    case FLOOR_LIST:
      const floorList = []
      for (let i = action.currentFloor; i > 0; i--) {
        floorList.push(i)
      }
      return floorList
    default:
      return previousState
  }
}

export default floorsReducer