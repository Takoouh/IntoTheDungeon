import { VIEW_FLOOR_LIST, VIEW_START_BATTLE } from "../_actions/actionTypes"

const battleViewReducer = (previousState = "floorList", action) => {
  switch (action.type) {
    case VIEW_FLOOR_LIST:
      return "floorList"
    case VIEW_START_BATTLE:
      return "startBattle"
    default:
      return previousState
  }
}

export default battleViewReducer