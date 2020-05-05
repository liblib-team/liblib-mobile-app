import { GET_BOOKS_BY_SUBJECT_SUCCESS } from '../actions/action-type'

export const booksBySubjectReducer = (state = [], action) => {
  switch (action.type) {
    case GET_BOOKS_BY_SUBJECT_SUCCESS:
      return [...action.data]
    default:
      return state
  }
}
