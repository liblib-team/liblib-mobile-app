import {
  GET_POPULAR_BOOK_SUCCESS,
  GET_HOT_BOOKS_SUCCESS,
  GET_BOOKS_BY_SUBJECT_SUCCESS,
} from '../actions/action-type'

export const hotBooksReducer = (state = [], action) => {
  switch (action.type) {
    case GET_HOT_BOOKS_SUCCESS:
      return [...action.data]
    default:
      return state
  }
}
