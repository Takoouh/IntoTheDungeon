import statsReducer from "./statsReducer"
import { makeAdventurerStatsAction } from '../_actions/actions'

describe("statsReducer", () => {
  it("handles ADVENTURER_STATS action", () => {
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
    expect(statsReducer(fakeState, makeAdventurerStatsAction(stats))).toEqual(expected)
  })
})