import { all } from 'redux-saga/effects'

import { watchLogin } from './auth.saga'
import { watchQueryTopViewBook } from './topViewBook.saga'

export default function* rootSaga() {
  yield all([watchLogin(), watchQueryTopViewBook()])
}
