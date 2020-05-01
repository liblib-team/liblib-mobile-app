import { all } from 'redux-saga/effects'

import { watchLogin } from './auth.saga'
import { watchQueryPopularBook } from './popularBook.saga'

export default function* rootSaga() {
  yield all([watchLogin(), watchQueryPopularBook()])
}
