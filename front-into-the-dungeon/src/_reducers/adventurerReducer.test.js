import adventurerReducer from "./adventurerReducer"
import { makeGetAdventurerStatsAction, makeGetKilledAction, makeUnlockUpperFloorAction, makeGetRewardAction, makeUseInnAction } from '../_actions/actions'

describe("adventurerReducer", () => {
  it("handles GET_ADVENTURER_STATS action", () => {
    const fakeState = {}
    const stats =
      [{
        name: "Hero",
        strength: 7,
        defense: 2
      }
      ]
    const expected =
    {
      name: "Hero",
      strength: 7,
      defense: 2
    }
    expect(adventurerReducer(fakeState, makeGetAdventurerStatsAction(stats))).toEqual(expected)
  })
})

describe("adventurerReducer", () => {
  it("handles GET_REWARD action", () => {
    const fakeState = {}
    const adventurer =
    {
      name: "Hero",
      experience: 0,
      gold: 1
    }
    const monster =
    {
      name: "monster",
      experience: 20,
      gold: 12
    }
    const expected =
    {
      name: "Hero",
      experience: 20,
      gold: 13
    }
    expect(adventurerReducer(fakeState, makeGetRewardAction(adventurer, monster))).toEqual(expected)
  })
})

describe("adventurerReducer", () => {
  it("handles USE_INN action", () => {
    const fakeState = {}
    const adventurer =
    {
      name: "Hero",
      healthPoint: 1,
      maxHp: 5,
      gold: 20
    }
    const expected =
    {
      name: "Hero",
      healthPoint: 5,
      maxHp: 5,
      gold: 10
    }
    expect(adventurerReducer(fakeState, makeUseInnAction(adventurer))).toEqual(expected)
  })
})


describe("adventurerReducer", () => {
  it("handles GET_KILLED action", () => {
    const fakeState = {}
    const stats =
    {
      name: "Hero",
      level: 2,
      experience: 1234,
      healthPoint: 3,
      maxHp: 10,
      currentFloor: 6,
      gold: 12,
      strength: 2,
      defense: 2
    }
    const expected =
    {
      name: "Hero",
      level: 1,
      experience: 0,
      healthPoint: 5,
      maxHp: 5,
      currentFloor: 1,
      gold: 0,
      strength: 1,
      defense: 1
    }
    expect(adventurerReducer(fakeState, makeGetKilledAction(stats))).toEqual(expected)
  })
})

describe("adventurerReducer", () => {
  it("handles UNLOCK_UPPER_FLOOR action", () => {
    const fakeState = {}
    const adventurer =
    {
      name: "Hero",
      experience: 0,
      gold: 1,
      currentFloor: 1,
      maxFloorReached: 1
    }
    const monster =
    {
      name: "monster",
      experience: 20,
      gold: 12
    }
    const expected =
    {
      name: "Hero",
      experience: 20,
      gold: 13,
      currentFloor: 2,
      maxFloorReached: 2
    }
    expect(adventurerReducer(fakeState, makeUnlockUpperFloorAction(adventurer, monster))).toEqual(expected)
  })
})