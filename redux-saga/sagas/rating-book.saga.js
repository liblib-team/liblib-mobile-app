import { call, put, takeLatest } from 'redux-saga/effects'
import { SERVER_URL, getHeaders } from '../../auth'
import { GET_RATING_BOOK, POST_RATING_BOOK } from '../actions/action-type'
import { Toast } from 'native-base'

const queryGetRatingBook = (id) => {
  return new Promise((resolve, reject) => {
    return fetch(SERVER_URL + 'rating/list/' + id, {
      headers: getHeaders(false),
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
    yield put({ type: request.response.success, data: data })
  } catch (error) {
    console.error(error)
  }
}

const queryPostRatingBook = (review) => {
  return new Promise((resolve, reject) => {
    return fetch(SERVER_URL + 'rating/post', {
      headers: getHeaders(true),
      method: 'POST',
      body: JSON.stringify({
        bookId: review.bookId,
        point: review.point,
        comment: review.comment,
      }),
    })
      .then((response) => (response.status === 200 ? response : reject(response)))
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  })
}

function* doQueryPostRatingBook(request) {
  try {
    const  data = yield call(queryPostRatingBook, request.review)
    yield put({ type: request.response.success, data: data })
    Toast.show({
      text: 'Bình luận thành công',
      type: 'success',
    })
  } catch (error) {
    yield put({ type: request.response.failed })
    console.log(error)
    Toast.show({
      text: 'Bình luận không thành công',
      type: 'danger',
    })
  }
}

export function* watchQueryGetRatingBook() {
  yield takeLatest(GET_RATING_BOOK, doQueryGetRatingBook)
}

export function* watchQueryPostRatingBook() {
  yield takeLatest(POST_RATING_BOOK, doQueryPostRatingBook)
}
