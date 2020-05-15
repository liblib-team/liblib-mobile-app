import { call, put, takeEvery } from 'redux-saga/effects'
import { SERVER_URL, getHeaders } from '../../auth'
import { GET_LIST_BORROWED } from '../actions/action-type'

const queryListBorrowed = () => {
  return new Promise((resolve, reject) => {
    return fetch(SERVER_URL + 'lending/list', {
      headers: getHeaders(true),
      method: 'GET',
    })
      .then((response) => (response.status === 200 ? response : reject(response)))
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  })
}

function* doQueryListBorrowed(request) {
  try {
    const data = yield call(queryListBorrowed)
    yield put({ type: request.response.success, data: data })
  } catch (error) {
    console.error(error)
  }
}

export function* watchQueryListBorrowed() {
  yield takeEvery(GET_LIST_BORROWED, doQueryListBorrowed)
}
