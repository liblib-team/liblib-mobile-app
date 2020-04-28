import { LOGIN_SUCCESS, LOGIN_FAILED } from '../actions/action-type'

const initState = {
  user: {},
  jwt: null,
  error: '',
}

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, user: action.data.user, jwt: action.data.jwt }
    case LOGIN_FAILED:
      return { ...state, error: payload.error }
    default:
      return state
  }
}
