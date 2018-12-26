import {
  GET_ITEMS_LIST,
  GET_MONSTER_LIST,
  GET_ADVENTURER_STATS,
  LOADING_API,
  LOADING_STATS,
  GET_FLOOR_LIST,
  VIEW_FLOOR_LIST,
  VIEW_START_BATTLE,
  GET_RDM_MONSTER,
  VIEW_ENCOUNTER,
  DO_ATTACK,
  GET_KILLED,
  VIEW_DEATH_SCREEN,
  GET_REWARD,
  UNLOCK_UPPER_FLOOR,
  USE_INN
} from "./actionTypes"

export const makeGetFloorListAction = currentFloor => (
  {
    type: GET_FLOOR_LIST,
    currentFloor
  }
)

export const makeGetMonsterListAction = monsters => (
  {
    type: GET_MONSTER_LIST,
    monsters
  }
)

export const makeGetRdmMonsterAction = monster => (
  {
    type: GET_RDM_MONSTER,
    monster
  }
)

export const makeGetItemsListAction = items => (
  {
    type: GET_ITEMS_LIST,
    items
  }
)

export const makeLoadingApiAction = () => ({
  type: LOADING_API
})

export const makeLoadingStatsAction = () => ({
  type: LOADING_STATS
})

export const makeGetAdventurerStatsAction = stats => (
  {
    type: GET_ADVENTURER_STATS,
    stats
  }
)

//BattleActions :
export const makeDoAttackAction = (monster, adventurer) => ({
  type: DO_ATTACK,
  monster,
  adventurer
})

export const makeGetRewardAction = (adventurer, monster) => ({
  type: GET_REWARD,
  adventurer,
  monster
})

export const makeUnlockUpperFloorAction = (adventurer, monster) => ({
  type: UNLOCK_UPPER_FLOOR,
  adventurer,
  monster
})

export const makeGetKilledAction = (adventurer) => ({
  type: GET_KILLED,
  adventurer
})



//Inn :
export const makeUseInnAction = (adventurer) => ({
  type: USE_INN,
  adventurer
})


//BattleViews :
export const makeViewFloorListAction = () => ({
  type: VIEW_FLOOR_LIST
})

export const makeViewStartBattleAction = () => ({
  type: VIEW_START_BATTLE
})

export const makeViewEncounterAction = () => ({
  type: VIEW_ENCOUNTER
})

export const makeViewDeathScreenAction = () => ({
  type: VIEW_DEATH_SCREEN
})
