import { GET_LIST_SUBJECTS_SUCCESS } from '../actions/action-type'

export const listSubjects = (state = [], action) => {
  switch (action.type) {
    case GET_LIST_SUBJECTS_SUCCESS:
      return [...action.data]
    default: 
      return state
  }
}
