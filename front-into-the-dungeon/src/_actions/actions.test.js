import { ITEMS_LIST, LOADING_ITEMS, LOADING_STATS, ADVENTURER_STATS } from "./actionTypes"
import { makeItemsListAction, makeLoadingItemsAction, makeLoadingStatsAction, makeAdventurerStatsAction } from './actions'

describe("makeItemsListAction", () => {
  it("should return a ITEMS_LIST action", () => {
    const items = [
      {
        id: 1,
        name: "sword",
        strength: 7,
        defense: 2,
        price: 15
      }, {
        id: 2,
        name: "sword",
        strength: 7,
        defense: 2,
        price: 15
      }
    ]
    const expected = {
      type: ITEMS_LIST,
      items
    }
    expect(makeItemsListAction(items)).toEqual(expected)
  })
})

describe("makeLoadingItemsAction", () => {
  it("should return a LOADING_ITEMS action", () => {

    const expected = {
      type: LOADING_ITEMS
    }
    expect(makeLoadingItemsAction()).toEqual(expected)
  })
})

describe("makeLoadingStatsAction", () => {
  it("should return a LOADING_STATS action", () => {

    const expected = {
      type: LOADING_STATS
    }
    expect(makeLoadingStatsAction()).toEqual(expected)
  })
})

describe("makeAdventurerStatsAction", () => {
  it("should return a ADVENTURER_STATS action", () => {
    const stats =
    {
      name: "Hero",
      strength: 7,
      defense: 2
    }

    const expected = {
      type: ADVENTURER_STATS,
      stats
    }
    expect(makeAdventurerStatsAction(stats)).toEqual(expected)
  })
})