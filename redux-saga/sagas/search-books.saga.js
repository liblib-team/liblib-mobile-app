import { call, put, takeLatest } from 'redux-saga/effects'
import { SEARCH_BOOKS } from '../actions/action-type'
import { SERVER_URL, getHeaders } from '../../auth'

const querySearchBooks = (key) => {
    return new Promise((resolve, reject) => {
        return fetch(SERVER_URL + 'book/search', {
          headers: getHeaders(false),
          method: 'POST',
          body:  JSON.stringify(
            key
          ),
        })
          .then((response) => (response.status === 200 ? response : reject(response)))
          .then((response) => response.json())
          .then((response) => resolve(response))
          .catch((error) => reject(error))
      })
}

function* doQuerySearchBooks(request) {
    try {
      const data = yield call(querySearchBooks, request.key)
      yield put({ type: request.response.success, data: data })
    } catch (error) {
      console.log(error)
    }
  }
  
  export function* watchQuerySearchBooks() {
    yield takeLatest(SEARCH_BOOKS, doQuerySearchBooks)
  }