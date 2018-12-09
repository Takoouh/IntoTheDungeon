import monsterReducer from "./monsterReducer"
import { makeGetRdmMonsterAction, makeDoAttackAction } from "../_actions/actions";

describe("monsterReducer", () => {
  it("handles GET_RDM_MONSTER action", () => {
    const fakeState = {}
    const dataFetched = [{ name: "nom", level: 1, healthPoint: 10 }]
    const expected = { name: "nom", level: 1, healthPoint: 10, currentHp: 10 }
    expect(monsterReducer(fakeState, makeGetRdmMonsterAction(dataFetched))).toEqual(expected)
  })
})

describe("monsterReducer", () => {
  it("handles DO_ATTACK action", () => {
    const fakeState = { name: "nom", level: 1, healthPoint: 10 }
    const monster = { name: "nom", level: 1, currentHp: 10 }
    const adventurer = { name: "nom", level: 1, strength: 5 }
    const expected = { name: "nom", level: 1, currentHp: 5 }
    expect(monsterReducer(fakeState, makeDoAttackAction(monster, adventurer))).toEqual(expected)
  })
})