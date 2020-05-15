import { GET_LIST_RESERVATIONS_SUCCESS } from '../actions/action-type'

export const listReverationsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_LIST_RESERVATIONS_SUCCESS:
      return [...action.data]
    default:
      return state
  }
}
