import {
  GET_RATING_BOOK_SUCCESS,
  POST_RATING_BOOK_SUCCESS,
  POST_RATING_BOOK_FAILED,
} from '../actions/action-type'

const review = {
  bookId: '',
  point: 0,
  comment: '',
}
export const ratingBookReducer = (state = [], action) => {
  switch (action.type) {
    case GET_RATING_BOOK_SUCCESS: {
      return [...action.data]
    }
    default:
      return state
  }
}

export const postRatingBookReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_RATING_BOOK_SUCCESS:
      return {...action.data}
    case POST_RATING_BOOK_FAILED:
      return {
        error: action.data,
      }
    default:
      return state
  }
}
