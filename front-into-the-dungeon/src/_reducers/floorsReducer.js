import { GET_FLOOR_LIST } from "../_actions/actionTypes"

export const buildFloorList = (currentFloor, acc = []) => currentFloor >= 0 ? buildFloorList(currentFloor - 1, [...acc, currentFloor]) : acc

const floorsReducer = (previousState = [], action) => {
  switch (action.type) {
    case GET_FLOOR_LIST:
      return buildFloorList(action.currentFloor)
    default:
      return previousState
  }
}

export default floorsReducer