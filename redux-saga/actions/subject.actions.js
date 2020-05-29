import {
  GET_LIST_SUBJECTS,
  GET_LIST_SUBJECTS_SUCCESS,
} from './action-type'

export const queryListSubjects = () => ({
  type: GET_LIST_SUBJECTS,
  response: {
    success: GET_LIST_SUBJECTS_SUCCESS,
  },
})
