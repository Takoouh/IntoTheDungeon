import battleViewReducer from "./battleViewReducer"
import { makeViewFloorListAction, makeViewStartBattleAction } from '../_actions/actions'

describe("battleViewReducer", () => {
  it("handles CHANGE_BATTLE_VIEW action", () => {
    const fakeState = "floorList"
    const viewFetched = "startBattle"

    const expected = "startBattle"
    expect(battleViewReducer(fakeState, makeViewStartBattleAction(viewFetched))).toEqual(expected)
  })
})
describe("battleViewReducer", () => {
  it("handles CHANGE_BATTLE_VIEW action", () => {
    const fakeState = "startBattle"
    const viewFetched = "floorList"

    const expected = "floorList"
    expect(battleViewReducer(fakeState, makeViewFloorListAction(viewFetched))).toEqual(expected)
  })
})