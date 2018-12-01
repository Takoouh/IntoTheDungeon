import { ITEMS_LIST, FETCH_API } from "./actionTypes"

export const makeItemsListAction = items => (
  {
    type: ITEMS_LIST,
    items
  }
)

export const makeFetchApiAction = () => ({
  type: FETCH_API
})