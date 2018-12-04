import { ITEMS_LIST, ADVENTURER_STATS, LOADING_API, LOADING_STATS, FLOOR_LIST } from "./actionTypes"

export const makeFloorListAction = currentFloor => (
  {
    type: FLOOR_LIST,
    currentFloor
  }
)

export const makeItemsListAction = items => (
  {
    type: ITEMS_LIST,
    items
  }
)

export const makeLoadingApiAction = () => ({
  type: LOADING_API
})

export const makeLoadingStatsAction = () => ({
  type: LOADING_STATS
})

export const makeAdventurerStatsAction = stats => (
  {
    type: ADVENTURER_STATS,
    stats
  }
)