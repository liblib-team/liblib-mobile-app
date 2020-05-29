import { call, put, takeLatest } from 'redux-saga/effects'
import {
  GET_POPULAR_BOOK,
  GET_HOT_BOOKS,
  GET_BOOKS_BY_SUBJECT,
} from '../actions/action-type'
import { SERVER_URL, getHeaders } from '../../auth'

const queryPopularBook = () => {
  return new Promise((resolve, reject) => {
    return fetch(SERVER_URL + 'book/list/popular', {
      headers: getHeaders(false),
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
    yield put({ type: request.response.success, data: data })
  } catch (error) {
    console.error(error)
  }
}

const queryHotBooks = () => {
  return new Promise((resolve, reject) => {
    return fetch(SERVER_URL + 'book/list/rating', {
      headers: getHeaders(false),
      method: 'GET',
    })
      .then((response) => (response.status === 200 ? response : reject(response)))
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  })
}

function* doQueryHotBooks(request) {
  try {
    const data = yield call(queryHotBooks)
    yield put({ type: request.response.success, data: data })
  } catch (error) {
    console.error(error)
  }
}

const queryBooksBySubject = (id) => {
  return new Promise((resolve, reject) => {
    return fetch(SERVER_URL + 'book/list/subject/' + id, {
      headers: getHeaders(false),
      method: 'GET',
    })
      .then((response) => (response.status === 200 ? response : reject(response)))
      .then((response) => response.json())
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  })
}

function* doQueryBooksBySubject(request) {
  try {
    const data = yield call(queryBooksBySubject, request.id)
    yield put({ type: request.response.success, data: data })
  } catch (error) {
    console.log(error)
  }
}

export function* watchQueryPopularBook() {
  yield takeLatest(GET_POPULAR_BOOK, doQueryPopularBook)
}
export function* watchQueryHotBooks() {
  yield takeLatest(GET_HOT_BOOKS, doQueryHotBooks)
}

export function* watchQueryBooksBySubject() {
  yield takeLatest(GET_BOOKS_BY_SUBJECT, doQueryBooksBySubject)
}
