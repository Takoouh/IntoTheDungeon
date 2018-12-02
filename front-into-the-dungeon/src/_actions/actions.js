import { ITEMS_LIST, ADVENTURER_STATS, LOADING_ITEMS, LOADING_STATS } from "./actionTypes"

export const makeItemsListAction = items => (
  {
    type: ITEMS_LIST,
    items
  }
)

export const makeLoadingItemsAction = () => ({
  type: LOADING_ITEMS
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