import statsReducer from "./statsReducer"
import { makeGetAdventurerStatsAction } from '../_actions/actions'

describe("statsReducer", () => {
  it("handles GET_ADVENTURER_STATS action", () => {
    const fakeState = {}
    const stats =
    {
      name: "Hero",
      strength: 7,
      defense: 2
    }

    const expected =
    {
      name: "Hero",
      strength: 7,
      defense: 2
    }
    expect(statsReducer(fakeState, makeGetAdventurerStatsAction(stats))).toEqual(expected)
  })
})