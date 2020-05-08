import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_RELEVANCE_BOOKS } from '../actions/action-type'
import { SERVER_URL, getHeaders } from '../../auth'

const queryRelevanceBooks = (id) => {
  return new Promise((resolve, reject) => {
    return fetch(SERVER_URL + 'book/list/relevance/' + id, {
      headers: getHeaders(false),
      method: 'GET',
    })
      .then((response) => (response.status === 200 ? response : reject(response)))
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  })
}

function* doQueryRelevanceBooks(request) {
  try {
    const data = yield call(queryRelevanceBooks, request.id)
    yield put({ type: request.response.success, data: data })
  } catch (error) {
    console.error(error)
  }
}

export function* watchQueryRelevanceBooks() {
  yield takeEvery(GET_RELEVANCE_BOOKS, doQueryRelevanceBooks)
}
