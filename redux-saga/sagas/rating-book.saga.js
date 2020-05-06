import { call, put, takeLatest } from 'redux-saga/effects'
import { SERVER_URL, getHeaders } from '../../auth'
import { GET_RATING_BOOK } from '../actions/action-type'

const queryGetRatingBook = (id) => {
  return new Promise((resolve, reject) => {
    return fetch(SERVER_URL + 'rating/list/' + id, {
      headers: getHeaders(true),
      method: 'GET',
    })
      .then((response) => (response.status === 200 ? response : reject(response)))
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  })
}

function* doQueryGetRatingBook(request) {
  try {
    const data = yield call(queryGetRatingBook, request.id)
    console.log(data)
    yield put({ type: request.response.success, data: data })
  } catch (error) {
    console.error(error)
  }
}

export function* watchQueryGetRatingBook() {
  yield takeLatest(GET_RATING_BOOK, doQueryGetRatingBook)
}
