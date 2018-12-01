import loadingReducer from "./loadingReducer"
import { makeFetchApiAction, makeItemsListAction } from "../_actions/actions";

describe("loadingReducer", () => {
  it("handles FETCH_API action", () => {
    const fakeState = false
    expect(loadingReducer(fakeState, makeFetchApiAction())).toEqual(true)
  })
  it("handles ITEMS_LIST", () => {
    const fakeState = true
    expect(loadingReducer(fakeState, makeItemsListAction([]))).toEqual(false)
  })

})