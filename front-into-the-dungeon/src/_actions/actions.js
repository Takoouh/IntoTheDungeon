import { ITEMS_LIST } from "./actionTypes"

export const makeItemsListAction = items => (
  {
    type: ITEMS_LIST,
    items
  }
)