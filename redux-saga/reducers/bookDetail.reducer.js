import { GET_BOOK_DETAIL_SUCCESS } from '../actions/action-type'

export const bookDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_BOOK_DETAIL_SUCCESS:
      return { ...action.data }
    default:
      return state
  }
}
