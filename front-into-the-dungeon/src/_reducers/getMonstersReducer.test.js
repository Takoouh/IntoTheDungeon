import getMonstersReducer from "./getMonstersReducer"
import { makeGetMonsterListAction } from "../_actions/actions";

describe("getMonstersReducer", () => {
  it("handles GET_MONSTER_LIST action", () => {
    const fakeState = []
    const dataFetched = [
      {
        "monsterId": 1
      },
      {
        "monsterId": 2
      }
    ]
    const expected = [1, 2]
    expect(getMonstersReducer(fakeState, makeGetMonsterListAction(dataFetched))).toEqual(expected)
  })
})