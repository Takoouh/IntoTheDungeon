import itemsReducer from "./itemsReducer"
import { makeGetItemsListAction } from '../_actions/actions'

describe("itemsReducer", () => {
  it("handles ITEMS_LIST action", () => {
    const fakeState = []
    const dataFecthed = [{
      id: 1,
      name: "sword",
      strength: 7,
      defense: 2,
      price: 15
    }, {
      id: 2,
      name: "sword",
      strength: 7,
      defense: 2,
      price: 15
    }]

    const expected = [{
      id: 1,
      name: "sword",
      strength: 7,
      defense: 2,
      price: 15
    }, {
      id: 2,
      name: "sword",
      strength: 7,
      defense: 2,
      price: 15
    }]
    expect(itemsReducer(fakeState, makeGetItemsListAction(dataFecthed))).toEqual(expected)
  })
})