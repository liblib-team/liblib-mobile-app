import { GET_RELEVANCE_BOOKS_SUCCESS } from '../actions/action-type'

export const relevanceBooksReducer = (state = [], action) => {
  switch (action.type) {
    case GET_RELEVANCE_BOOKS_SUCCESS:
      return [...action.data]
    default:
      return state
  }
}
