import { call, put, takeLatest } from 'redux-saga/effects'
import { LOGIN } from '../actions/action-type'
import { SERVER_URL, setCurrentUser, removeCurrentUser, getHeaders } from '../../auth'

const queryLogin = (params) => {
  return new Promise((resolve, reject) => {
    return fetch(SERVER_URL + 'user/login', {
      headers: getHeaders(false),
      method: 'POST',
      body: JSON.stringify(params),
    })
      .then((response) => {
        console.log(response)
        return response.status === 200 ? response : reject(response)
      })
      .then((response) => response.json())
      .then((response) =>
        response.success ? resolve(response) : reject(response.message)
      )
      .catch((error) => reject(error))
  })
}

function* doLogin(request) {
  try {
    const { message } = yield call(queryLogin, request.data)
    yield put({ type: request.response.success, data: { ...request.data, jwt: message } })
    setCurrentUser({ username: request.data.username, jwt: message })
  } catch (error) {
    console.log(error)
    yield put({ type: request.response.failed, data: error })
    Toast.show({
      text: error,
      type: 'danger',
    })
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN, doLogin)
}
