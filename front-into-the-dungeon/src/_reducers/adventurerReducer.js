import { GET_ADVENTURER_STATS, DO_ATTACK, GET_KILLED, GET_REWARD, UNLOCK_UPPER_FLOOR, USE_INN } from "../_actions/actionTypes"

const checkBattleWin = (adventurer, monster) => (monster.currentHp - adventurer.strength) <= 0 ? adventurer.healthPoint : adventurer.healthPoint - monster.strength >= 0 ? adventurer.healthPoint - monster.strength : 0
const checkMaxFloorReached = (adventurer) => (adventurer.currentFloor + 1) > adventurer.maxFloorReached ? adventurer.currentFloor + 1 : adventurer.maxFloorReached
const adventurerReducer = (previousState = {}, action) => {
  switch (action.type) {
    case GET_ADVENTURER_STATS:
      return { ...action.stats[0] }
    case DO_ATTACK:
      return {
        ...action.adventurer,
        healthPoint: checkBattleWin(action.adventurer, action.monster)
      }
    case GET_REWARD:
      return {
        ...action.adventurer,
        experience: action.adventurer.experience + action.monster.experience,
        gold: action.adventurer.gold + action.monster.gold

      }
    case UNLOCK_UPPER_FLOOR:
      return {
        ...action.adventurer,
        experience: action.adventurer.experience + action.monster.experience,
        gold: action.adventurer.gold + action.monster.gold,
        currentFloor: action.adventurer.currentFloor + 1,
        maxFloorReached: checkMaxFloorReached(action.adventurer)
      }
    case USE_INN:
      return {
        ...action.adventurer,
        healthPoint: action.adventurer.maxHp,
        gold: action.adventurer.gold - 10
      }
    case GET_KILLED:
      return {
        ...action.adventurer,
        level: 1,
        experience: 0,
        healthPoint: 5,
        maxHp: 5,
        currentFloor: 1,
        gold: 0,
        strength: 1,
        defense: 1
      }
    default:
      return previousState
  }
}

export default adventurerReducer