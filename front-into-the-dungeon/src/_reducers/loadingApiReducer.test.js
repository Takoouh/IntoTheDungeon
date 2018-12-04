import loadingApiReducer from "./loadingItemsReducer"
import { makeLoadingApiAction, makeItemsListAction } from "../_actions/actions";

describe("loadingItemsReducer", () => {
  it("handles LOADING_ITEMS action", () => {
    const fakeState = false
    expect(loadingApiReducer(fakeState, makeLoadingApiAction())).toEqual(true)
  })
  it("handles ITEMS_LIST", () => {
    const fakeState = true
    expect(loadingApiReducer(fakeState, makeItemsListAction([]))).toEqual(false)
  })

})