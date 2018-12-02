import loadingStatsReducer from "./loadingStatsReducer"
import { makeLoadingStatsAction, makeAdventurerStatsAction } from "../_actions/actions";

describe("loadingStatsReducer", () => {
  it("handles LOADING_STATS action", () => {
    const fakeState = false
    expect(loadingStatsReducer(fakeState, makeLoadingStatsAction())).toEqual(true)
  })
  it("handles STATS_LIST", () => {
    const fakeState = true
    expect(loadingStatsReducer(fakeState, makeAdventurerStatsAction([]))).toEqual(false)
  })

})