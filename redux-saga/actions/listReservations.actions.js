import { GET_LIST_RESERVATIONS, GET_LIST_RESERVATIONS_SUCCESS } from './action-type'

export const queryListReverations = () => ({
  type: GET_LIST_RESERVATIONS,
  response: {
    success: GET_LIST_RESERVATIONS_SUCCESS,
  },
})
