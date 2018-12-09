import { GET_ADVENTURER_STATS, DO_ATTACK, GET_KILLED } from "../_actions/actionTypes"

const checkBattleWin = (adventurer, monster) => (monster.currentHp - adventurer.strength) <= 0 ? adventurer.healthPoint : adventurer.healthPoint - monster.strength >= 0 ? adventurer.healthPoint - monster.strength : 0

const adventurerReducer = (previousState = {}, action) => {
  switch (action.type) {
    case GET_ADVENTURER_STATS:
      return { ...action.stats[0] }
    case DO_ATTACK:
      return { ...action.adventurer, healthPoint: checkBattleWin(action.adventurer, action.monster) }
    case GET_KILLED:
      return { ...action.adventurer, level: 1, experience: 0, healthPoint: 5, maxHp: 5, currentFloor: 1, gold: 0, strength: 1, defense: 1 }
    default:
      return previousState
  }
}

export default adventurerReducer