import { all } from 'redux-saga/effects'

import { watchLogin } from './auth.saga'
import { watchQueryPopularBook, watchQueryHotBooks } from './popularBook.saga'
import { watchQueryListSubjects } from './subject.saga'

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchQueryPopularBook(),
    watchQueryHotBooks(),
    watchQueryListSubjects(),
  ])
}
