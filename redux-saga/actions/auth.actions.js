import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from './action-type'

export const queryLogin = (data) => ({
  type: LOGIN,
  response: {
    success: LOGIN_SUCCESS,
    failed: LOGIN_FAILED,
  },
  data,
})

export const logoutAction = () => ({
  type: LOGOUT,
})
