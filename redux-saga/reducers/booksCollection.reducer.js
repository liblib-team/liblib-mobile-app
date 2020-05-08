import {
  GET_TOP_VIEW_BOOK_SUCCESS,
  GET_HOT_BOOKS_SUCCESS,
  GET_BOOKS_BY_SUBJECT_SUCCESS,
} from '../actions/action-type'

export const booksCollectionReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TOP_VIEW_BOOK_SUCCESS:
      return [...action.data]
    case GET_HOT_BOOKS_SUCCESS:
      return [...action.data]
    case GET_BOOKS_BY_SUBJECT_SUCCESS:
      return [...action.data]
    default:
      return state
  }
}
