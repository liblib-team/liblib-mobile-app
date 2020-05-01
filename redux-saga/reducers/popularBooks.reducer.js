import { GET_TOP_VIEW_BOOK_SUCCESS } from '../actions/action-type'

export const popularBooksReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TOP_VIEW_BOOK_SUCCESS:
      return [...action.data]
    default:
      return state
  }
}
