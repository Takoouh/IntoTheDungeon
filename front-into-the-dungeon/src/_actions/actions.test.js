import {
  GET_ITEMS_LIST,
  LOADING_API,
  LOADING_STATS,
  GET_ADVENTURER_STATS,
  GET_FLOOR_LIST,
  VIEW_START_BATTLE,
  VIEW_FLOOR_LIST,
  GET_MONSTER_LIST
} from "./actionTypes"
import {
  makeGetFloorListAction,
  makeGetMonsterListAction,
  makeViewFloorListAction,
  makeViewStartBattleAction,
  makeGetItemsListAction,
  makeLoadingApiAction,
  makeLoadingStatsAction,
  makeGetAdventurerStatsAction
} from './actions'

describe("makeGetFloorListAction", () => {
  it("should return a GET_FLOOR_LIST action", () => {
    const currentFloor = 6
    const expected = {
      type: GET_FLOOR_LIST,
      currentFloor: 6
    }
    expect(makeGetFloorListAction(currentFloor)).toEqual(expected)
  })
})

describe("makeGetMonsterListAction", () => {
  it("should return a GET_MONSTER_LIST", () => {
    const monsters = [
      {
        "monsterId": 1
      },
      {
        "monsterId": 2
      }
    ]
    const expected = {
      type: GET_MONSTER_LIST,
      monsters: [
        {
          "monsterId": 1
        },
        {
          "monsterId": 2
        }
      ]
    }
    expect(makeGetMonsterListAction(monsters)).toEqual(expected)
  })
})

describe("makeViewStartBattleAction", () => {
  it("should return a VIEW_START_BATTLE action", () => {

    const expected = {
      type: VIEW_START_BATTLE
    }
    expect(makeViewStartBattleAction()).toEqual(expected)
  })
})

describe("makeViewFloorListAction", () => {
  it("should return a VIEW_FLOOR_LIST action", () => {

    const expected = {
      type: VIEW_FLOOR_LIST
    }
    expect(makeViewFloorListAction()).toEqual(expected)
  })
})


describe("makeApiAction", () => {
  it("should return a GET_ITEMS_LIST action", () => {
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
      type: GET_ITEMS_LIST,
      items
    }
    expect(makeGetItemsListAction(items)).toEqual(expected)
  })
})


describe("makeLoadingItemsAction", () => {
  it("should return a LOADING_API action", () => {

    const expected = {
      type: LOADING_API
    }
    expect(makeLoadingApiAction()).toEqual(expected)
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

describe("makeGetAdventurerStatsAction", () => {
  it("should return a GET_ADVENTURER_STATS action", () => {
    const stats =
    {
      name: "Hero",
      strength: 7,
      defense: 2
    }

    const expected = {
      type: GET_ADVENTURER_STATS,
      stats
    }
    expect(makeGetAdventurerStatsAction(stats)).toEqual(expected)
  })
})