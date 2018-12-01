import { ITEMS_LIST, FETCH_API } from "./actionTypes"
import { makeItemsListAction, makeFetchApiAction } from './actions'

describe("makeItemsListAction", () => {
  it("should return a ITEMS_LIST action", () => {
    const items = [
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
    const expected = {
      type: ITEMS_LIST,
      items
    }
    expect(makeItemsListAction(items)).toEqual(expected)
  })
})

describe("makeFetchApiAction", () => {
  it("should return a FETCH_API action", () => {

    const expected = {
      type: FETCH_API
    }
    expect(makeFetchApiAction()).toEqual(expected)
  })
})