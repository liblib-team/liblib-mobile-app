import {
  GET_POPULAR_BOOK,
  GET_POPULAR_BOOK_SUCCESS,
  GET_HOT_BOOKS,
  GET_HOT_BOOKS_SUCCESS,
  GET_BOOKS_BY_SUBJECT,
  GET_BOOKS_BY_SUBJECT_SUCCESS,
  GET_BOOK_DETAIL,
  GET_BOOK_DETAIL_SUCCESS,
} from './action-type'

export const queryPopularBook = () => ({
  type: GET_POPULAR_BOOK,
  response: {
    success: GET_POPULAR_BOOK_SUCCESS,
  },
})
export const queryHotBooks = () => ({
  type: GET_HOT_BOOKS,
  response: {
    success: GET_HOT_BOOKS_SUCCESS,
  },
})

export const queryBooksBySubject = (id) => ({
  type: GET_BOOKS_BY_SUBJECT,
  response: {
    success: GET_BOOKS_BY_SUBJECT_SUCCESS,
  },
  id,
})

export const queryBookDetail = (id) => ({
  type: GET_BOOK_DETAIL,
  response: {
    success: GET_BOOK_DETAIL_SUCCESS,
  },
  id,
})
