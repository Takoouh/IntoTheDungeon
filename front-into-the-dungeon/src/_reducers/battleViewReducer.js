import { VIEW_FLOOR_LIST, VIEW_START_BATTLE, VIEW_ENCOUNTER } from "../_actions/actionTypes"

const battleViewReducer = (previousState = "floorList", action) => {
  switch (action.type) {
    case VIEW_FLOOR_LIST:
      return "floorList"
    case VIEW_START_BATTLE:
      return "startBattle"
    case VIEW_ENCOUNTER:
      return "encounter"
    default:
      return previousState
  }
}

export default battleViewReducer