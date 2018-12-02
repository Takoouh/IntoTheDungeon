import loadingItemsReducer from "./loadingItemsReducer"
import { makeLoadingItemsAction, makeItemsListAction } from "../_actions/actions";

describe("loadingItemsReducer", () => {
  it("handles LOADING_ITEMS action", () => {
    const fakeState = false
    expect(loadingItemsReducer(fakeState, makeLoadingItemsAction())).toEqual(true)
  })
  it("handles ITEMS_LIST", () => {
    const fakeState = true
    expect(loadingItemsReducer(fakeState, makeItemsListAction([]))).toEqual(false)
  })

})