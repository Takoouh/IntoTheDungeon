import { itemsReducer } from "./itemsReducer"
import { makeItemsListAction } from './actions'

describe("itemsReducer", () => {
  it("handles ITEMS_LIST action", () => {
    const fateState = [
      {
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
      }
    ]
    expect(itemsReducer(fakeState, makeItemsListAction)).toEqual(expected)
  })
})