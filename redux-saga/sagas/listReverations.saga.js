import { call, put, takeEvery } from 'redux-saga/effects'
import { SERVER_URL, getHeaders } from '../../auth'
import { GET_LIST_RESERVATIONS } from '../actions/action-type'

const queryListReverations = () => {
  return new Promise((resolve, reject) => {
    return fetch(SERVER_URL + 'reservation/list', {
      headers: getHeaders(true),
      method: 'GET',
    })
      .then((response) => (response.status === 200 ? response : reject(response)))
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  })
}

function* doQueryListReverations(request) {
  try {
    const data = yield call(queryListReverations)
    yield put({ type: request.response.success, data: data })
  } catch (error) {
    console.error(error)
  }
}

export function* watchQueryListReverations() {
  yield takeEvery(GET_LIST_RESERVATIONS, doQueryListReverations)
}
