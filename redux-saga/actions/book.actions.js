import { GET_TOP_VIEW_BOOK, GET_TOP_VIEW_BOOK_SUCCESS } from './action-type'

export const queryTopViewBook = () => ({
  type: GET_TOP_VIEW_BOOK,
  response: {
    success: GET_TOP_VIEW_BOOK_SUCCESS,
  },
})
