import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_BOOKS_SAME_AUTHORS } from '../actions/action-type'
import { SERVER_URL, getHeaders } from '../../auth'
const queryBooksSameAuthors = (id) => {
  return new Promise((resolve, reject) => {
    return fetch(SERVER_URL + 'book/list/author/' + id, {
      headers: getHeaders(false),
      method: 'GET',
    })
      .then((response) => (response.status === 200 ? response : reject(response)))
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  })
}

function* doQueryBooksSameAuthors(request) {
  try {
    const data = yield call(queryBooksSameAuthors, request.id)
    yield put({ type: request.response.success, data: data })
  } catch (error) {
    console.log(error)
  }
}

export function* watchQueryBooksSameAuthors() {
  yield takeEvery(GET_BOOKS_SAME_AUTHORS, doQueryBooksSameAuthors)
}
