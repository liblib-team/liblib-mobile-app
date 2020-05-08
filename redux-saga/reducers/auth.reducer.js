import { LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT } from '../actions/action-type'
import { removeCurrentUser } from '../../auth'

const initState = {
  username: '',
  jwt: null,
  error: '',
}

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, username: action.data.username, jwt: action.data.jwt }
    case LOGIN_FAILED:
      return { ...state, error: action.data, username: '', jwt: null }
    case LOGOUT:
      removeCurrentUser()
      return { ...initState }
    default:
      return state
  }
}
