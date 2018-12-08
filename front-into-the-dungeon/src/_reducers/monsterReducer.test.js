import monsterReducer from "./monsterReducer"
import { makeGetRdmMonsterAction } from "../_actions/actions";

describe("monsterReducer", () => {
  it("handles GET_RDM_MONSTER action", () => {
    const fakeState = {}
    const dataFetched = [{ name: "nom", level: 1 }]
    const expected = [{ name: "nom", level: 1 }]
    expect(monsterReducer(fakeState, makeGetRdmMonsterAction(dataFetched))).toEqual(expected)
  })
})