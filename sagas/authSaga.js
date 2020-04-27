import { call, put, takeLatest } from 'redux-saga/effects'
import { LOGIN } from '../actions/action-type'

const queryLogin = (params) => {
  return {
    user: { name: 'minh', id: '17020891' },
    jwt: '2ojuof23804923j4eowef',
  }
}

function* doLogin(request) {
  try {
    const data = request.data
    const userData = yield call(queryLogin, request.data)

    yield put({ type: request.response.success, data: userData })
  } catch (error) {
    yield put({ type: request.response.failed, data: error })
  }
}

export function* watchLogin() {
  console.log('watch login')
  yield takeLatest(LOGIN, doLogin)
}
