import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from './action-type'

export const queryLogin = (data) => ({
  type: LOGIN,
  response: {
    success: LOGIN_SUCCESS,
    failed: LOGIN_FAILED,
  },
  data,
})
