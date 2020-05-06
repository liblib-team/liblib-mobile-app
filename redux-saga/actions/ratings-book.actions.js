import {
  GET_RATING_BOOK,
  GET_RATING_BOOK_SUCCESS,
  POST_RATING_BOOK,
  POST_RATING_BOOK_SUCCESS,
  POST_RATING_BOOK_FAILED,
} from './action-type'

export const queryGetRatingBook = (id) => ({
  type: GET_RATING_BOOK,
  response: {
    success: GET_RATING_BOOK_SUCCESS,
  },
  id,
})

export const queryPostRatingBook = (review) => ({
  type: POST_RATING_BOOK,
  responese: {
    success: POST_RATING_BOOK_SUCCESS,
    failed: POST_RATING_BOOK_FAILED,
  },
  review,
})
