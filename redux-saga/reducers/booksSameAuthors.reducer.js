import { GET_BOOKS_SAME_AUTHORS_SUCCESS } from '../actions/action-type'

export const booksSameAuthorsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_BOOKS_SAME_AUTHORS_SUCCESS:
      return [...action.data]
    default:
      return state
  }
}
