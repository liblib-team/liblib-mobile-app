import {
  GET_TOP_VIEW_BOOK,
  GET_TOP_VIEW_BOOK_SUCCESS,
  GET_HOT_BOOKS,
  GET_HOT_BOOKS_SUCCESS,
} from './action-type'

export const queryPopularBook = () => ({
  type: GET_TOP_VIEW_BOOK,
  response: {
    success: GET_TOP_VIEW_BOOK_SUCCESS,
  },
})
export const queryHotBooks = () => ({
  type: GET_HOT_BOOKS,
  response: {
    success: GET_HOT_BOOKS_SUCCESS,
  },
})
