import adventurerReducer from "./adventurerReducer"
import { makeGetAdventurerStatsAction, makeGetKilledAction } from '../_actions/actions'

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