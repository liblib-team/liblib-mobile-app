import { GET_RATING_BOOK, GET_RATING_BOOK_SUCCESS } from './action-type'

export const queryGetRatingBook = (id) => ({
  type: GET_RATING_BOOK,
  response: {
    success: GET_RATING_BOOK_SUCCESS,
  },
  id,
})
