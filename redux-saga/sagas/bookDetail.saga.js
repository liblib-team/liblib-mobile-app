import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_BOOK_DETAIL } from '../actions/action-type'
import { SERVER_URL, getHeaders } from '../../auth'

const queryBookDetail = (id) => {
  return new Promise((resolve, reject) => {
    return fetch(SERVER_URL + 'book/detail/' + id, {
      headers: getHeaders(false),
      method: 'GET',
    })
      .then((response) => (response.status === 200 ? response : reject(response)))
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  })
}

function* doQueryBookDetail(request) {
  try {
    const data = yield call(queryBookDetail, request.id)
    yield put({ type: request.response.success, data: data })
  } catch (error) {
    console.error(error)
  }
}

export function* watchQueryBookDetail() {
  yield takeLatest(GET_BOOK_DETAIL, doQueryBookDetail)
}
