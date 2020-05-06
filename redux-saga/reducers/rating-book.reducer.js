import { GET_RATING_BOOK_SUCCESS } from '../actions/action-type'

export const ratingBookReducer = (state = [], action) => {
  switch (action.type) {
    case GET_RATING_BOOK_SUCCESS: {
      return [...action.data]
    }
    default:
      return state
  }
}
