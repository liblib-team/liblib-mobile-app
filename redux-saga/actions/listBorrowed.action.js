import { GET_LIST_BORROWED, GET_LIST_BORROWED_SUCCESS } from './action-type'

export const queryListBorrowed = () => ({
  type: GET_LIST_BORROWED,
  response: {
    success: GET_LIST_BORROWED_SUCCESS,
  },
})
