import loadingApiReducer from "./loadingApiReducer"
import { makeLoadingApiAction, makeGetItemsListAction } from "../_actions/actions";

describe("loadingItemsReducer", () => {
  it("handles LOADING_ITEMS action", () => {
    const fakeState = false
    expect(loadingApiReducer(fakeState, makeLoadingApiAction())).toEqual(true)
  })
  it("handles ITEMS_LIST", () => {
    const fakeState = true
    expect(loadingApiReducer(fakeState, makeGetItemsListAction([]))).toEqual(false)
  })

})