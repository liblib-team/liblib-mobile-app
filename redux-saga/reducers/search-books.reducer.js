import { SEARCH_BOOKS_SUCCESS } from '../actions/action-type'

export const listBookBySearchReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH_BOOKS_SUCCESS:
      return [...action.data]
    default:
      return state
  }
}
