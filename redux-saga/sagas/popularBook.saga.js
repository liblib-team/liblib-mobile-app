import { call, put, takeLatest } from 'redux-saga/effects'
import { Toast } from 'native-base'
import { GET_TOP_VIEW_BOOK } from '../actions/action-type'
import { SERVER_URL } from '../../auth'

const queryPopularBook = () => {
  return new Promise((resolve, reject) => {
    return fetch(SERVER_URL + 'book/list/popular', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      method: 'GET',
    })
      .then((response) => (response.status === 200 ? response : reject(response)))
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  })
}

function* doQueryPopularBook(request) {
  try {
    const data = yield call(queryPopularBook)
    console.log(data)
    yield put({ type: request.response.success, data: data })
  } catch (error) {
    Toast.show({
      text: error,
      type: 'danger',
    })
  }
}

export function* watchQueryPopularBook() {
  yield takeLatest(GET_TOP_VIEW_BOOK, doQueryPopularBook)
}
