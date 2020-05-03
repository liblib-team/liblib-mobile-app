import {
  GET_LIST_SUBJECTS,
  GET_LIST_SUBJECTS_SUCCESS,
  GET_BOOKS_BY_SUBJECT,
  GET_HOT_BOOKS_SUCCESS,
  GET_BOOKS_BY_SUBJECT_SUCCESS,
} from './action-type'

export const queryListSubjects = () => ({
  type: GET_LIST_SUBJECTS,
  response: {
    success: GET_LIST_SUBJECTS_SUCCESS,
  },
})

export const queryBooksBySubject = () => ({
  type: GET_BOOKS_BY_SUBJECT,
  response: {
    success: GET_BOOKS_BY_SUBJECT_SUCCESS,
  },
})
