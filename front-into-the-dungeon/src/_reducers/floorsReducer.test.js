import floorsReducer from "./floorsReducer"
import { makeGetFloorListAction } from '../_actions/actions'

describe("floorsReducer", () => {
  it("handles FLOOR_LIST action", () => {
    const fakeState = 0
    const dataFecthed = 6

    const expected = [6, 5, 4, 3, 2, 1, 0]
    expect(floorsReducer(fakeState, makeGetFloorListAction(dataFecthed))).toEqual(expected)
  })
})