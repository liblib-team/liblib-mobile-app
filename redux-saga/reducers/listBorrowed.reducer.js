import { GET_LIST_BORROWED_SUCCESS } from '../actions/action-type'

export const listBorrowedReducer = (state = [], action) => {
  switch (action.type) {
    case GET_LIST_BORROWED_SUCCESS:
      return [...action.data]
    default:
      return state
  }
}
