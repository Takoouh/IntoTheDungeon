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
  VIEW_ENCOUNTER
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
