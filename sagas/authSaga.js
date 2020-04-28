import { call, put, takeLatest } from 'redux-saga/effects'
import { LOGIN } from '../actions/action-type'
import { SERVER_URL, setCurrentUser, removeCurrentUser } from '../auth'
import { Toast } from 'native-base'

const queryLogin = (params) => {
  return new Promise((resolve, reject) => {
    return fetch(SERVER_URL + 'user/login', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      method: 'POST',
      body: JSON.stringify(params),
    })
      .then((response) => (response.status === 200 ? response : reject(response)))
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
    yield put({ type: request.response.failed, data: error })
    Toast.show({
      text: error,
      type: 'danger',
    })
    removeCurrentUser()
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN, doLogin)
}
