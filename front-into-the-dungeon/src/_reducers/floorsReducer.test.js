import floorsReducer from "./floorsReducer"
import { makeFloorListAction } from '../_actions/actions'

describe("floorsReducer", () => {
  it("handles FLOOR_LIST action", () => {
    const fakeState = 0
    const dataFecthed = 6

    const expected = 6
    expect(floorsReducer(fakeState, makeFloorListAction(dataFecthed))).toEqual(expected)
  })
})