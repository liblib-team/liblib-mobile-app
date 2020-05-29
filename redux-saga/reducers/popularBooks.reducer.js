import {
  GET_POPULAR_BOOK_SUCCESS,
  GET_HOT_BOOKS_SUCCESS,
  GET_BOOKS_BY_SUBJECT_SUCCESS,
} from '../actions/action-type'

export const popularBooksReducer = (state = [], action) => {
  switch (action.type) {
    case GET_POPULAR_BOOK_SUCCESS:
      return [...action.data]
    default:
      return state
  }
}
